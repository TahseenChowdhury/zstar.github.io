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
              z*star research is a systematic quantitative hedge fund trading
              Asia Pacific equities. Singapore · Hong Kong · New York.
            </p>
          </div>
          <div className="col">
            <h5>Firm</h5>
            <a>About</a><a>Approach</a><a>Leadership</a><a>News</a>
          </div>
          <div className="col">
            <h5>Research</h5>
            <a>Whitepapers</a><a>Working papers</a><a>Essays</a><a>Subscribe</a>
          </div>
          <div className="col">
            <h5>Contact</h5>
            <a>Investors</a><a>Careers</a><a>Press</a><a>Compliance</a>
          </div>
        </div>
        <div className="fine">
          <div>© 2026 z*star research. All rights reserved.</div>
          <div><span>Singapore · Hong Kong · New York</span></div>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
