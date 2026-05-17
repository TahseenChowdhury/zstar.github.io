// Home hero — large editorial headline, lede, two CTAs, ticker strip.
// The asterisk in the headline picks up the brand purple.

function Hero({ onNav }) {
  return (
    <section className="zsw-hero zsw-wrap" style={{ position: 'relative' }}>
      <span className="zsw-aster" style={{ width: 520, height: 520, right: -40, top: -80 }}></span>
      <div className="eyebrow">01 — z*star research</div>
      <h1>
        Headline placeholder<span className="ast">.</span>
      </h1>
      <p className="lede">
        Short lede placeholder. One or two sentences describing the firm.
      </p>
      <div className="cta-row">
        <button className="zsw-btn primary lg" onClick={() => onNav('approach')}>
          Primary action <span className="arr">→</span>
        </button>
        <button className="zsw-btn ghost" onClick={() => onNav('research')}>
          Secondary action →
        </button>
      </div>
      <div className="ticker">
        <StatBlock num="—" label="Stat label" />
        <StatBlock num="—" label="Stat label" />
        <StatBlock num="—" label="Stat label" />
        <StatBlock num="—" label="Stat label" />
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
