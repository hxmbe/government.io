// Sidebar.jsx — Unit/Topic Navigation Tree (with collapse)

const UNITS = [
  { id: 1, title: "Foundations of American Democracy", topics: ["1.1 Ideals of Democracy","1.2 Types of Democracy","1.3 Government Power & Rights","1.4 Articles of Confederation","1.5 Ratification","1.6 Principles of Gov't","1.7 States & Federal Gov't","1.8 Constitutional Federalism","1.9 Federalism in Action"] },
  { id: 2, title: "Interactions Among Branches", topics: ["2.1 Congress","2.2 Powers of Congress","2.3 Congressional Behavior","2.4 Roles of the President","2.5 Checks on Presidency","2.6 Expansion of Exec. Power","2.7 Presidential Communication","2.8 The Judicial Branch","2.9 Legitimacy of Courts","2.10 Court in Action","2.11 Checks on Judiciary","2.12 The Bureaucracy","2.13 Rule-Making Authority","2.14 Accountability"] },
  { id: 3, title: "Civil Liberties & Civil Rights", topics: ["3.1 The Bill of Rights","3.2 Freedom of Religion","3.3 Freedom of Speech","3.4 Freedom of the Press","3.5 Second Amendment","3.6 Amendments & Order","3.7 Selective Incorporation","3.10 Social Movements","3.11 Gov't Responses","3.12 Minority & Majority Rights","3.13 Affirmative Action"] },
  { id: 4, title: "American Political Ideologies", topics: ["4.1 American Attitudes","4.2 Political Socialization","4.3 Changes in Ideology","4.4 Political Events & Ideology","4.5 Measuring Public Opinion","4.6 Limits of Polls","4.7 Ideologies of Parties","4.8 Ideology & Policy Making","4.9 Ideology & Economic Policy","4.10 Social Policy"] },
  { id: 5, title: "Political Participation", topics: ["5.1 Voting Rights","5.2 Voter Turnout","5.3 Political Parties","5.4 How Parties Change","5.5 Third Parties","5.6 Interest Groups","5.7 Groups Influencing Policy","5.8 Electing the President","5.9 Congressional Elections","5.10 Modern Campaigns","5.11 Campaign Finance","5.12 The Media","5.13 Media & Democratic Debate"] },
];

const Sidebar = ({ activeUnit = 2, activeTopic = "2.8 The Judicial Branch", progress = {}, onTopicSelect, onToolSelect, collapsed = false, onToggleCollapse, mobileOpen = false }) => {
  const [expanded, setExpanded] = React.useState({ [activeUnit]: true });

  const toggle = (id) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  const totalDone = Object.keys(progress).length;
  const pct = Math.min(Math.round((totalDone / 50) * 100), 100);

  const TOOLS = [
    { label: "SCOTUS Cases", screen: "scotus", icon: "⚖" },
    { label: "Key Terms",    screen: "vocab",  icon: "V" },
    { label: "Foundational Docs", screen: "docs", icon: "§" },
  ];

  const ToggleBtn = (
    <button
      className="sidebar-toggle"
      onClick={(e) => { e.stopPropagation(); onToggleCollapse && onToggleCollapse(); }}
      title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        style={{ transform: collapsed ? 'rotate(0deg)' : 'rotate(180deg)', transition: 'transform 200ms' }}>
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    </button>
  );

  if (collapsed) {
    return (
      <aside className={`app-sidebar${mobileOpen?' mobile-open':''}`} style={{ ...sidebarStyles.aside, width: 52 }}>
        <div style={{display:'flex',justifyContent:'center',padding:'6px 0 4px',flexShrink:0}}>{ToggleBtn}</div>
        <div className="sidebar-collapsed-rail" style={{paddingTop:0}}>
          {UNITS.map(unit => (
            <div
              key={unit.id}
              className={`collapsed-unit${unit.id === activeUnit ? ' active' : ''}`}
              onClick={() => { onToolSelect && onToolSelect('unit-overview', unit.id); }}
              title={`Unit ${unit.id}: ${unit.title}`}
            >
              {unit.id}
            </div>
          ))}
          <div style={{ width: 24, height: 1, background: 'rgba(255,255,255,0.1)', margin: '8px 0' }} />
          {TOOLS.map(t => (
            <div
              key={t.label}
              className="collapsed-tool"
              onClick={() => onToolSelect && onToolSelect(t.screen)}
              title={t.label}
            >
              {t.icon}
            </div>
          ))}
        </div>
      </aside>
    );
  }

  return (
    <aside className={`app-sidebar${mobileOpen?' mobile-open':''}`} style={sidebarStyles.aside}>
      <div style={{display:'flex',justifyContent:'flex-end',padding:'6px 8px 2px',flexShrink:0}}>{ToggleBtn}</div>
      {/* Score Summary */}
      <div style={sidebarStyles.scoreBox}>
        <div style={sidebarStyles.scorePct}>{pct}%</div>
        <div style={sidebarStyles.scoreLabel}>Topics Correct</div>
        <div style={sidebarStyles.progressWrap}>
          <div style={{ ...sidebarStyles.progressFill, width: `${pct}%`, transition: 'width 600ms ease' }} />
        </div>
        <div style={sidebarStyles.scoreDetail}>{totalDone} topics with correct answers</div>
      </div>

      <div style={sidebarStyles.sectionLabel}>UNITS</div>

      {UNITS.map(unit => {
        const isActive = unit.id === activeUnit;
        const isExpanded = expanded[unit.id];
        return (
          <div key={unit.id}>
            <div
              style={{ ...sidebarStyles.unitRow, ...(isActive ? sidebarStyles.unitActive : {}) }}
              onClick={() => { onToolSelect && onToolSelect('unit-overview', unit.id); }}
            >
              <span style={{ ...sidebarStyles.unitNum, ...(isActive ? sidebarStyles.unitNumActive : {}) }}>{unit.id}</span>
              <span style={sidebarStyles.unitTitle}>{unit.title}</span>
              <div
                onClick={e => { e.stopPropagation(); toggle(unit.id); }}
                style={{ marginLeft:'auto', flexShrink:0, cursor:'pointer', width:32, height:32, display:'flex', alignItems:'center', justifyContent:'center', borderRadius:6, background: isExpanded?'rgba(255,255,255,0.1)':'transparent', transition:'background 150ms', WebkitTapHighlightColor:'transparent' }}
                onMouseEnter={e=>e.currentTarget.style.background='rgba(255,255,255,0.14)'}
                onMouseLeave={e=>e.currentTarget.style.background=isExpanded?'rgba(255,255,255,0.1)':'transparent'}
              >
                <svg
                  style={{ transform:isExpanded?'rotate(90deg)':'none', transition:'transform 150ms', display:'block' }}
                  width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9BA5B2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </div>
            </div>
            {isExpanded && unit.topics.map(topic => {
              const isTopic = topic === activeTopic;
              const isDone = progress[topic];
              return (
                <div
                  key={topic}
                  style={{ ...sidebarStyles.topicRow, ...(isTopic ? sidebarStyles.topicActive : {}), ...(isDone && !isTopic ? sidebarStyles.topicDone : {}) }}
                  onClick={() => onTopicSelect && onTopicSelect(topic, unit.id)}
                >
                  <span style={sidebarStyles.topicDot}>
                    {isDone ? '✓' : isTopic ? '›' : '·'}
                  </span>
                  {topic}
                </div>
              );
            })}
          </div>
        );
      })}

      <div style={sidebarStyles.sectionLabel}>QUICK ACCESS</div>
      {TOOLS.map(t => (
        <div key={t.label} style={sidebarStyles.toolRow} onClick={() => onToolSelect && onToolSelect(t.screen)}>
          <span style={{ color: 'var(--theme-gold, #C9A84C)', fontSize: 11, marginRight: 9, width: 14, textAlign: 'center' }}>{t.icon}</span>
          {t.label}
          <svg style={{ marginLeft: 'auto' }} width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#748092" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </div>
      ))}
    </aside>
  );
};

