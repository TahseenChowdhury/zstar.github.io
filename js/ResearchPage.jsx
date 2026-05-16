// Research index. Hero title + filterable card list.

function ResearchPage() {
  const [filter, setFilter] = React.useState('All');
  const filters = ['All', 'Whitepaper', 'Working paper', 'Research note', 'Essay'];

  const matches = (r) => {
    if (filter === 'All') return true;
    return r.tags.some(t => t === filter);
  };

  return (
    <section className="zsw-rindex zsw-wrap">
      <div className="section-eyebrow" style={{ marginTop: 32 }}>
        <span className="num">03</span> Research
      </div>
      <h1>Notes from the lab.</h1>
      <div className="filters">
        {filters.map(f => (
          <button key={f}
                  className={'filter' + (filter === f ? ' on' : '')}
                  onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>
      <div className="zsw-research-list" style={{ marginTop: 24 }}>
        {RESEARCH.filter(matches).map((r, i) => (
          <div className="zsw-research-row" key={i}>
            <div className="date">{r.date}</div>
            <div className="title">{r.title}</div>
            <div className="tags">
              {r.tags.map(t => <span className="tag" key={t}>{t}</span>)}
            </div>
            <div className="arr">→</div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.ResearchPage = ResearchPage;
