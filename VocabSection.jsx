// VocabSection.jsx — Key Terms vocabulary flashcards + quiz

const VOCAB_TERMS = [
  // Unit 1 — Foundations
  { term: "Judicial Review", def: "The power of the Supreme Court to declare laws or executive actions unconstitutional. Established in Marbury v. Madison (1803).", unit: 1, topic: "1.6", category: "Constitutional Principles" },
  { term: "Federalism", def: "A system of government in which power is divided between a national (federal) government and state governments.", unit: 1, topic: "1.7", category: "Constitutional Principles" },
  { term: "Checks and Balances", def: "A system in which each branch of government can limit the powers of the other branches to prevent any one branch from becoming too powerful.", unit: 1, topic: "1.6", category: "Constitutional Principles" },
  { term: "Separation of Powers", def: "The division of government authority into three branches — legislative, executive, and judicial — each with distinct responsibilities.", unit: 1, topic: "1.6", category: "Constitutional Principles" },
  { term: "Enumerated Powers", def: "Powers explicitly listed in the Constitution as belonging to the federal government (e.g., the 18 powers in Article I, §8).", unit: 1, topic: "1.7", category: "Constitutional Principles" },
  { term: "Implied Powers", def: "Powers not explicitly stated in the Constitution but suggested by the Necessary and Proper (Elastic) Clause.", unit: 1, topic: "1.7", category: "Constitutional Principles" },
  { term: "Reserved Powers", def: "Powers kept by the states under the 10th Amendment — those not delegated to the federal government nor prohibited to the states.", unit: 1, topic: "1.7", category: "Constitutional Principles" },
  { term: "Concurrent Powers", def: "Powers shared by both the federal and state governments, such as the power to tax, build roads, and create courts.", unit: 1, topic: "1.7", category: "Constitutional Principles" },
  { term: "Supremacy Clause", def: "Article VI of the Constitution declaring that federal law and the Constitution are the 'supreme law of the land,' binding on all state judges.", unit: 1, topic: "1.8", category: "Constitutional Principles" },
  { term: "Elastic Clause", def: "Also called the Necessary and Proper Clause (Article I, §8). Gives Congress the power to make laws 'necessary and proper' to carry out its enumerated powers.", unit: 1, topic: "1.7", category: "Constitutional Principles" },
  { term: "Commerce Clause", def: "Article I, §8 power giving Congress authority to regulate commerce among states, with foreign nations, and with Native American tribes.", unit: 1, topic: "1.8", category: "Constitutional Principles" },
  { term: "Block Grant", def: "Federal money given to states with few restrictions on how to spend it, giving states more flexibility.", unit: 1, topic: "1.9", category: "Federalism" },
  { term: "Categorical Grant", def: "Federal money given to states for a specific purpose, with strings attached and detailed requirements.", unit: 1, topic: "1.9", category: "Federalism" },
  { term: "Unfunded Mandate", def: "A federal requirement imposed on state or local governments without providing funding to cover the costs.", unit: 1, topic: "1.9", category: "Federalism" },
  { term: "Devolution", def: "The transfer of power from the national government to state and local governments.", unit: 1, topic: "1.9", category: "Federalism" },
  { term: "Participatory Democracy", def: "A model of democracy that emphasizes broad citizen participation in government and politics.", unit: 1, topic: "1.2", category: "Democracy Models" },
  { term: "Pluralist Democracy", def: "A model of democracy in which competing interest groups negotiate and compromise to influence policy.", unit: 1, topic: "1.2", category: "Democracy Models" },
  { term: "Elite Democracy", def: "A model of democracy in which wealthy, educated elites hold most political power and make decisions for the broader public.", unit: 1, topic: "1.2", category: "Democracy Models" },

  // Unit 2 — Branches
  { term: "Bicameralism", def: "A legislature divided into two chambers. Congress has the Senate (100 members, 2 per state) and House of Representatives (435 members, apportioned by population).", unit: 2, topic: "2.1", category: "Congress" },
  { term: "Filibuster", def: "A Senate tactic in which a senator speaks at length to delay or block a vote on legislation. Can be ended by cloture (60 votes).", unit: 2, topic: "2.2", category: "Congress" },
  { term: "Cloture", def: "A Senate procedure requiring 60 votes to end debate (a filibuster) and force a vote on legislation.", unit: 2, topic: "2.2", category: "Congress" },
  { term: "Gerrymandering", def: "Drawing district boundaries to give one political party an advantage over another. Named after Governor Elbridge Gerry.", unit: 2, topic: "2.3", category: "Congress" },
  { term: "Incumbent", def: "An elected official who currently holds a position and is running for re-election. Incumbents have a significant electoral advantage.", unit: 2, topic: "2.3", category: "Congress" },
  { term: "Pork Barrel", def: "Legislation that includes spending on local projects secured primarily to benefit a representative's constituents.", unit: 2, topic: "2.2", category: "Congress" },
  { term: "Logrolling", def: "The practice of trading votes among legislators: 'you vote for my bill, I'll vote for yours.'", unit: 2, topic: "2.2", category: "Congress" },
  { term: "Earmark", def: "A provision inserted into legislation to direct funds to a specific project in a legislator's district.", unit: 2, topic: "2.2", category: "Congress" },
  { term: "Executive Order", def: "A directive issued by the president that manages operations of the federal government, having the force of law without congressional approval.", unit: 2, topic: "2.4", category: "Presidency" },
  { term: "Veto", def: "The president's constitutional power to reject legislation passed by Congress. Congress can override a veto with a 2/3 vote in both chambers.", unit: 2, topic: "2.4", category: "Presidency" },
  { term: "Pocket Veto", def: "If the president does not sign a bill within 10 days and Congress is not in session, the bill dies — an indirect veto.", unit: 2, topic: "2.4", category: "Presidency" },
  { term: "Signing Statement", def: "A written pronouncement issued by the president when signing a bill into law, indicating how they intend to interpret or enforce it.", unit: 2, topic: "2.4", category: "Presidency" },
  { term: "Bully Pulpit", def: "The president's ability to use the prestige and visibility of the office to promote an agenda and influence public opinion.", unit: 2, topic: "2.7", category: "Presidency" },
  { term: "Bureaucracy", def: "The large complex of agencies, departments, and offices that implement federal laws and policies. Often called the 'fourth branch.'", unit: 2, topic: "2.12", category: "Bureaucracy" },
  { term: "Iron Triangle", def: "A stable, mutually beneficial relationship among a congressional committee, a federal agency, and an interest group that shapes policy in a specific area.", unit: 2, topic: "2.13", category: "Bureaucracy" },
  { term: "Issue Network", def: "A loose, informal network of people and organizations — including experts, journalists, and advocates — who regularly engage on a specific policy issue.", unit: 2, topic: "2.13", category: "Bureaucracy" },
  { term: "Stare Decisis", def: "Latin for 'to stand by things decided.' The principle that courts follow precedent — prior decisions — when ruling on cases.", unit: 2, topic: "2.8", category: "Judiciary" },
  { term: "Precedent", def: "A court ruling that serves as an example or guide for future cases involving similar facts or legal questions.", unit: 2, topic: "2.8", category: "Judiciary" },
  { term: "Writ of Certiorari", def: "An order by the Supreme Court to a lower court to send up the record of a case for review. The Court grants cert to roughly 1% of petitions.", unit: 2, topic: "2.10", category: "Judiciary" },
  { term: "Amicus Curiae", def: "Latin for 'friend of the court.' A brief filed by a non-party (such as an interest group) that provides additional information or argument to a court.", unit: 2, topic: "2.10", category: "Judiciary" },
  { term: "Judicial Activism", def: "A philosophy in which judges are willing to overturn precedent and expand constitutional interpretation to address new circumstances.", unit: 2, topic: "2.9", category: "Judiciary" },
  { term: "Judicial Restraint", def: "A philosophy in which judges defer to the elected branches and avoid overturning precedent unless clearly necessary.", unit: 2, topic: "2.9", category: "Judiciary" },

  // Unit 3 — Civil Liberties & Rights
  { term: "Civil Liberties", def: "Constitutional freedoms that protect individuals from government action, such as free speech, free press, and due process rights.", unit: 3, topic: "3.1", category: "Civil Liberties" },
  { term: "Civil Rights", def: "Government-protected rights ensuring equal treatment under the law, regardless of race, sex, religion, or national origin.", unit: 3, topic: "3.10", category: "Civil Rights" },
  { term: "Selective Incorporation", def: "The process by which the Supreme Court has applied most Bill of Rights protections to the states through the 14th Amendment's Due Process Clause.", unit: 3, topic: "3.7", category: "Civil Liberties" },
  { term: "Due Process Clause", def: "14th Amendment provision prohibiting states from depriving any person of life, liberty, or property without due process of law.", unit: 3, topic: "3.7", category: "Civil Liberties" },
  { term: "Equal Protection Clause", def: "14th Amendment provision prohibiting states from denying any person equal protection under the laws. Used in civil rights cases.", unit: 3, topic: "3.11", category: "Civil Rights" },
  { term: "Establishment Clause", def: "First Amendment clause prohibiting Congress from making any law 'respecting an establishment of religion.'", unit: 3, topic: "3.2", category: "Civil Liberties" },
  { term: "Free Exercise Clause", def: "First Amendment clause prohibiting Congress from making laws that prohibit the free exercise of religion.", unit: 3, topic: "3.2", category: "Civil Liberties" },
  { term: "Prior Restraint", def: "Government action that prevents speech or publication before it occurs. Presumed unconstitutional under First Amendment.", unit: 3, topic: "3.4", category: "Civil Liberties" },
  { term: "Affirmative Action", def: "Policies that take race, sex, or other factors into account to benefit underrepresented groups in areas like education and employment.", unit: 3, topic: "3.12", category: "Civil Rights" },
  { term: "Poll Tax", def: "A fee charged to voters, historically used to prevent African Americans from voting. Prohibited by the 24th Amendment (1964).", unit: 3, topic: "3.11", category: "Civil Rights" },
  { term: "Literacy Test", def: "Tests historically used to deny African Americans the right to vote. Outlawed by the Voting Rights Act of 1965.", unit: 3, topic: "3.11", category: "Civil Rights" },

  // Unit 4 — Ideologies
  { term: "Political Socialization", def: "The process by which people develop their political beliefs and values, shaped by family, school, media, peers, and major events.", unit: 4, topic: "4.2", category: "Public Opinion" },
  { term: "Public Opinion", def: "The aggregate of individual attitudes or beliefs about issues, policies, or political figures, measured through polls and surveys.", unit: 4, topic: "4.5", category: "Public Opinion" },
  { term: "Political Ideology", def: "A consistent set of beliefs about the proper role of government in society. In the U.S., the main ideologies are liberalism and conservatism.", unit: 4, topic: "4.1", category: "Ideology" },
  { term: "Liberalism", def: "A political ideology favoring government intervention in the economy to reduce inequality and protect individual rights, especially for marginalized groups.", unit: 4, topic: "4.7", category: "Ideology" },
  { term: "Conservatism", def: "A political ideology favoring limited government, free markets, traditional values, and a strong national defense.", unit: 4, topic: "4.7", category: "Ideology" },
  { term: "Libertarianism", def: "A political ideology that favors both economic freedom (like conservatives) and social freedom (like liberals), minimizing government in all areas.", unit: 4, topic: "4.7", category: "Ideology" },
  { term: "Fiscal Policy", def: "Government use of taxing and spending decisions to influence the economy. Managed by Congress and the president.", unit: 4, topic: "4.9", category: "Economic Policy" },
  { term: "Monetary Policy", def: "Control of the money supply and interest rates to manage inflation and unemployment. Managed by the Federal Reserve.", unit: 4, topic: "4.9", category: "Economic Policy" },
  { term: "Keynesian Economics", def: "An economic theory arguing that government spending should increase during recessions to stimulate the economy.", unit: 4, topic: "4.9", category: "Economic Policy" },

  // Unit 5 — Participation
  { term: "Electoral College", def: "The body of electors chosen by each state to formally elect the president and vice president. Each state has electors equal to its total congressional representation.", unit: 5, topic: "5.1", category: "Elections" },
  { term: "Political Party", def: "An organized group of people who share political views and work to win elections and influence public policy.", unit: 5, topic: "5.3", category: "Political Parties" },
  { term: "Primary Election", def: "An election in which voters choose candidates to represent a party in a general election. Can be open (any voter) or closed (party members only).", unit: 5, topic: "5.8", category: "Elections" },
  { term: "Caucus", def: "A meeting of party members to choose candidates or party policies. Iowa caucus is historically the first presidential nominating event.", unit: 5, topic: "5.8", category: "Political Parties" },
  { term: "Interest Group", def: "An organization that seeks to influence public policy in favor of its members' shared concerns without directly running candidates for office.", unit: 5, topic: "5.6", category: "Interest Groups" },
  { term: "PAC (Political Action Committee)", def: "An organization that raises money privately to influence elections or legislation. Subject to contribution limits.", unit: 5, topic: "5.11", category: "Campaign Finance" },
  { term: "Super PAC", def: "An independent expenditure-only committee that can raise and spend unlimited amounts of money, but cannot coordinate directly with campaigns.", unit: 5, topic: "5.11", category: "Campaign Finance" },
  { term: "Lobbying", def: "Attempting to influence government officials, especially legislators, on behalf of an interest group or organization.", unit: 5, topic: "5.6", category: "Interest Groups" },
  { term: "Mandate", def: "The authority a winning candidate claims from voters to carry out a platform or policy after an election victory.", unit: 5, topic: "5.8", category: "Elections" },
  { term: "Voter Turnout", def: "The percentage of eligible voters who actually cast a ballot in an election. The U.S. has historically lower turnout than other democracies.", unit: 5, topic: "5.2", category: "Voting" },
  { term: "Motor Voter Act", def: "The National Voter Registration Act (1993) requiring states to offer voter registration when citizens obtain or renew a driver's license.", unit: 5, topic: "5.2", category: "Voting" },
];

