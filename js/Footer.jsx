// Inverse-phantom footer. White wordmark left, three columns of links,
// fine print row with copy notice on left, status on right.

function Footer() {
  return (
    <footer className="zsw-footer">
      <div className="zsw-wrap">
        <div className="grid">
          <div>
            <img src="../../assets/logo-wordmark-white.png" alt="z*star research" />
            <p className="desc">
              Firm description placeholder.
            </p>
          </div>
          <div className="col">
            <h5>Firm</h5>
            <a>Link</a><a>Link</a><a>Link</a><a>Link</a>
          </div>
          <div className="col">
            <h5>Research</h5>
            <a>Link</a><a>Link</a><a>Link</a><a>Link</a>
          </div>
          <div className="col">
            <h5>Contact</h5>
            <a>Link</a><a>Link</a><a>Link</a><a>Link</a>
          </div>
        </div>
        <div className="fine">
          <div>© 2026 z*star research. All rights reserved.</div>
          <div><span>—</span></div>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
