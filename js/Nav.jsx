// Top navigation. Wordmark on left, links on right.
// Active link gets a 2px purple underline that hangs off the bottom of the
// nav bar, matching the disciplined geometric feel of the brand.

function Nav({ page, onNav }) {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'approach', label: 'Approach' },
    { id: 'research', label: 'Research' },
    { id: 'careers', label: 'Careers' },
  ];
  return (
    <nav className="zsw-nav">
      <a className="brand" onClick={() => onNav('home')}>
        <img src="../../assets/mark-z-purple.png" alt="z*" />
      </a>
      <div className="links">
        {links.map(l => (
          <a key={l.id}
             className={page === l.id ? 'active' : ''}
             onClick={() => onNav(l.id)}>
            {l.label}
          </a>
        ))}
        <button className="zsw-btn primary" onClick={() => onNav('investors')}>
          Investor login <span className="arr">→</span>
        </button>
      </div>
    </nav>
  );
}

window.Nav = Nav;
