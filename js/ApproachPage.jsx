// Approach — long-form editorial. Two-column body, numbered eyebrows,
// pullquote, oversize asterisk graphic in the background.

function ApproachPage() {
  return (
    <section className="zsw-edit zsw-wrap" style={{ position: 'relative' }}>
      <span className="zsw-aster" style={{ width: 720, height: 720, right: -180, top: 80 }}></span>
      <div className="head">
        <div className="eyebrow"><span className="num">04</span> Approach</div>
        <h1>How we build alpha.</h1>
      </div>

      <div className="body">
        <div className="label">§1 — Markets</div>
        <div>
          <p className="lead">
            Asia Pacific equities are the markets most global managers under-serve.
            Fragmented across regulators, dominated by retail flow, expensive to
            access — and exactly where mispricings live longest.
          </p>
          <p>
            We trade six APAC markets directly: Japan, Korea, Taiwan, Hong Kong,
            Singapore, and Australia. Each gets its own data pipeline, its own
            cost model, its own execution profile. We do not assume a global
            factor explains them all.
          </p>
        </div>
      </div>

      <div className="pullquote">
        Trading costs belong inside the alpha — not bolted on afterwards.
      </div>

      <div className="body">
        <div className="label">§2 — Models</div>
        <div>
          <p>
            Our alpha models are machine-learning systems trained on local
            data — corporate filings in the local language, regional
            microstructure, and the regulator-specific corporate actions that
            most cross-market models smooth over.
          </p>
          <p>
            Every model carries its own cost surface. A signal that survives
            implementation cost, market impact, and capacity decay is a signal
            worth trading. The rest is research debt.
          </p>
        </div>
      </div>

      <div className="body">
        <div className="label">§3 — Culture</div>
        <div>
          <p>
            We run a hub-and-spoke research model. Ideas move freely across
            teams instead of pooling in silos. Researchers own their work from
            hypothesis to live PnL — and own the attribution that follows.
          </p>
          <p>
            We are deliberately small. Capacity is a finite resource and we
            ration it carefully against opportunity, not assets-under-management
            targets.
          </p>
        </div>
      </div>
    </section>
  );
}

window.ApproachPage = ApproachPage;
