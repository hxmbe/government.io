// Header.jsx — AP Gov Website Top Navigation (no redundant nav links)

const Header = ({ currentUser = "Alex Johnson", onSearch }) => {
  return (
    <header style={headerStyles.bar}>
      {/* Logo */}
      <div style={headerStyles.logo}>
        <div style={headerStyles.logoMark}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect width="22" height="22" rx="5" fill="#B22234"/>
            <text x="11" y="16" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="serif">AP</text>
          </svg>
        </div>
        <div>
          <div style={headerStyles.logoTitle}>AP Gov Practice</div>
          <div style={headerStyles.logoSub}>U.S. Government &amp; Politics</div>
        </div>
      </div>

      {/* Search */}
      <div style={headerStyles.searchBox}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9BA5B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input style={headerStyles.searchInput} placeholder="Search cases, terms, topics…" />
      </div>

      {/* Right side */}
      <div style={headerStyles.right}>
        <div style={headerStyles.badge}>AMSCO Edition</div>
        <div style={headerStyles.avatar}>{currentUser.charAt(0)}</div>
      </div>
    </header>
  );
};

const headerStyles = {
  bar: {
    background: '#1B2A4A',
    height: 54,
    display: 'flex',
    alignItems: 'center',
    padding: '0 24px',
    gap: 20,
    flexShrink: 0,
    boxShadow: '0 1px 0 rgba(255,255,255,0.06)',
    zIndex: 100,
  },
  logo: { display: 'flex', alignItems: 'center', gap: 10, minWidth: 190 },
  logoMark: { flexShrink: 0 },
  logoTitle: { color: '#fff', fontWeight: 700, fontSize: 15, fontFamily: "'Source Sans 3', Arial, sans-serif", lineHeight: 1.2 },
  logoSub: { color: '#748092', fontSize: 10, fontFamily: "'Source Sans 3', Arial, sans-serif", letterSpacing: '0.03em' },
  searchBox: {
    display: 'flex', alignItems: 'center', gap: 8, flex: 1, maxWidth: 400,
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: 7, padding: '7px 14px',
  },
  searchInput: {
    background: 'transparent', border: 'none', outline: 'none',
    color: '#fff', fontSize: 13, width: '100%',
    fontFamily: "'Source Sans 3', Arial, sans-serif",
  },
  right: { display: 'flex', alignItems: 'center', gap: 12, marginLeft: 'auto' },
  badge: {
    fontFamily: "'Source Sans 3', Arial, sans-serif", fontSize: 10, fontWeight: 700,
    letterSpacing: '0.06em', textTransform: 'uppercase',
    background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.35)',
    color: '#C9A84C', padding: '4px 10px', borderRadius: 9999,
  },
  avatar: {
    width: 32, height: 32, borderRadius: '50%',
    background: '#B22234', color: '#fff',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 13, fontWeight: 700,
    fontFamily: "'Source Sans 3', Arial, sans-serif",
    cursor: 'pointer',
  },
};

Object.assign(window, { Header });
