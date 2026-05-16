// Home hero — large editorial headline, lede, two CTAs, ticker strip.
// The asterisk in the headline picks up the brand purple.

function Hero({ onNav }) {
  return (
    <section className="zsw-hero zsw-wrap" style={{ position: 'relative' }}>
      <span className="zsw-aster" style={{ width: 520, height: 520, right: -40, top: -80 }}></span>
      <div className="eyebrow">01 — z*star research · est. 2024</div>
      <h1>
        Capture the<br />rare<span className="ast">.</span>
      </h1>
      <p className="lede">
        A systematic quantitative hedge fund trading Asia Pacific equities
        using advanced machine learning with localized data insights — and
        trading costs built into alpha generation.
      </p>
      <div className="cta-row">
        <button className="zsw-btn primary lg" onClick={() => onNav('approach')}>
          Read our approach <span className="arr">→</span>
        </button>
        <button className="zsw-btn ghost" onClick={() => onNav('research')}>
          Latest research →
        </button>
      </div>
      <div className="ticker">
        <StatBlock num="$1.2B" label="Assets under management" />
        <StatBlock num="+18.4%" label="Strategy YTD · net" />
        <StatBlock num="6" label="APAC equity markets" />
        <StatBlock num="2024" label="Founded" />
      </div>
    </section>
  );
}

function StatBlock({ num, label }) {
  return (
    <div className="zsw-stat">
      <div className="num">{num}</div>
      <div className="lab">{label}</div>
    </div>
  );
}

window.Hero = Hero;
window.StatBlock = StatBlock;
