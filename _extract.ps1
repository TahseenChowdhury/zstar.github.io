$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$src  = Join-Path $root 'z-star-coming-soon.html'

# Read as raw UTF-8 — PS 5.1's Get-Content defaults to system codepage and would corrupt em-dashes etc.
$raw = [System.IO.File]::ReadAllText($src, [System.Text.UTF8Encoding]::new($false))
$lines = $raw -split "`r?`n"
$manifestJson    = $lines[167]
$templateJson    = $lines[175]

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

function GunzipBytes([byte[]]$bytes) {
  $in  = New-Object System.IO.MemoryStream(,$bytes)
  $gz  = New-Object System.IO.Compression.GZipStream($in, [System.IO.Compression.CompressionMode]::Decompress)
  $out = New-Object System.IO.MemoryStream
  $gz.CopyTo($out)
  $gz.Dispose(); $in.Dispose()
  return $out.ToArray()
}

# Use .NET JSON parsers via PowerShell's ConvertFrom-Json (deep enough for our payloads).
$manifest = $manifestJson | ConvertFrom-Json
$template = $templateJson | ConvertFrom-Json

# Decide a filename for each UUID based on mime and order of appearance in template.
$assets = @{}
foreach ($prop in $manifest.PSObject.Properties) {
  $u = $prop.Name; $e = $prop.Value
  $assets[$u] = [pscustomobject]@{ uuid=$u; mime=$e.mime; compressed=$e.compressed; data=$e.data; name=$null; bytes=$null }
}

# Discover order each UUID appears in the template — first-seen wins.
$order = [System.Collections.Generic.List[string]]::new()
$seen  = @{}
$matches = [regex]::Matches($template, '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')
foreach ($m in $matches) {
  $u = $m.Value
  if (-not $seen.ContainsKey($u) -and $assets.ContainsKey($u)) {
    $seen[$u] = $true
    $order.Add($u)
  }
}
# Append any UUIDs only in manifest, not in template.
foreach ($u in $assets.Keys) { if (-not $seen.ContainsKey($u)) { $order.Add($u) } }

# Decode every asset into bytes.
foreach ($u in $assets.Keys) {
  $a = $assets[$u]
  $raw = [Convert]::FromBase64String($a.data)
  if ($a.compressed) { $raw = GunzipBytes $raw }
  $a.bytes = $raw
}

# === Naming strategy ===
# Vendor scripts: first 3 text/javascript entries in template order are React, ReactDOM, Babel-standalone.
# JSX scripts: small application/javascript entries — peek at the source to find the component name.
# Images & font: stable names based on usage.

# Map known UUIDs (from prior inspection) → names.
# wordmark (favicon + footer logo) and asterisk image are referenced in CSS by url(uuid).
$wordmarkUuid = $null
$asterUuid    = $null
$fontUuid     = $null

foreach ($u in $assets.Keys) {
  $a = $assets[$u]
  if ($a.mime -eq 'font/ttf') { $fontUuid = $u }
}

# Heuristic for images: the wordmark is in <link rel="icon"> and the .zsw-coming-wordmark background.
# The asterisk image is referenced inside .zsw-aster and .zsw-coming::before.
$iconMatch = [regex]::Match($template, '<link rel="icon" href="([0-9a-f-]+)"')
if ($iconMatch.Success) { $wordmarkUuid = $iconMatch.Groups[1].Value }

$asterMatch = [regex]::Match($template, '\.zsw-aster\s*\{[^}]*url\("([0-9a-f-]+)"\)', 'Singleline')
if ($asterMatch.Success) { $asterUuid = $asterMatch.Groups[1].Value }

# Assign vendor JS names by order seen in template head.
$jsVendorOrder = @('react.min.js','react-dom.min.js','babel.min.js')
$vendorIdx = 0

# Peek into text/babel scripts to choose meaningful filenames.
function PickJsxName([byte[]]$bytes, [int]$index) {
  $txt = [System.Text.Encoding]::UTF8.GetString($bytes)
  # find "function Foo(" — first top-level function name
  $m = [regex]::Match($txt, '(?m)^\s*function\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(')
  if ($m.Success) { return ($m.Groups[1].Value + '.jsx') }
  return ("component_$index.jsx")
}

