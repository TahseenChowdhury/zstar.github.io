// Approach — long-form editorial. Two-column body, numbered eyebrows,
// pullquote, oversize asterisk graphic in the background.

function ApproachPage() {
  return (
    <section className="zsw-edit zsw-wrap" style={{ position: 'relative' }}>
      <span className="zsw-aster" style={{ width: 720, height: 720, right: -180, top: 80 }}></span>
      <div className="head">
        <div className="eyebrow"><span className="num">04</span> Approach</div>
        <h1>Section heading placeholder.</h1>
      </div>

      <div className="body">
        <div className="label">§1 — Section</div>
        <div>
          <p className="lead">Lead paragraph placeholder.</p>
          <p>Body paragraph placeholder.</p>
        </div>
      </div>

      <div className="pullquote">
        Pullquote placeholder.
      </div>

      <div className="body">
        <div className="label">§2 — Section</div>
        <div>
          <p>Body paragraph placeholder.</p>
          <p>Body paragraph placeholder.</p>
        </div>
      </div>

      <div className="body">
        <div className="label">§3 — Section</div>
        <div>
          <p>Body paragraph placeholder.</p>
          <p>Body paragraph placeholder.</p>
        </div>
      </div>
    </section>
  );
}

window.ApproachPage = ApproachPage;
