// Research strip used on Home + Research index. A dense, editorial list.

const RESEARCH = [
  { date: '—', title: 'Paper title placeholder', tags: ['Whitepaper'] },
  { date: '—', title: 'Paper title placeholder', tags: ['Research note'] },
  { date: '—', title: 'Paper title placeholder', tags: ['Working paper'] },
  { date: '—', title: 'Paper title placeholder', tags: ['Whitepaper'] },
  { date: '—', title: 'Paper title placeholder', tags: ['Essay'] },
  { date: '—', title: 'Paper title placeholder', tags: ['Essay'] },
];

function ResearchStrip({ items = RESEARCH.slice(0, 4), onNav, dark = false }) {
  return (
    <section className={dark ? 'zsw-research dark' : 'zsw-research'}>
      <div className="zsw-wrap">
        <div className="section-eyebrow"><span className="num">03</span> Recent research</div>
        <h2 style={{ marginBottom: 32 }}>Section heading placeholder.</h2>
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
