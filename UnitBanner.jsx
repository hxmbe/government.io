// UnitBanner.jsx — Unit introduction banner

const UNIT_DATA = {
  1: { title: "Foundations of American Democracy", essentialQ: "How do constitutional principles structure the relationship between government power and individual rights?", topics: 9, questions: 35, color: '#1B2A4A', accent: '#C9A84C' },
  2: { title: "Interactions Among Branches of Government", essentialQ: "How do the three branches check each other's power, and how has that balance shifted over time?", topics: 14, questions: 50, color: '#1B2A4A', accent: '#2D5D8B' },
  3: { title: "Civil Liberties and Civil Rights", essentialQ: "How has the Supreme Court balanced individual freedoms with public order and the demands of a diverse society?", topics: 11, questions: 45, color: '#1B2A4A', accent: '#B22234' },
  4: { title: "American Political Ideologies and Beliefs", essentialQ: "How do political socialization, public opinion, and ideology influence American politics and policy?", topics: 10, questions: 35, color: '#1B2A4A', accent: '#C9A84C' },
  5: { title: "Political Participation", essentialQ: "How do citizens, parties, interest groups, and the media shape political outcomes in American democracy?", topics: 13, questions: 40, color: '#1B2A4A', accent: '#2A7A4B' },
};

const UnitBanner = ({ unitId = 2, onStartPractice }) => {
  const unit = UNIT_DATA[unitId];
  return (
    <div style={{ ...bannerStyles.banner, background: unit.color }}>
      {/* Decorative element */}
      <div style={bannerStyles.decoration} />
      <div style={bannerStyles.content}>
        <div style={bannerStyles.unitLabel}>Unit {unitId} of 5</div>
        <h2 style={bannerStyles.title}>{unit.title}</h2>
        <p style={{ ...bannerStyles.eq, borderLeftColor: unit.accent }}>{unit.essentialQ}</p>
        <div style={bannerStyles.stats}>
          <span style={bannerStyles.stat}><strong>{unit.topics}</strong> Topics</span>
          <span style={bannerStyles.statDivider}>·</span>
          <span style={bannerStyles.stat}><strong>{unit.questions}</strong> Practice Questions</span>
          <span style={bannerStyles.statDivider}>·</span>
          <span style={bannerStyles.stat}>Multiple-Choice &amp; FRQ</span>
        </div>
        <div style={bannerStyles.actions}>
          <button style={{ ...bannerStyles.btn, background: unit.accent, color: unitId === 3 ? '#fff' : '#fff' }} onClick={onStartPractice}>
            Start Practice →
          </button>
          <button style={bannerStyles.btnOutline}>Review Notes</button>
        </div>
      </div>
    </div>
  );
};

const bannerStyles = {
  banner: { borderRadius: 10, padding: '28px 32px', position: 'relative', overflow: 'hidden' },
  decoration: {
    position: 'absolute', right: -40, top: -40,
    width: 220, height: 220, borderRadius: '50%',
    background: 'rgba(255,255,255,0.04)', pointerEvents: 'none',
  },
  content: { position: 'relative', zIndex: 1 },
  unitLabel: { fontFamily: "'Source Sans 3', Arial, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 8 },
  title: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.6rem', fontWeight: 700, color: '#fff', lineHeight: 1.25, marginBottom: 12, maxWidth: 520 },
  eq: { fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic', fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.55, borderLeft: '3px solid', paddingLeft: 14, marginBottom: 16, maxWidth: 480 },
  stats: { display: 'flex', gap: 8, alignItems: 'center', marginBottom: 20 },
  stat: { fontFamily: "'Source Sans 3', Arial, sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.65)' },
  statDivider: { color: 'rgba(255,255,255,0.3)', fontSize: 12 },
  actions: { display: 'flex', gap: 10 },
  btn: { fontFamily: "'Source Sans 3', Arial, sans-serif", fontSize: 13.5, fontWeight: 700, padding: '9px 22px', borderRadius: 7, border: 'none', cursor: 'pointer' },
  btnOutline: { fontFamily: "'Source Sans 3', Arial, sans-serif", fontSize: 13.5, fontWeight: 600, padding: '9px 20px', borderRadius: 7, border: '1.5px solid rgba(255,255,255,0.3)', background: 'transparent', color: 'rgba(255,255,255,0.8)', cursor: 'pointer' },
};

Object.assign(window, { UnitBanner, UNIT_DATA });
