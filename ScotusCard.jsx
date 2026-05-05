// ScotusCard.jsx — Supreme Court Case Reference Card with expanded facts

const SCOTUS_CASES = [
  {
    name: "Marbury v. Madison", year: 1803, unit: 2, topic: "2.8",
    principle: "Judicial Review",
    facts: "President John Adams appointed William Marbury as a justice of the peace in his final hours in office. When Thomas Jefferson became president, Secretary of State James Madison refused to deliver the commission. Marbury sued directly in the Supreme Court, asking for a writ of mandamus.",
    ruling: "The Supreme Court ruled that while Marbury had a right to his commission, the section of the Judiciary Act of 1789 that gave the Court original jurisdiction over writs of mandamus was unconstitutional.",
    significance: "Established judicial review — the Supreme Court's power to declare laws unconstitutional. Considered the most important SCOTUS decision in American history.",
    decision: "4–0 (Marshall, C.J.)",
  },
  {
    name: "McCulloch v. Maryland", year: 1819, unit: 1, topic: "1.8",
    principle: "Implied Powers / Federal Supremacy",
    facts: "Congress chartered the Second Bank of the United States. Maryland imposed a tax on the bank's notes. James McCulloch, the bank's cashier in Baltimore, refused to pay. Maryland argued Congress had no authority to create a national bank since it isn't explicitly listed in the Constitution.",
    ruling: "Congress may create a national bank under implied powers (Necessary and Proper Clause); states cannot tax federal institutions under the Supremacy Clause.",
    significance: "Established the Necessary and Proper Clause as a broad grant of congressional authority and affirmed federal supremacy over state law.",
    decision: "7–0 (Marshall, C.J.)",
  },
  {
    name: "United States v. Lopez", year: 1995, unit: 1, topic: "1.8",
    principle: "Limits on Commerce Clause",
    facts: "Alfonso Lopez Jr., a 12th-grade student in San Antonio, carried a concealed handgun to school. He was charged under the Gun-Free School Zones Act of 1990, a federal law banning guns near schools. Lopez challenged the law as exceeding Congress's Commerce Clause power.",
    ruling: "Congress exceeded its Commerce Clause power. Possessing a gun near a school is not an economic activity that substantially affects interstate commerce.",
    significance: "First ruling in 60 years to limit Congress's commerce power; signaled a renewed emphasis on federalism and limits on federal authority.",
    decision: "5–4 (Rehnquist, C.J.)",
  },
  {
    name: "Engel v. Vitale", year: 1962, unit: 3, topic: "3.2",
    principle: "Establishment Clause",
    facts: "The New York Board of Regents composed a brief, nondenominational prayer — 'Almighty God, we acknowledge our dependence upon Thee' — for use in public schools. Steven Engel and other parents sued, arguing the prayer violated the First Amendment's Establishment Clause.",
    ruling: "State-sponsored prayer in public schools violates the Establishment Clause of the First Amendment, even if the prayer is nondenominational and participation is voluntary.",
    significance: "Landmark decision separating religion from public education; extended First Amendment protections via selective incorporation to apply to states.",
    decision: "6–1 (Black, J.)",
  },
  {
    name: "Tinker v. Des Moines", year: 1969, unit: 3, topic: "3.3",
    principle: "Free Speech (Students)",
    facts: "Mary Beth Tinker and other students in Des Moines, Iowa wore black armbands to school to protest the Vietnam War. School officials, anticipating disruption, had preemptively banned armbands. The students were suspended and sued, arguing a violation of their First Amendment rights.",
    ruling: "Students do not 'shed their constitutional rights at the schoolhouse gate.' Symbolic speech (wearing armbands) is protected unless it causes substantial disruption to school operations.",
    significance: "Extended First Amendment free speech protections to students in public schools; established the 'substantial disruption' standard.",
    decision: "7–2 (Fortas, J.)",
  },
  {
    name: "New York Times v. United States", year: 1971, unit: 3, topic: "3.4",
    principle: "Freedom of Press / Prior Restraint",
    facts: "The Nixon administration sought to prevent The New York Times and Washington Post from publishing the Pentagon Papers — a classified Defense Department study revealing government deception about the Vietnam War. The government argued publication would harm national security.",
    ruling: "The government failed to meet the heavy burden required to justify prior restraint. Publication was protected under the First Amendment's freedom of the press.",
    significance: "Reinforced the near-absolute prohibition on prior restraint; affirmed the press's watchdog role in a democratic society.",
    decision: "6–3 (Per Curiam)",
  },
  {
    name: "Schenck v. United States", year: 1919, unit: 3, topic: "3.3",
    principle: "Clear and Present Danger",
    facts: "Charles Schenck, the Socialist Party's general secretary, mailed leaflets to drafted men urging them to resist the military draft during World War I. He was convicted under the Espionage Act of 1917. Schenck argued the Act violated his First Amendment free speech rights.",
    ruling: "Free speech may be limited when the words create a 'clear and present danger' of illegal action — Schenck's anti-draft leaflets posed such a danger during wartime.",
    significance: "Introduced the 'clear and present danger' test for when government may restrict speech; established that constitutional rights can have wartime limits.",
    decision: "9–0 (Holmes, J.)",
  },
  {
    name: "Brown v. Board of Education", year: 1954, unit: 3, topic: "3.10",
    principle: "Equal Protection / Desegregation",
    facts: "Oliver Brown and other Black families in Topeka, Kansas challenged school segregation after Brown's daughter Linda was denied admission to a nearby white school. The NAACP, led by Thurgood Marshall, argued that segregated schools were inherently unequal, directly challenging Plessy v. Ferguson (1896).",
    ruling: "Racial segregation in public schools is unconstitutional under the Equal Protection Clause of the Fourteenth Amendment. 'Separate but equal' has no place in public education.",
    significance: "Overturned Plessy v. Ferguson; sparked the modern Civil Rights Movement; one of the most transformative decisions in American history.",
    decision: "9–0 (Warren, C.J.)",
  },
  {
    name: "Baker v. Carr", year: 1962, unit: 2, topic: "2.3",
    principle: "One Person, One Vote (Justiciability)",
    facts: "Charles Baker and other Tennessee residents sued Secretary of State Joseph Carr, arguing that the state legislature's apportionment — unchanged since 1901 — diluted urban voters' power. Rural voters had far more representation per person than city dwellers.",
    ruling: "Federal courts can hear challenges to legislative apportionment; such cases are justiciable (not purely political questions). This opened the door for courts to apply the 'one person, one vote' principle.",
    significance: "Led directly to Reynolds v. Sims (1964) and the 'one person, one vote' standard; fundamentally reshaped electoral district drawing across the country.",
    decision: "6–2 (Brennan, J.)",
  },
  {
    name: "Shaw v. Reno", year: 1993, unit: 2, topic: "2.3",
    principle: "Racial Gerrymandering",
    facts: "After the 1990 census, North Carolina drew a majority-Black congressional district (the 12th) that was extraordinarily narrow and irregular in shape — described as a 'bizarre' worm-shaped district. Ruth Shaw and white voters challenged it as racial gerrymandering.",
    ruling: "Race-based redistricting must satisfy strict scrutiny under the Equal Protection Clause. Districts drawn predominantly based on race are presumptively unconstitutional.",
    significance: "Limited the use of race as the predominant factor in drawing congressional districts; required compelling government interest to justify race-conscious redistricting.",
    decision: "5–4 (O'Connor, J.)",
  },
  {
    name: "McDonald v. Chicago", year: 2010, unit: 3, topic: "3.5",
    principle: "Second Amendment Incorporation",
    facts: "Otis McDonald, a retired maintenance engineer in Chicago, wanted to keep a handgun at home for protection but was prevented by Chicago's handgun ban. Following District of Columbia v. Heller (2008), McDonald sued arguing the Second Amendment applied to state and local governments.",
    ruling: "The Second Amendment right to keep and bear arms is incorporated against states through the Fourteenth Amendment's Due Process Clause.",
    significance: "Incorporated the Second Amendment, making it binding on all state and local governments; extended Heller's protection of individual gun rights to the entire country.",
    decision: "5–4 (Alito, J.)",
  },
  {
    name: "Gideon v. Wainwright", year: 1963, unit: 3, topic: "3.7",
    principle: "Right to Counsel (Incorporation)",
    facts: "Clarence Gideon was charged with breaking and entering a Florida pool hall. He requested a court-appointed attorney but was denied — Florida only provided counsel in capital cases. Gideon represented himself, was convicted, and from prison wrote his own certiorari petition to the Supreme Court.",
    ruling: "The Sixth Amendment right to counsel in criminal cases is incorporated against states. States must provide attorneys to defendants who cannot afford them.",
    significance: "Transformed the American criminal justice system; established the right to a public defender; one of the most celebrated due process decisions.",
    decision: "9–0 (Black, J.)",
  },
  {
    name: "Roe v. Wade", year: 1973, unit: 3, topic: "3.6",
    principle: "Right to Privacy / Due Process",
    facts: "Norma McCorvey ('Jane Roe') was pregnant and sought an abortion in Texas, where it was illegal except to save the mother's life. She sued Dallas County District Attorney Henry Wade. The case raised whether the Constitution protected a woman's right to terminate a pregnancy.",
    ruling: "The Constitution's implied right to privacy, found in the Due Process Clause of the 14th Amendment, protects a woman's right to abortion. The Court created a trimester framework regulating state authority.",
    significance: "Established a constitutional right to abortion; overruled in Dobbs v. Jackson Women's Health Organization (2022), returning the issue to states.",
    decision: "7–2 (Blackmun, J.)",
  },
  {
    name: "Citizens United v. FEC", year: 2010, unit: 5, topic: "5.11",
    principle: "Campaign Finance / Free Speech",
    facts: "Citizens United, a conservative nonprofit, wanted to broadcast a critical film about Hillary Clinton during the 2008 primary. The Bipartisan Campaign Reform Act (McCain-Feingold) prohibited corporations from funding 'electioneering communications' near elections. Citizens United sued the FEC.",
    ruling: "Political spending by corporations and unions is a form of protected speech under the First Amendment. The government cannot restrict independent political expenditures by corporations, associations, or labor unions.",
    significance: "Opened the floodgates to unlimited outside spending in elections; led to the creation of Super PACs; one of the most controversial campaign finance decisions in modern history.",
    decision: "5–4 (Kennedy, J.)",
  },
  {
    name: "Obergefell v. Hodges", year: 2015, unit: 3, topic: "3.12",
    principle: "Marriage Equality / Equal Protection",
    facts: "Jim Obergefell and his partner John Arthur married in Maryland, where same-sex marriage was legal, but Ohio refused to recognize it on Arthur's death certificate. Obergefell and other same-sex couples across four states challenged state bans on same-sex marriage.",
    ruling: "Same-sex couples have a fundamental right to marry under both the Due Process Clause and the Equal Protection Clause of the Fourteenth Amendment. States must license and recognize same-sex marriages.",
    significance: "Established marriage equality nationwide; applied the Fourteenth Amendment to prohibit discrimination based on sexual orientation in marriage; landmark civil rights decision.",
    decision: "5–4 (Kennedy, J.)",
  },
];