const sidebarStyles = {
  aside: { width: 234, background: 'var(--theme-sidebar, #1B2A4A)', display: 'flex', flexDirection: 'column', overflowY: 'auto', overflowX: 'visible', flexShrink: 0, height: '100%' },
  scoreBox: { background: 'rgba(255,255,255,0.06)', margin: '14px 12px', borderRadius: 8, padding: '12px 14px' },
  scorePct: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.75rem', fontWeight: 700, color: '#fff', lineHeight: 1 },
  scoreLabel: { fontFamily: "'Source Sans 3', Arial, sans-serif", fontSize: 10, color: '#748092', marginBottom: 8, marginTop: 2 },
  progressWrap: { background: 'rgba(255,255,255,0.12)', borderRadius: 9999, height: 5, overflow: 'hidden', marginBottom: 6 },
  progressFill: { background: 'var(--theme-gold, #C9A84C)', height: '100%', borderRadius: 9999 },
  scoreDetail: { fontFamily: "'Source Sans 3', Arial, sans-serif", fontSize: 10, color: '#5A6779' },
  sectionLabel: { fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', color: '#404E60', padding: '12px 16px 4px', fontFamily: "'Source Sans 3', Arial, sans-serif", textTransform: 'uppercase' },
  unitRow: { display: 'flex', alignItems: 'center', gap: 8, padding: '8px 14px', cursor: 'pointer', transition: 'background 150ms' },
  unitActive: { background: 'rgba(255,255,255,0.08)' },
  unitNum: { width: 20, height: 20, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: '#748092', flexShrink: 0, fontFamily: "'Source Sans 3', Arial, sans-serif" },
  unitNumActive: { background: 'var(--theme-accent, #B22234)', color: '#fff' },
  unitTitle: { fontSize: 11.5, fontWeight: 600, color: '#BFC6D0', lineHeight: 1.35, fontFamily: "'Source Sans 3', Arial, sans-serif" },
  topicRow: { padding: '5px 14px 5px 36px', fontSize: 11.5, color: '#5A6779', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontFamily: "'Source Sans 3', Arial, sans-serif", transition: 'color 150ms' },
  topicActive: { color: '#fff', fontWeight: 600 },
  topicDone: { color: '#2A7A4B' },
  topicDot: { fontSize: 10, width: 12, textAlign: 'center', flexShrink: 0 },
  toolRow: { padding: '8px 14px', fontSize: 12, color: '#748092', cursor: 'pointer', fontFamily: "'Source Sans 3', Arial, sans-serif", display: 'flex', alignItems: 'center', transition: 'color 150ms, background 150ms', borderRadius: 0 },
};

Object.assign(window, { Sidebar, UNITS });