const CATEGORIES = ['All', 'Constitutional Principles', 'Federalism', 'Democracy Models', 'Congress', 'Presidency', 'Bureaucracy', 'Judiciary', 'Civil Liberties', 'Civil Rights', 'Public Opinion', 'Ideology', 'Economic Policy', 'Elections', 'Political Parties', 'Interest Groups', 'Campaign Finance', 'Voting'];

const VocabSection = ({ dark = false, onStudied }) => {
  const [mode, setMode] = React.useState('browse');
  const [category, setCategory] = React.useState('All');
  const [search, setSearch] = React.useState('');
  const [flashIdx, setFlashIdx] = React.useState(0);
  const [flashFlipped, setFlashFlipped] = React.useState(false);
  const [quizIdx, setQuizIdx] = React.useState(0);
  const [quizSelected, setQuizSelected] = React.useState(null);
  const [quizSubmitted, setQuizSubmitted] = React.useState(false);
  const [quizScore, setQuizScore] = React.useState(0);
  const [expanded, setExpanded] = React.useState(null);

  const filtered = VOCAB_TERMS.filter(t =>
    (category === 'All' || t.category === category) &&
    (search === '' || t.term.toLowerCase().includes(search.toLowerCase()) || t.def.toLowerCase().includes(search.toLowerCase()))
  );

  // Quiz: pick 4 random choices, one correct
  const getChoices = () => {
    const correct = filtered[quizIdx % filtered.length];
    const pool = VOCAB_TERMS.filter(t => t.term !== correct.term).sort(() => Math.random() - 0.5).slice(0, 3);
    return [...pool, correct].sort(() => Math.random() - 0.5);
  };
  const [choices, setChoices] = React.useState(getChoices);

  const nextQuiz = () => {
    const next = (quizIdx + 1) % filtered.length;
    setQuizIdx(next);
    setQuizSelected(null);
    setQuizSubmitted(false);
    setChoices(getChoices());
  };

  const unitColor = u => ({ 1:'#1B2A4A', 2:'#2D5D8B', 3:'#B22234', 4:'#C9A84C', 5:'#2A7A4B' }[u] || '#748092');

  const card = dark ? '#111B2B' : '#fff';
  const bord = dark ? '#1E2D42' : '#EEF0F4';
  const textP= dark ? '#E8ECF0' : '#1A2030';
  const textS= dark ? '#C8D4E0' : '#404E60';
  const vs = React.useMemo(() => {
    if (!dark) return vocabStyles;
    return {
      ...vocabStyles,
      modeTabs:        { ...vocabStyles.modeTabs,    borderBottom:`1px solid #1E2D42` },
      modeTab:         { ...vocabStyles.modeTab,     background:'#253447', color:'#BFC6D0' },
      searchInput:     { ...vocabStyles.searchInput, background:'#0D1421', borderColor:'#253447', color:'#E8ECF0' },
      filterBtn:       { ...vocabStyles.filterBtn,   background:'#0D1421', borderColor:'#253447', color:'#9BA5B2' },
      termCard:        { ...vocabStyles.termCard,    background:card, border:`1.5px solid #1E2D42` },
      termCardExpanded:{ ...vocabStyles.termCardExpanded, borderColor:'#253447', boxShadow:'none' },
      termWord:        { ...vocabStyles.termWord,    color:'#E8ECF0' },
      termDef:         { ...vocabStyles.termDef,     color:'#C8D4E0', borderTop:`1px solid #1E2D42` },
      flashCard:       { ...vocabStyles.flashCard,   background:card, border:`2px solid #1E2D42`, boxShadow:'none' },
      flashTerm:       { ...vocabStyles.flashTerm,   color:'#E8ECF0' },
      flashDef:        { ...vocabStyles.flashDef,    color:'#C8D4E0' },
      navBtn:          { ...vocabStyles.navBtn,      background:card, borderColor:'#253447', color:'#BFC6D0' },
      quizChoice:      { ...vocabStyles.quizChoice,  background:card, border:`1.5px solid #1E2D42` },
    };
  }, [dark]);

  return (
    <div>
      <div style={vs.modeTabs}>
        {[['browse','Browse Terms'],['flashcard','Flashcards'],['quiz','Quiz Mode']].map(([m,l]) => (
          <button key={m} style={{...vs.modeTab,...(mode===m?vocabStyles.modeTabActive:{})}} onClick={()=>setMode(m)}>{l}</button>
        ))}
        <span style={{ marginLeft:'auto', fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:11, color:'#9BA5B2', alignSelf:'center' }}>{VOCAB_TERMS.length} terms across 5 units</span>
      </div>

      {/* BROWSE */}
      {mode === 'browse' && (
        <div>
          <div style={{ display:'flex', gap:12, marginBottom:14, flexWrap:'wrap', alignItems:'center' }}>
            <input
              style={vs.searchInput}
              placeholder="Search terms or definitions…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div style={{ display:'flex', gap:7, flexWrap:'wrap', marginBottom:16 }}>
            {CATEGORIES.map(c => (
              <button key={c} style={{...vs.filterBtn,...(category===c?vocabStyles.filterActive:{})}} onClick={()=>setCategory(c)}>{c}</button>
            ))}
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:10 }}>
            {filtered.map(t => (
              <div key={t.term} style={{...vs.termCard, ...(expanded===t.term?vs.termCardExpanded:{})}} onClick={()=>setExpanded(expanded===t.term?null:t.term)}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:8, marginBottom: expanded===t.term?10:0 }}>
                  <div>
                    <div style={{...vocabStyles.termUnit, color: unitColor(t.unit)}}>Unit {t.unit} · {t.category}</div>
                    <div style={vs.termWord}>{t.term}</div>
                  </div>
                  <span style={{ fontSize:10, color:'#BFC6D0', marginTop:4 }}>{expanded===t.term?'▲':'▼'}</span>
                </div>
                {expanded === t.term && <p style={vs.termDef}>{t.def}</p>}
              </div>
            ))}
          </div>
          {filtered.length === 0 && <div style={{ padding:32, textAlign:'center', color:'#9BA5B2', fontFamily:"'Source Sans 3',Arial,sans-serif" }}>No terms match your search.</div>}
        </div>
      )}

      {/* FLASHCARD */}
      {mode === 'flashcard' && (
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:20 }}>
          <div style={{ fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:11, color:'#9BA5B2' }}>
            {category === 'All' ? 'All terms' : category} · {flashIdx+1} / {filtered.length}
          </div>
          <div style={vs.flashCard} onClick={()=>setFlashFlipped(f=>!f)}>
            {!flashFlipped ? (
              <div style={{ textAlign:'center' }}>
                <div style={{...vocabStyles.flashMeta, color: unitColor(filtered[flashIdx%filtered.length]?.unit || 1)}}>Unit {filtered[flashIdx%filtered.length]?.unit} · {filtered[flashIdx%filtered.length]?.category}</div>
                <div style={vs.flashTerm}>{filtered[flashIdx%filtered.length]?.term}</div>
                <div style={{ fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:11, color:'#9BA5B2', marginTop:16 }}>Click to see definition</div>
              </div>
            ) : (
              <div style={{ textAlign:'center' }}>
                <div style={vs.flashTerm}>{filtered[flashIdx%filtered.length]?.term}</div>
                <p style={vs.flashDef}>{filtered[flashIdx%filtered.length]?.def}</p>
              </div>
            )}
          </div>
          <div style={{ display:'flex', gap:12, alignItems:'center' }}>
            <button style={vs.navBtn} onClick={()=>{setFlashIdx(i=>(i-1+filtered.length)%filtered.length);setFlashFlipped(false);}}>← Prev</button>
            <button style={vs.navBtn} onClick={()=>{setFlashIdx(i=>(i+1)%filtered.length);setFlashFlipped(false);}}>Next →</button>
          </div>
        </div>
      )}

      {/* QUIZ */}
      {mode === 'quiz' && filtered.length > 3 && (
        <div style={{ maxWidth:560 }}>
          <div style={{ display:'flex', justifyContent:'space-between', marginBottom:14 }}>
            <span style={{ fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:12, color:'#9BA5B2' }}>Term {quizIdx+1} / {filtered.length}</span>
            <span style={{ fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:13, fontWeight:700, color:'#2A7A4B' }}>Score: {quizScore}</span>
          </div>
          <div style={{ fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:11, fontWeight:700, letterSpacing:'0.07em', textTransform:'uppercase', color:'#9BA5B2', marginBottom:6 }}>Which term matches this definition?</div>
          <div style={{ background: dark ? 'rgba(201,168,76,0.12)' : '#F5F0E8', borderLeft:'3px solid #C9A84C', borderRadius:'0 8px 8px 0', padding:'14px 16px', marginBottom:18, fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:14, color: textS, lineHeight:1.6 }}>
            {filtered[quizIdx%filtered.length]?.def}
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:8, marginBottom:16 }}>
            {choices.map(c => {
              const isCorrect = c.term === filtered[quizIdx%filtered.length]?.term;
              const wasSelected = quizSelected === c.term;
              let style = vs.quizChoice;
              if (quizSubmitted) {
                if (isCorrect) style = {...style, background:'#EAF5EE', borderColor:'#A8D5B9'};
                else if (wasSelected) style = {...style, background:'#FDECEA', borderColor:'#F1A89E'};
                else style = {...style, opacity:0.5};
              } else if (wasSelected) style = {...style, borderColor: dark?'#8BAED4':'#1B2A4A', background: dark?'#1A2E48':'#EBF2F9'};
              return (
                <div key={c.term} style={{...style, cursor:quizSubmitted?'default':'pointer'}} onClick={()=>!quizSubmitted&&setQuizSelected(c.term)}>
                  <span style={{ fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:13.5, fontWeight:600, color: quizSubmitted&&isCorrect?'#2A7A4B':quizSubmitted&&wasSelected&&!isCorrect?'#C0392B':textP }}>{c.term}</span>
                </div>
              );
            })}
          </div>
          {!quizSubmitted
            ? <button style={{...vocabStyles.submitBtn, opacity:quizSelected?1:0.4}} onClick={()=>{if(quizSelected){setQuizSubmitted(true);if(quizSelected===filtered[quizIdx%filtered.length]?.term)setQuizScore(s=>s+1);}}}>Submit</button>
            : <button style={vocabStyles.submitBtn} onClick={nextQuiz}>Next Term →</button>
          }
        </div>
      )}
      {mode === 'quiz' && filtered.length <= 3 && (
        <div style={{ padding:24, textAlign:'center', color:'#9BA5B2', fontFamily:"'Source Sans 3',Arial,sans-serif" }}>Select a broader category to enable quiz mode (need at least 4 terms).</div>
      )}
    </div>
  );
};