const ScotusCard = ({ caseData, compact = false, dark = false }) => {
  const c = caseData;
  const bg    = dark ? '#111B2B' : '#fff';
  const bord  = dark ? '#1E2D42' : '#DDE1E9';
  const textP = dark ? '#E8ECF0' : '#1A2030';
  const textS = dark ? '#BFC6D0' : '#2B3748';
  const textM = dark ? '#748092' : '#9BA5B2';
  const textD = dark ? '#9BA5B2' : '#5A6779';
  const factsBg   = dark ? '#0D1421' : '#EEF0F4';
  const rulingBg  = dark ? '#0A1828' : '#F5F0E8';
  const pillBg    = dark ? 'rgba(45,93,139,0.25)' : '#EBF2F9';
  const pillColor = dark ? '#8BAED4' : '#2D5D8B';
  const pillBord  = dark ? 'rgba(45,93,139,0.5)' : '#A3C4DF';
  return (
    <div style={{ background:bg, borderRadius:9, border:`1px solid ${bord}`, padding: compact?'12px 14px':'14px 16px', boxShadow:'0 1px 3px rgba(0,0,0,0.06)', transition:'box-shadow 150ms' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:10, marginBottom:10 }}>
        <div>
          <div style={{ fontSize:10, fontWeight:700, letterSpacing:'0.07em', textTransform:'uppercase', color:'#B22234', marginBottom:3, fontFamily:"'Source Sans 3',Arial,sans-serif" }}>Unit {c.unit} · Topic {c.topic}</div>
          <div style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:'1rem', fontWeight:700, color:textP, fontStyle:'italic', lineHeight:1.3 }}>{c.name}</div>
          <div style={{ fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:11, color:textM, marginTop:2 }}>{c.year} · {c.decision}</div>
        </div>
        <div style={{ fontSize:10, fontWeight:600, background:pillBg, color:pillColor, border:`1px solid ${pillBord}`, padding:'3px 9px', borderRadius:9999, whiteSpace:'nowrap', fontFamily:"'Source Sans 3',Arial,sans-serif", flexShrink:0 }}>{c.principle}</div>
      </div>
      {!compact && (
        <>
          <div style={{ background:factsBg, borderRadius:7, padding:'10px 12px', marginBottom:10 }}>
            <div style={{ fontSize:10, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.07em', color:'#B22234', marginBottom:3, fontFamily:"'Source Sans 3',Arial,sans-serif" }}>Facts of the Case</div>
            <p style={{ fontSize:13, color:textS, lineHeight:1.55, fontFamily:"'Source Sans 3',Arial,sans-serif" }}>{c.facts}</p>
          </div>
          <div style={{ background:rulingBg, borderLeft:`3px solid ${dark?'#4A6FA5':'#1B2A4A'}`, borderRadius:'0 6px 6px 0', padding:'8px 12px', marginBottom:8 }}>
            <div style={{ fontSize:10, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.07em', color:'#B22234', marginBottom:3, fontFamily:"'Source Sans 3',Arial,sans-serif" }}>Ruling</div>
            <p style={{ fontSize:13, color:textS, lineHeight:1.55, fontFamily:"'Source Sans 3',Arial,sans-serif" }}>{c.ruling}</p>
          </div>
          <div style={{ padding:'0 2px' }}>
            <div style={{ fontSize:10, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.07em', color:textM, marginBottom:3, fontFamily:"'Source Sans 3',Arial,sans-serif" }}>Significance</div>
            <p style={{ fontSize:12.5, color:textD, lineHeight:1.5, fontFamily:"'Source Sans 3',Arial,sans-serif" }}>{c.significance}</p>
          </div>
        </>
      )}
    </div>
  );
};

const ScotosList = ({ dark = false }) => {
  const [filter, setFilter] = React.useState('All');
  const [selected, setSelected] = React.useState(null);
  const [search, setSearch] = React.useState('');

  const bg    = dark ? '#111B2B' : '#fff';
  const bord  = dark ? '#1E2D42' : '#DDE1E9';
  const textP = dark ? '#E8ECF0' : '#1A2030';
  const textS = dark ? '#BFC6D0' : '#2B3748';
  const textM = dark ? '#748092' : '#9BA5B2';
  const textD = dark ? '#9BA5B2' : '#5A6779';
  const factsBg  = dark ? '#0D1421' : '#EEF0F4';
  const rulingBg = dark ? '#0A1828' : '#F5F0E8';
  const accentBg = dark ? 'rgba(45,93,139,0.2)' : '#EBF2F9';
  const accentCl = dark ? '#8BAED4' : '#2D5D8B';
  const accentBd = dark ? 'rgba(45,93,139,0.4)' : '#A3C4DF';

  const units = ['All', '1', '2', '3', '5'];
  const filtered = SCOTUS_CASES.filter(c =>
    (filter === 'All' || String(c.unit) === filter) &&
    (search === '' || c.name.toLowerCase().includes(search.toLowerCase()) || c.principle.toLowerCase().includes(search.toLowerCase()))
  );

  const filterBtnStyle = (active) => ({
    fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:12, fontWeight:600,
    padding:'5px 14px', borderRadius:9999, cursor:'pointer', transition:'all 130ms',
    border: `1.5px solid ${active ? 'var(--theme-sidebar,#1B2A4A)' : bord}`,
    background: active ? 'var(--theme-sidebar,#1B2A4A)' : (dark ? '#0D1421' : '#fff'),
    color: active ? '#fff' : (dark ? '#9BA5B2' : '#5A6779'),
  });

  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', gap: 7, marginBottom: 14, flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ display:'flex', background:bg, border:`1.5px solid ${bord}`, borderRadius:7, padding:'6px 12px', gap:6, alignItems:'center' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9BA5B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search cases…"
              style={{ border:'none', outline:'none', fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:13, width:180, color:textP, background:'transparent' }} />
          </div>
          {units.map(u => (
            <button key={u} style={filterBtnStyle(filter === u)} onClick={() => setFilter(u)}>
              {u === 'All' ? 'All Cases' : `Unit ${u}`}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {filtered.map(c => (
            <div key={c.name} onClick={() => setSelected(c === selected ? null : c)}
              style={{ cursor:'pointer', borderRadius:9, outline: selected?.name === c.name ? `2px solid ${dark?'#4A6FA5':'#1B2A4A'}` : 'none' }}>
              <ScotusCard caseData={c} compact={true} dark={dark} />
            </div>
          ))}
          {filtered.length === 0 && <div style={{ padding:32, textAlign:'center', color:textM, fontFamily:"'Source Sans 3',Arial,sans-serif" }}>No cases match your search.</div>}
        </div>
      </div>

      {selected && (
        <div style={{ width:340, flexShrink:0, alignSelf:'flex-start', position:'sticky', top:0 }}>
          <div style={{ background:bg, borderRadius:10, border:`1px solid ${bord}`, padding:'20px 22px', boxShadow:`0 4px 16px rgba(0,0,0,${dark?0.4:0.1})` }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:12 }}>
              <div>
                <div style={{ fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:10, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.08em', color:'#B22234', marginBottom:4 }}>Unit {selected.unit} · Topic {selected.topic}</div>
                <div style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:'1.15rem', fontWeight:700, color:textP, fontStyle:'italic', lineHeight:1.3 }}>{selected.name}</div>
                <div style={{ fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:11, color:textM, marginTop:2 }}>{selected.year} · {selected.decision}</div>
              </div>
              <button onClick={() => setSelected(null)} style={{ background:'none', border:'none', cursor:'pointer', color:textM, fontSize:18, lineHeight:1, padding:2 }}>✕</button>
            </div>

            <span style={{ fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:10, fontWeight:600, background:accentBg, color:accentCl, border:`1px solid ${accentBd}`, padding:'3px 9px', borderRadius:9999, display:'inline-block', marginBottom:14 }}>{selected.principle}</span>

            <div style={{ background:factsBg, borderRadius:8, padding:'12px 14px', marginBottom:10 }}>
              <div style={{ fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:9, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.08em', color:textM, marginBottom:5 }}>Facts of the Case</div>
              <p style={{ fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:12.5, color:textS, lineHeight:1.58 }}>{selected.facts}</p>
            </div>

            <div style={{ background:rulingBg, borderLeft:`4px solid ${dark?'#4A6FA5':'#1B2A4A'}`, borderRadius:'0 8px 8px 0', padding:'10px 14px', marginBottom:10 }}>
              <div style={{ fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:9, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.08em', color:'#B22234', marginBottom:5 }}>Ruling</div>
              <p style={{ fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:12.5, color:textS, lineHeight:1.58 }}>{selected.ruling}</p>
            </div>

            <div>
              <div style={{ fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:9, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.08em', color:textM, marginBottom:5 }}>Significance</div>
              <p style={{ fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:12, color:textD, lineHeight:1.55 }}>{selected.significance}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const scotusCardStyles = {
  card: { background: '#fff', borderRadius: 9, border: '1px solid #DDE1E9', padding: '14px 16px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', transition: 'box-shadow 150ms' },
  compact: { padding: '12px 14px' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10, marginBottom: 10 },
  tag: { fontSize: 10, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#B22234', marginBottom: 3, fontFamily: "'Source Sans 3', Arial, sans-serif" },
  caseName: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1rem', fontWeight: 700, color: '#1A2030', fontStyle: 'italic', lineHeight: 1.3 },
  year: { fontFamily: "'Source Sans 3', Arial, sans-serif", fontSize: 11, color: '#9BA5B2', marginTop: 2 },
  principlePill: { fontSize: 10, fontWeight: 600, background: '#EBF2F9', color: '#2D5D8B', border: '1px solid #A3C4DF', padding: '3px 9px', borderRadius: 9999, whiteSpace: 'nowrap', fontFamily: "'Source Sans 3', Arial, sans-serif", flexShrink: 0 },
  factsBox: { background: '#EEF0F4', borderRadius: 7, padding: '10px 12px', marginBottom: 10 },
  rulingBox: { background: '#F5F0E8', borderLeft: '3px solid #1B2A4A', borderRadius: '0 6px 6px 0', padding: '8px 12px', marginBottom: 8 },
  rulingLabel: { fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#B22234', marginBottom: 3, fontFamily: "'Source Sans 3', Arial, sans-serif" },
  rulingText: { fontSize: 13, color: '#2B3748', lineHeight: 1.55, fontFamily: "'Source Sans 3', Arial, sans-serif" },
  sigBox: { padding: '0 2px' },
  sigLabel: { fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#9BA5B2', marginBottom: 3, fontFamily: "'Source Sans 3', Arial, sans-serif" },
  sigText: { fontSize: 12.5, color: '#5A6779', lineHeight: 1.5, fontFamily: "'Source Sans 3', Arial, sans-serif" },
  filterBtn: { fontFamily: "'Source Sans 3', Arial, sans-serif", fontSize: 12, fontWeight: 600, padding: '5px 14px', borderRadius: 9999, border: '1.5px solid #DDE1E9', background: '#fff', color: '#5A6779', cursor: 'pointer' },
  filterActive: { background: '#1B2A4A', color: '#fff', borderColor: '#1B2A4A' },
  practiceBtn: { fontFamily: "'Source Sans 3', Arial, sans-serif", fontSize: 13, fontWeight: 600, width: '100%', padding: '10px', borderRadius: 7, border: 'none', background: '#B22234', color: '#fff', cursor: 'pointer' },
};

Object.assign(window, { ScotusCard, ScotosList, SCOTUS_CASES });
