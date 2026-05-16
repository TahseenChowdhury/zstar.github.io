// Three-up capability tiles. Mono index, sub2 title, p2 body, ghost link.

function Capabilities({ onNav }) {
  const tiles = [
    {
      idx: '01',
      title: 'Localized data, not generic models',
      body: 'Asia Pacific markets reward firms that build for them. Our data pipelines are local-first — vernacular filings, regional microstructure, regulator-specific corporate actions.',
      cta: 'Data philosophy',
    },
    {
      idx: '02',
      title: 'Cost-aware alpha generation',
      body: 'Trading cost models live inside the alpha, not bolted on after. The signals we trust survive the round trip from idea to execution to attribution.',
      cta: 'Read the paper',
    },
    {
      idx: '03',
      title: 'Hub-and-spoke research',
      body: 'A flat research culture without silos. Researchers ship their own ideas end-to-end and pair across teams when conviction warrants it.',
      cta: 'Inside the lab',
    },
  ];
  return (
    <section className="zsw-section zsw-wrap">
      <div className="section-eyebrow"><span className="num">02</span> What we do</div>
      <h2>A quantitative hedge fund built for the markets we actually trade.</h2>
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