const vocabStyles = {
  modeTabs: { display:'flex', gap:4, marginBottom:20, borderBottom:'1px solid #EEF0F4', paddingBottom:12, alignItems:'center' },
  modeTab: { fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:13, fontWeight:600, padding:'7px 16px', borderRadius:6, border:'none', background:'#F8F9FB', color:'#9BA5B2', cursor:'pointer' },
  modeTabActive: { background:'#1B2A4A', color:'#fff' },
  searchInput: { fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:13, padding:'8px 14px', borderRadius:7, border:'1.5px solid #DDE1E9', outline:'none', width:280, color:'#1A2030' },
  filterBtn: { fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:10, fontWeight:600, padding:'3px 10px', borderRadius:9999, border:'1.5px solid #DDE1E9', background:'#fff', color:'#5A6779', cursor:'pointer' },
  filterActive: { background:'#1B2A4A', color:'#fff', borderColor:'#1B2A4A' },
  termCard: { background:'#fff', border:'1.5px solid #EEF0F4', borderRadius:8, padding:'12px 14px', cursor:'pointer', transition:'all 150ms' },
  termCardExpanded: { borderColor:'#BFC6D0', boxShadow:'0 2px 8px rgba(0,0,0,0.06)' },
  termUnit: { fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:10, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.06em', marginBottom:3 },
  termWord: { fontFamily:"'Playfair Display',Georgia,serif", fontSize:'1rem', fontWeight:700, color:'#1A2030' },
  termDef: { fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:13, color:'#404E60', lineHeight:1.55, borderTop:'1px solid #EEF0F4', paddingTop:10, marginTop:0 },
  flashCard: { width:500, minHeight:220, background:'#fff', borderRadius:12, border:'2px solid #DDE1E9', display:'flex', alignItems:'center', justifyContent:'center', padding:36, cursor:'pointer', boxShadow:'0 4px 12px rgba(0,0,0,0.08)' },
  flashMeta: { fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:10, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:10 },
  flashTerm: { fontFamily:"'Playfair Display',Georgia,serif", fontSize:'1.4rem', fontWeight:700, color:'#1A2030', marginBottom:10 },
  flashDef: { fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:14, color:'#404E60', lineHeight:1.6, textAlign:'center' },
  navBtn: { fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:13, fontWeight:600, padding:'7px 18px', borderRadius:6, border:'1.5px solid #DDE1E9', background:'#fff', color:'#1B2A4A', cursor:'pointer' },
  quizChoice: { background:'#fff', border:'1.5px solid #DDE1E9', borderRadius:7, padding:'12px 14px', transition:'all 150ms' },
  submitBtn: { fontFamily:"'Source Sans 3',Arial,sans-serif", fontSize:13.5, fontWeight:600, padding:'9px 24px', borderRadius:6, border:'none', background:'#1B2A4A', color:'#fff', cursor:'pointer' },
};

Object.assign(window, { VocabSection, VOCAB_TERMS });
