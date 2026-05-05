// ArticlesQuiz.jsx — Constitutional Articles section

const ARTICLES = [
  {
    num: "I",
    title: "The Legislative Branch",
    summary: "Establishes Congress — bicameral legislature consisting of the Senate and House of Representatives — and grants it enumerated legislative powers.",
    sections: [
      { sec: "§1", desc: "Vests all legislative power in Congress (Senate + House)" },
      { sec: "§2", desc: "House of Representatives: 2-year terms, apportionment by population, power of impeachment" },
      { sec: "§3", desc: "Senate: 6-year terms, 2 per state, tries impeachments, VP presides" },
      { sec: "§4", desc: "Elections of Congress regulated by states; Congress meets at least once per year" },
      { sec: "§5", desc: "Each chamber judges its own elections; quorum rules; keeps a journal" },
      { sec: "§6", desc: "Congressional pay; Speech or Debate Clause; no dual office holding" },
      { sec: "§7", desc: "Revenue bills originate in House; presidential veto and override process" },
      { sec: "§8", desc: "Enumerated powers: tax, borrow, regulate commerce, coin money, declare war, raise armies, Necessary and Proper Clause" },
      { sec: "§9", desc: "Limits on Congress: no bills of attainder, ex post facto laws, suspension of habeas corpus" },
      { sec: "§10", desc: "Limits on states: no treaties, coining money, or impairing contracts" },
    ],
    keyTerms: ["Bicameralism", "Enumerated powers", "Necessary and Proper Clause", "Commerce Clause", "Elastic Clause", "Impeachment", "Habeas corpus"],
    unit: "Unit 2 · Topic 2.1–2.3",
    color: "#1B2A4A",
  },
  {
    num: "II",
    title: "The Executive Branch",
    summary: "Establishes the presidency: qualifications, election via Electoral College, powers as Commander in Chief, treaty-making, appointments, and the veto.",
    sections: [
      { sec: "§1", desc: "President: 4-year term; Electoral College; natural-born citizen requirement; salary" },
      { sec: "§2", desc: "Commander in Chief; pardons; treaties (2/3 Senate); appointments (ambassadors, judges, officers)" },
      { sec: "§3", desc: "State of the Union; convene/adjourn Congress; receive ambassadors; faithfully execute the laws" },
      { sec: "§4", desc: "Removal from office by impeachment for treason, bribery, or high crimes and misdemeanors" },
    ],
    keyTerms: ["Electoral College", "Commander in Chief", "Treaty power", "Appointments Clause", "Advice and consent", "Executive order", "Veto power"],
    unit: "Unit 2 · Topics 2.4–2.7",
    color: "#B22234",
  },
  {
    num: "III",
    title: "The Judicial Branch",
    summary: "Establishes the Supreme Court and authorizes Congress to create inferior courts; defines judicial power and the jurisdiction of federal courts.",
    sections: [
      { sec: "§1", desc: "Supreme Court and inferior courts; life tenure for judges ('good behavior'); judicial compensation" },
      { sec: "§2", desc: "Federal jurisdiction: cases arising under Constitution/laws/treaties; original vs. appellate jurisdiction; jury trial in criminal cases" },
      { sec: "§3", desc: "Definition of treason; conviction requires two witnesses or open court confession" },
    ],
    keyTerms: ["Judicial review (implied)", "Original jurisdiction", "Appellate jurisdiction", "Life tenure", "Federal jurisdiction", "Treason"],
    unit: "Unit 2 · Topics 2.8–2.11",
    color: "#2D5D8B",
  },
  {
    num: "IV",
    title: "States' Relations",
    summary: "Governs relationships among states: full faith and credit, privileges and immunities, extradition, and admission of new states.",
    sections: [
      { sec: "§1", desc: "Full Faith and Credit Clause: states must honor other states' laws and court decisions" },
      { sec: "§2", desc: "Privileges and Immunities Clause; extradition of fugitives across state lines" },
      { sec: "§3", desc: "Admission of new states; Congress controls federal territories" },
      { sec: "§4", desc: "Guarantee Clause: federal government guarantees a republican form of government to each state; protection from invasion" },
    ],
    keyTerms: ["Full Faith and Credit Clause", "Privileges and Immunities", "Extradition", "Guarantee Clause", "Interstate relations"],
    unit: "Unit 1 · Topic 1.7",
    color: "#C9A84C",
  },
  {
    num: "V",
    title: "The Amendment Process",
    summary: "Establishes two paths for proposing and two paths for ratifying amendments to the Constitution — ensuring flexibility while requiring broad consensus.",
    sections: [
      { sec: "Proposal", desc: "2/3 vote in both houses of Congress OR 2/3 of state legislatures call a constitutional convention" },
      { sec: "Ratification", desc: "3/4 of state legislatures (38 states) OR 3/4 of state ratifying conventions" },
    ],
    keyTerms: ["Formal amendment", "Supermajority", "Ratification", "Constitutional convention"],
    unit: "Unit 1 · Topic 1.5",
    color: "#2A7A4B",
  },
  {
    num: "VI",
    title: "Supremacy Clause",
    summary: "Declares the Constitution, federal laws, and treaties the 'supreme law of the land,' binding state judges; all officials swear an oath to support the Constitution.",
    sections: [
      { sec: "Supremacy", desc: "Constitution, federal laws, and treaties are the supreme law of the land — binding on all state courts" },
      { sec: "Oath", desc: "All federal and state officials must swear to support the Constitution; no religious test for office" },
    ],
    keyTerms: ["Supremacy Clause", "Preemption", "Federal supremacy", "Oath of office"],
    unit: "Unit 1 · Topics 1.7–1.8",
    color: "#5A6779",
  },
  {
    num: "VII",
    title: "Ratification",
    summary: "States that ratification by nine of thirteen states was sufficient to establish the Constitution for the ratifying states.",
    sections: [
      { sec: "Ratification", desc: "Nine of thirteen states required for ratification; ratification conventions held in each state" },
    ],
    keyTerms: ["Ratification", "Constitutional convention", "Federalists", "Anti-Federalists"],
    unit: "Unit 1 · Topic 1.5",
    color: "#748092",
  },
];

