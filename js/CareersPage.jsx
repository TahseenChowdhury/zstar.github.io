// Careers page: opening, role table, FAQ row.

function CareersPage() {
  const roles = [
    { ttl: 'Role title', team: 'Team', loc: 'Location' },
    { ttl: 'Role title', team: 'Team', loc: 'Location' },
    { ttl: 'Role title', team: 'Team', loc: 'Location' },
  ];
  return (
    <section className="zsw-careers zsw-wrap">
      <div className="section-eyebrow"><span className="num">05</span> Careers</div>
      <h2 style={{ maxWidth: '22ch' }}>
        Section heading placeholder.
      </h2>
      <p className="zsw-p1" style={{ maxWidth: '60ch', fontSize: 18, lineHeight: 1.6, color: 'var(--zs-fg-2)' }}>
        Body paragraph placeholder.
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
