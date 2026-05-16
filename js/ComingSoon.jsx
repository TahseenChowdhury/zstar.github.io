// Coming-soon landing.
// Minimal holding page: short wordmark, "Coming Soon" headline,
// one supporting line. No form. No email capture.

function ComingSoon() {
  return (
    <main className="zsw-coming">
      <header className="zsw-coming-top">
        <div className="zsw-coming-wordmark"
             role="img"
             aria-label="z*star">
        </div>
        <span className="zsw-coming-status">
          <span className="dot"></span> Coming soon
        </span>
      </header>

      <section className="zsw-coming-center">
        <span className="zsw-coming-eyebrow">
          <span className="lc">z</span> Star Research · EST 2026
        </span>
        <h1 className="zsw-coming-h1">
          Coming Soon<span className="ast">.</span>
        </h1>
        <p className="zsw-coming-lede">
          A new home for our research is on its way.
        </p>
      </section>

      <footer className="zsw-coming-foot">
        <span>© {new Date().getFullYear()} z Star Research US LP</span>
        <span className="zs-mono">Hong Kong · New York</span>
      </footer>
    </main>
  );
}

window.ComingSoon = ComingSoon;