const ARTICLE_QUIZ_QUESTIONS = [
  { q: "Which article establishes the legislative branch and grants Congress its enumerated powers?", a: "I" },
  { q: "Which article establishes the Electoral College and the president's role as Commander in Chief?", a: "II" },
  { q: "Which article establishes the Supreme Court and defines federal judicial power?", a: "III" },
  { q: "Which article contains the Supremacy Clause, declaring federal law the 'supreme law of the land'?", a: "VI" },
  { q: "Which article outlines the process for amending the Constitution?", a: "V" },
  { q: "Which article contains the Full Faith and Credit Clause?", a: "IV" },
  { q: "Which article granted Congress the Necessary and Proper (Elastic) Clause?", a: "I" },
  { q: "Which article requires state ratifying conventions and sets the threshold at nine of thirteen states?", a: "VII" },
  { q: "Which article guarantees each state a republican form of government?", a: "IV" },
  { q: "Which article defines treason against the United States?", a: "III" },
];

const ArticlesSection = ({ dark = false }) => {
  const [mode, setMode] = React.useState('browse');
  const [selected, setSelected] = React.useState(ARTICLES[0]);
  const [flashIdx, setFlashIdx] = React.useState(0);
  const [flashFlipped, setFlashFlipped] = React.useState(false);
  const [quizIdx, setQuizIdx] = React.useState(0);
  const [quizSelected, setQuizSelected] = React.useState(null);
  const [quizSubmitted, setQuizSubmitted] = React.useState(false);
  const [quizScore, setQuizScore] = React.useState(0);

  const romanToInt = { I:1, II:2, III:3, IV:4, V:5, VI:6, VII:7 };
  const card = dark ? '#111B2B' : '#fff';
  const bord = dark ? '#1E2D42' : '#EEF0F4';
  const textP= dark ? '#E8ECF0' : '#1A2030';
  const textS= dark ? '#C8D4E0' : '#404E60';
  const as = React.useMemo(() => {
    if (!dark) return artStyles;
    return {
      ...artStyles,
      modeTabs:   { ...artStyles.modeTabs,   borderBottom:`1px solid #1E2D42` },
      modeTab:    { ...artStyles.modeTab,    background:'#253447', color:'#BFC6D0' },
      articleBtn: { ...artStyles.articleBtn, background:'#111B2B', border:`1.5px solid #1E2D42`, borderLeft:`3px solid transparent` },
      articleBtnActive:{ ...artStyles.articleBtnActive, background:'#1A2B40', borderColor:'#253447' },
      articleBtnTitle:{ ...artStyles.articleBtnTitle, color:'#BFC6D0' },
      articleHeaderTitle:{ ...artStyles.articleHeaderTitle, color:'#E8ECF0' },
      articleSummary:{ ...artStyles.articleSummary, color:'#C8D4E0' },
      sectionLabel:{ ...artStyles.sectionLabel },
      secTag:     { ...artStyles.secTag, background:'#253447', color:'#9BA5B2' },
      secDesc:    { ...artStyles.secDesc, color:'#C8D4E0' },
      flashCard:  { ...artStyles.flashCard,  background:'#111B2B', border:`2px solid #1E2D42`, boxShadow:'none' },
      navBtn:     { ...artStyles.navBtn,     background:'#111B2B', borderColor:'#253447', color:'#BFC6D0' },
      quizChoice: { ...artStyles.quizChoice, background:'#111B2B', border:`1.5px solid #1E2D42` },
    };
  }, [dark]);

  const quizChoices = () => {
    const correct = ARTICLE_QUIZ_QUESTIONS[quizIdx].a;
    const others = ARTICLES.map(a=>a.num).filter(n=>n!==correct).sort(()=>Math.random()-0.5).slice(0,3);
    return [...others, correct].sort((a,b) => romanToInt[a]-romanToInt[b]);
  };

  const handleSubmit = () => {
    if (!quizSelected) return;
    setQuizSubmitted(true);
    if (quizSelected === ARTICLE_QUIZ_QUESTIONS[quizIdx].a) setQuizScore(s=>s+1);
  };

  const nextQuiz = () => {
    setQuizIdx(i => (i+1) % ARTICLE_QUIZ_QUESTIONS.length);
    setQuizSelected(null);
    setQuizSubmitted(false);
  };

  return (
    <div>
      <div style={as.modeTabs}>
        {[['browse','Browse Articles'],['flashcard','Flashcards'],['quiz','Quiz Mode']].map(([m,l]) => (
          <button key={m} style={{...as.modeTab,...(mode===m?artStyles.modeTabActive:{})}} onClick={()=>setMode(m)}>{l}</button>
        ))}
      </div>

      {/* BROWSE */}
      {mode === 'browse' && (
        <div style={{ display: 'flex', gap: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 220, flexShrink: 0 }}>
            {ARTICLES.map(a => (
              <div key={a.num} style={{...as.articleBtn, ...(selected.num===a.num ? {...as.articleBtnActive, borderLeftColor: a.color} : {})}} onClick={()=>setSelected(a)}>
                <span style={{...artStyles.romanNum, color: selected.num===a.num ? a.color : '#9BA5B2'}}>Art. {a.num}</span>
                <span style={as.articleBtnTitle}>{a.title}</span>
              </div>
            ))}
          </div>

          <div style={{ flex: 1, background: card, borderRadius: 10, padding: '22px 24px', border: `1px solid ${bord}`, boxShadow: dark ? 'none' : '0 1px 3px rgba(0,0,0,0.06)' }}>
            <div style={{...artStyles.articleHeader, borderLeftColor: selected.color}}>
              <div style={artStyles.articleHeaderLabel}>Article {selected.num}</div>
              <div style={as.articleHeaderTitle}>{selected.title}</div>
              <div style={artStyles.articleUnit}>{selected.unit}</div>
            </div>
            <p style={as.articleSummary}>{selected.summary}</p>

            <div style={as.sectionLabel}>Key Sections</div>
            {selected.sections.map(sec => (
              <div key={sec.sec} style={artStyles.sectionRow}>
                <span style={as.secTag}>{sec.sec}</span>
                <span style={as.secDesc}>{sec.desc}</span>
              </div>
            ))}

            <div style={as.sectionLabel}>Key Terms</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 6 }}>
              {selected.keyTerms.map(t => (
                <span key={t} style={{...artStyles.termTag, borderColor: selected.color+'44', color: selected.color}}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FLASHCARD */}
      {mode === 'flashcard' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
          <div style={as.flashCard} onClick={()=>setFlashFlipped(f=>!f)}>
            {!flashFlipped ? (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:10, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', color:'#B22234', marginBottom:12 }}>Constitutional Article</div>
                <div style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:'3rem', fontWeight:700, color: dark ? '#E8ECF0' : '#1B2A4A', marginBottom:8 }}>Article {ARTICLES[flashIdx].num}</div>
                <div style={{ fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:11, color:'#9BA5B2' }}>Click to reveal</div>
              </div>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:'1.3rem', fontWeight:700, color: textP, marginBottom:10 }}>{ARTICLES[flashIdx].title}</div>
                <p style={{ fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:13.5, color: textS, lineHeight:1.55 }}>{ARTICLES[flashIdx].summary}</p>
              </div>
            )}
          </div>
          <div style={{ display:'flex', gap:12, alignItems:'center' }}>
            <button style={as.navBtn} onClick={()=>{setFlashIdx(i=>(i-1+ARTICLES.length)%ARTICLES.length);setFlashFlipped(false);}}>← Prev</button>
            <span style={{ fontSize:12, color:'#9BA5B2' }}>{flashIdx+1} / {ARTICLES.length}</span>
            <button style={as.navBtn} onClick={()=>{setFlashIdx(i=>(i+1)%ARTICLES.length);setFlashFlipped(false);}}>Next →</button>
          </div>
        </div>
      )}

      {/* QUIZ */}
      {mode === 'quiz' && (
        <div style={{ maxWidth: 540 }}>
          <div style={{ display:'flex', justifyContent:'space-between', marginBottom:14 }}>
            <span style={{ fontSize:12, color:'#9BA5B2', fontFamily:"'Source Sans 3',Arial,sans-serif" }}>Question {quizIdx+1} / {ARTICLE_QUIZ_QUESTIONS.length}</span>
            <span style={{ fontSize:13, fontWeight:700, color:'#2A7A4B', fontFamily:"'Source Sans 3',Arial,sans-serif" }}>Score: {quizScore}</span>
          </div>
          <p style={{ fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:15, fontWeight:500, color: textP, lineHeight:1.6, marginBottom:18 }}>{ARTICLE_QUIZ_QUESTIONS[quizIdx].q}</p>
          <div style={{ display:'flex', flexDirection:'column', gap:8, marginBottom:16 }}>
            {quizChoices().map(choice => {
              const art = ARTICLES.find(a=>a.num===choice);
              const isCorrect = choice === ARTICLE_QUIZ_QUESTIONS[quizIdx].a;
              const wasSelected = quizSelected === choice;
              let qStyle = as.quizChoice;
              if (quizSubmitted) {
                if (isCorrect) qStyle = {...qStyle, background:'#EAF5EE', borderColor:'#A8D5B9'};
                else if (wasSelected) qStyle = {...qStyle, background:'#FDECEA', borderColor:'#F1A89E', opacity:1};
                else qStyle = {...qStyle, opacity:0.5};
              } else if (wasSelected) qStyle = {...qStyle, borderColor: dark?'#8BAED4':'#1B2A4A', background: dark?'#1A2E48':'#EBF2F9'};
              return (
                <div key={choice} style={{...qStyle, cursor: quizSubmitted?'default':'pointer'}} onClick={()=>!quizSubmitted&&setQuizSelected(choice)}>
                  <strong style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:'1.05rem', color: quizSubmitted&&isCorrect?'#2A7A4B': quizSubmitted&&wasSelected&&!isCorrect?'#C0392B':(dark?'#BFC6D0':'#1B2A4A'), marginRight:10 }}>Article {art.num}</strong>
                  <span style={{ fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:12, color: dark?'#748092':'#5A6779' }}>— {art.title}</span>
                </div>
              );
            })}
          </div>
          {!quizSubmitted
            ? <button style={{...artStyles.submitBtn, opacity: quizSelected?1:0.4}} onClick={handleSubmit}>Submit</button>
            : <button style={artStyles.submitBtn} onClick={nextQuiz}>Next Question →</button>
          }
        </div>
      )}
    </div>
  );
};

