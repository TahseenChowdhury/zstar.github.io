// Research strip used on Home + Research index. A dense, editorial list.

const RESEARCH = [
  {
    date: '2026.03',
    title: 'Cost-aware alpha in fragmented APAC markets',
    tags: ['Whitepaper', 'APAC', 'Microstructure'],
  },
  {
    date: '2026.02',
    title: 'Vernacular filings as a primary signal',
    tags: ['Research note', 'NLP', 'Japan · Korea'],
  },
  {
    date: '2026.01',
    title: 'Retail flows in Taiwan: a regime-switching study',
    tags: ['Working paper', 'Taiwan', 'Behavioral'],
  },
  {
    date: '2025.11',
    title: 'Capacity, decay, and the cost of conviction',
    tags: ['Whitepaper', 'Capacity', 'Risk'],
  },
  {
    date: '2025.09',
    title: 'On building data engines for the markets you trade',
    tags: ['Essay', 'Engineering'],
  },
  {
    date: '2025.07',
    title: 'A hub-and-spoke model for systematic research',
    tags: ['Operating note', 'Culture'],
  },
];

function ResearchStrip({ items = RESEARCH.slice(0, 4), onNav, dark = false }) {
  return (
    <section className={dark ? 'zsw-research dark' : 'zsw-research'}>
      <div className="zsw-wrap">
        <div className="section-eyebrow"><span className="num">03</span> Recent research</div>
        <h2 style={{ marginBottom: 32 }}>Notes from the lab.</h2>
        <div className="zsw-research-list">
          {items.map((r, i) => (
            <div className="zsw-research-row" key={i} onClick={() => onNav?.('research')}>
              <div className="date">{r.date}</div>
              <div className="title">{r.title}</div>
              <div className="tags">
                {r.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
              <div className="arr">→</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <button className="zsw-btn ghost" onClick={() => onNav?.('research')}>
            View all research <span className="arr">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

window.RESEARCH = RESEARCH;
window.ResearchStrip = ResearchStrip;
