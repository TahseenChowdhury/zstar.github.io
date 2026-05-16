// Bottom split-CTA: investors (purple) + careers (phantom). High-contrast,
// no gradients, no decorative imagery. The asterisk graphic optionally
// peeks out of the corner.

function SplitCTA({ onNav }) {
  return (
    <section className="zsw-split">
      <div className="pane purple" style={{ position: 'relative', overflow: 'hidden' }}>
        <span className="zsw-aster" style={{ width: 280, height: 280, right: -30, bottom: -120, backgroundImage: "url('../../assets/asterisk-white.png')", opacity: 0.12 }}></span>
        <div className="eyebrow">For investors</div>
        <h3>Long-horizon capital, treated as a research partner.</h3>
        <p>We work with a small group of institutional allocators who value
           transparency, capacity discipline, and a research-first cadence.</p>
        <div className="cta">
          <button className="zsw-btn inverse" onClick={() => onNav?.('investors')}>
            Request access <span className="arr">→</span>
          </button>
        </div>
      </div>
      <div className="pane dark">
        <div className="eyebrow" style={{ color: 'var(--zs-space)' }}>For researchers</div>
        <h3>We hire scientists who treat markets as a science.</h3>
        <p>Researchers, ML engineers, execution specialists. Hybrid offices
           in Singapore, Hong Kong, and New York.</p>
        <div className="cta">
          <button className="zsw-btn inverse" onClick={() => onNav?.('careers')}>
            Open roles <span className="arr">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

window.SplitCTA = SplitCTA;