$jsxIdx = 1
foreach ($u in $order) {
  $a = $assets[$u]
  switch ($a.mime) {
    'image/png' {
      if ($u -eq $wordmarkUuid) { $a.name = 'images/wordmark.png' }
      elseif ($u -eq $asterUuid) { $a.name = 'images/asterisk.png' }
      else { $a.name = "images/$u.png" }
    }
    'font/ttf' {
      $a.name = 'fonts/Manrope-VariableFont_wght.ttf'
    }
    'text/javascript' {
      if ($vendorIdx -lt $jsVendorOrder.Count) {
        $a.name = "js/vendor/$($jsVendorOrder[$vendorIdx])"
        $vendorIdx++
      } else {
        $a.name = "js/vendor/$u.js"
      }
    }
    'application/javascript' {
      $picked = PickJsxName $a.bytes $jsxIdx
      $a.name = "js/$picked"
      $jsxIdx++
    }
    default {
      $a.name = "assets/$u.bin"
    }
  }
}

# === Write asset files ===
$outDirs = @('css','js','js\vendor','images','fonts') | ForEach-Object { Join-Path $root $_ }
foreach ($d in $outDirs) { if (-not (Test-Path $d)) { New-Item -ItemType Directory -Path $d | Out-Null } }

foreach ($u in $assets.Keys) {
  $a = $assets[$u]
  $full = Join-Path $root ($a.name -replace '/', '\')
  $dir  = Split-Path $full
  if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
  [System.IO.File]::WriteAllBytes($full, $a.bytes)
}

# === Rewrite the template ===
$out = $template
foreach ($u in $assets.Keys) {
  $out = $out.Replace($u, $assets[$u].name)
}

# Strip integrity + crossorigin attrs (they were SRI-bound to UUID bytes).
$out = [regex]::Replace($out, '\s+integrity="[^"]*"', '')
$out = [regex]::Replace($out, '\s+crossorigin="[^"]*"', '')

# Pull the inline <style>…</style> block out into css/styles.css.
$styleMatch = [regex]::Match($out, '<style>(.*?)</style>', 'Singleline')
if ($styleMatch.Success) {
  $css = $styleMatch.Groups[1].Value
  # URLs inside css/styles.css are relative to the CSS file. Walk one level up to reach images/, fonts/.
  $css = $css -replace 'url\("(images/[^"]+)"\)', 'url("../$1")'
  $css = $css -replace 'url\("(fonts/[^"]+)"\)',  'url("../$1")'
  [System.IO.File]::WriteAllText((Join-Path $root 'css\styles.css'), $css, [System.Text.UTF8Encoding]::new($false))
  $out = $out.Substring(0, $styleMatch.Index) + '<link rel="stylesheet" href="css/styles.css">' + $out.Substring($styleMatch.Index + $styleMatch.Length)
}

# Pull the inline <script type="text/babel" data-presets="env,react"> block out into js/app.jsx.
$inlineBabel = [regex]::Match($out, '<script type="text/babel" data-presets="env,react">(.*?)</script>', 'Singleline')
if ($inlineBabel.Success) {
  $jsx = $inlineBabel.Groups[1].Value
  [System.IO.File]::WriteAllText((Join-Path $root 'js\app.jsx'), $jsx, [System.Text.UTF8Encoding]::new($false))
  $replacement = '<script type="text/babel" data-presets="env,react" src="js/app.jsx"></script>'
  $out = $out.Substring(0, $inlineBabel.Index) + $replacement + $out.Substring($inlineBabel.Index + $inlineBabel.Length)
}

[System.IO.File]::WriteAllText((Join-Path $root 'index.html'), $out, [System.Text.UTF8Encoding]::new($false))

# Report.
"Wrote index.html ($($out.Length) chars)"
"Assets:"
foreach ($u in $assets.Keys | Sort-Object { $assets[$_].name }) {
  "  {0,-60} {1,10} bytes  ({2})" -f $assets[$u].name, $assets[$u].bytes.Length, $assets[$u].mime
}
