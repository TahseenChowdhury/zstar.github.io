// Three-up capability tiles. Mono index, sub2 title, p2 body, ghost link.

function Capabilities({ onNav }) {
  const tiles = [
    { idx: '01', title: 'Tile title', body: 'Tile body placeholder.', cta: 'Tile link' },
    { idx: '02', title: 'Tile title', body: 'Tile body placeholder.', cta: 'Tile link' },
    { idx: '03', title: 'Tile title', body: 'Tile body placeholder.', cta: 'Tile link' },
  ];
  return (
    <section className="zsw-section zsw-wrap">
      <div className="section-eyebrow"><span className="num">02</span> What we do</div>
      <h2>Section heading placeholder.</h2>
      <div className="zsw-tiles">
        {tiles.map((t, i) => (
          <article className="zsw-tile" key={i}>
            <div className="idx">{t.idx}</div>
            <h3>{t.title}</h3>
            <p>{t.body}</p>
            <a className="lk" onClick={() => onNav('approach')}>{t.cta} →</a>
          </article>
        ))}
      </div>
    </section>
  );
}

window.Capabilities = Capabilities;
