// Careers page: opening, role table, FAQ row.

function CareersPage() {
  const roles = [
    { ttl: 'Quantitative Researcher · APAC Equities', team: 'Research', loc: 'Singapore / Hong Kong' },
    { ttl: 'ML Engineer · Alpha Platform', team: 'Engineering', loc: 'Singapore' },
    { ttl: 'Execution Specialist · APAC', team: 'Execution', loc: 'Hong Kong' },
    { ttl: 'Senior Researcher · NLP & Filings', team: 'Research', loc: 'Singapore / New York' },
    { ttl: 'Quant Developer · Data Platform', team: 'Engineering', loc: 'New York' },
    { ttl: 'Risk Analyst', team: 'Risk', loc: 'Hong Kong' },
  ];
  return (
    <section className="zsw-careers zsw-wrap">
      <div className="section-eyebrow"><span className="num">05</span> Careers</div>
      <h2 style={{ maxWidth: '22ch' }}>
        We hire scientists who treat markets as a science.
      </h2>
      <p className="zsw-p1" style={{ maxWidth: '60ch', fontSize: 18, lineHeight: 1.6, color: 'var(--zs-fg-2)' }}>
        z*star runs lean by design. Researchers ship their own ideas
        end-to-end and pair across teams when conviction warrants it. We
        prefer disciplined depth to roster size.
      </p>

      <div className="zsw-roles">
        {roles.map((r, i) => (
          <div className="zsw-role" key={i}>
            <div className="ttl">{r.ttl}</div>
            <div className="meta">{r.team}</div>
            <div className="meta">{r.loc}</div>
            <div className="arr">→</div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.CareersPage = CareersPage;
