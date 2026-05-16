
    function App() {
      const [page, setPage] = React.useState('home');

      // Reset scroll on navigation (without scrollIntoView).
      React.useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }); }, [page]);

      // The home page is intentionally a bare "coming soon" landing — no
      // nav, no footer, no marketing content. The other pages keep the
      // full chrome so the component library stays demonstrable.
      if (page === 'home') {
        return <ComingSoon />;
      }

      return (
        <div className="zsw-page">
          <Nav page={page} onNav={setPage} />
          <main className="zsw-main">
            {page === 'approach' && (
              <>
                <ApproachPage />
                <SplitCTA onNav={setPage} />
              </>
            )}
            {page === 'research' && <ResearchPage />}
            {page === 'careers' && <CareersPage />}
            {page === 'investors' && (
              <div className="zsw-wrap" style={{ padding: '120px 64px', textAlign: 'left' }}>
                <div className="zsw-eyebrow zs-eyebrow" style={{ color: 'var(--zs-fg-4)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600 }}>
                  Investor portal
                </div>
                <h1 style={{ fontSize: 72, fontWeight: 800, letterSpacing: '-0.03em', margin: '12px 0 24px' }}>
                  Sign in or request access.
                </h1>
                <p style={{ fontSize: 18, color: 'var(--zs-fg-2)', maxWidth: '52ch', lineHeight: 1.55 }}>
                  Existing investors can sign in to access quarterly briefs,
                  capacity reports, and the secure data room. New allocators
                  may request access — we'll respond within five business days.
                </p>
                <div style={{ display: 'flex', gap: 14, marginTop: 32 }}>
                  <button className="zsw-btn primary lg" onClick={() => setPage('home')}>Sign in <span className="arr">→</span></button>
                  <button className="zsw-btn secondary lg" onClick={() => setPage('home')}>Request access <span className="arr">→</span></button>
                </div>
              </div>
            )}
          </main>
          <Footer />
        </div>
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
  