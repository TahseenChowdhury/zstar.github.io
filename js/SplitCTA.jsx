// Bottom split-CTA: investors (purple) + careers (phantom). High-contrast,
// no gradients, no decorative imagery. The asterisk graphic optionally
// peeks out of the corner.

function SplitCTA({ onNav }) {
  return (
    <section className="zsw-split">
      <div className="pane purple" style={{ position: 'relative', overflow: 'hidden' }}>
        <span className="zsw-aster" style={{ width: 280, height: 280, right: -30, bottom: -120, backgroundImage: "url('../../assets/asterisk-white.png')", opacity: 0.12 }}></span>
        <div className="eyebrow">For investors</div>
        <h3>Pane heading placeholder.</h3>
        <p>Pane body placeholder.</p>
        <div className="cta">
          <button className="zsw-btn inverse" onClick={() => onNav?.('investors')}>
            Pane action <span className="arr">→</span>
          </button>
        </div>
      </div>
      <div className="pane dark">
        <div className="eyebrow" style={{ color: 'var(--zs-space)' }}>For researchers</div>
        <h3>Pane heading placeholder.</h3>
        <p>Pane body placeholder.</p>
        <div className="cta">
          <button className="zsw-btn inverse" onClick={() => onNav?.('careers')}>
            Pane action <span className="arr">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

window.SplitCTA = SplitCTA;