const artStyles = {
  modeTabs: { display:'flex', gap:4, marginBottom:20, borderBottom:'1px solid #EEF0F4', paddingBottom:12 },
  modeTab: { fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:13, fontWeight:600, padding:'7px 16px', borderRadius:6, border:'none', background:'#F8F9FB', color:'#9BA5B2', cursor:'pointer' },
  modeTabActive: { background:'#1B2A4A', color:'#fff' },
  articleBtn: { background:'#fff', border:'1.5px solid #EEF0F4', borderLeft:'3px solid transparent', borderRadius:'0 7px 7px 0', padding:'10px 12px', cursor:'pointer', transition:'all 150ms' },
  articleBtnActive: { background:'#F5F0E8', borderColor:'#DDE1E9' },
  romanNum: { fontFamily:"'Playfair Display',Georgia,serif", fontSize:11, fontWeight:700, display:'block', marginBottom:2 },
  articleBtnTitle: { fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:11.5, fontWeight:600, color:'#1A2030', lineHeight:1.3 },
  articleHeader: { borderLeft:'4px solid', paddingLeft:14, marginBottom:14 },
  articleHeaderLabel: { fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:10, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.08em', color:'#9BA5B2', marginBottom:3 },
  articleHeaderTitle: { fontFamily:"'Playfair Display',Georgia,serif", fontSize:'1.3rem', fontWeight:700, color:'#1A2030', marginBottom:3 },
  articleUnit: { fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:11, color:'#9BA5B2' },
  articleSummary: { fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:13.5, color:'#404E60', lineHeight:1.6, marginBottom:18 },
  sectionLabel: { fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:10, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.08em', color:'#BFC6D0', marginBottom:8, marginTop:16 },
  sectionRow: { display:'flex', gap:10, alignItems:'flex-start', marginBottom:7 },
  secTag: { fontFamily:"'JetBrains Mono','Courier New',monospace", fontSize:10, fontWeight:500, background:'#EEF0F4', color:'#5A6779', padding:'2px 7px', borderRadius:4, flexShrink:0, marginTop:1 },
  secDesc: { fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:13, color:'#2B3748', lineHeight:1.45 },
  termTag: { fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:11, fontWeight:500, background:'transparent', border:'1px solid', padding:'3px 9px', borderRadius:9999 },
  flashCard: { width:480, minHeight:220, background:'#fff', borderRadius:12, border:'2px solid #DDE1E9', display:'flex', alignItems:'center', justifyContent:'center', padding:32, cursor:'pointer', boxShadow:'0 4px 12px rgba(0,0,0,0.08)' },
  navBtn: { fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:13, fontWeight:600, padding:'7px 18px', borderRadius:6, border:'1.5px solid #DDE1E9', background:'#fff', color:'#1B2A4A', cursor:'pointer' },
  quizChoice: { background:'#fff', border:'1.5px solid #DDE1E9', borderRadius:7, padding:'12px 14px', fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:13, color:'#1A2030', transition:'all 150ms' },
  submitBtn: { fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:13.5, fontWeight:600, padding:'9px 24px', borderRadius:6, border:'none', background:'#1B2A4A', color:'#fff', cursor:'pointer' },
};

Object.assign(window, { ArticlesSection, ARTICLES });
