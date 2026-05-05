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

// Quiz questions — clues only, no titles that give away the answer
const ARTICLE_QUIZ_QUESTIONS = [
  { q: "Which article establishes the bicameral legislature and grants Congress its enumerated powers, including the Necessary and Proper Clause?", a: "I" },
  { q: "Which article establishes the Electoral College and defines the president's role as Commander in Chief with treaty and appointment powers?", a: "II" },
  { q: "Which article establishes the Supreme Court, grants life tenure to judges, and defines the scope of federal judicial power?", a: "III" },
  { q: "Which article contains the Supremacy Clause, declaring the Constitution and federal laws the supreme law of the land?", a: "VI" },
  { q: "Which article outlines the two methods for proposing and two methods for ratifying amendments to the Constitution?", a: "V" },
  { q: "Which article contains the Full Faith and Credit Clause, governing how states must recognize each other's laws and court decisions?", a: "IV" },
  { q: "Which article grants Congress the power to 'make all laws necessary and proper' to execute its enumerated powers?", a: "I" },
  { q: "Which article sets nine of thirteen states as the threshold for the Constitution to take effect among ratifying states?", a: "VII" },
  { q: "Which article's Guarantee Clause requires the federal government to protect each state against invasion and ensure a republican form of government?", a: "IV" },
  { q: "Which article defines treason as levying war against the United States and requires two witnesses or an open-court confession for conviction?", a: "III" },
];

// Stable shuffle seeded by question index — prevents reshuffling on every render
const getChoicesForQ = (qIdx) => {
  const correct = ARTICLE_QUIZ_QUESTIONS[qIdx].a;
  const romanToInt = { I:1, II:2, III:3, IV:4, V:5, VI:6, VII:7 };
  // Use seeded selection based on qIdx so choices are stable
  const seed = qIdx * 7919;
  const rng = (n) => ((seed * 1664525 + n * 1013904223) >>> 0) / 0xFFFFFFFF;
  const others = ARTICLES.map(a => a.num).filter(n => n !== correct);
  // Sort by seeded random then take first 3
  const shuffled = others.sort((a, b) => rng(romanToInt[a]) - rng(romanToInt[b])).slice(0, 3);
  return [...shuffled, correct].sort((a, b) => romanToInt[a] - romanToInt[b]);
};

const ArticlesSection = ({ dark = false }) => {
  const [mode, setMode] = React.useState('browse');
  const [selectedNum, setSelectedNum] = React.useState('I');
  const [flashIdx, setFlashIdx] = React.useState(0);
  const [flashFlipped, setFlashFlipped] = React.useState(false);
  const [quizIdx, setQuizIdx] = React.useState(0);
  const [quizSelected, setQuizSelected] = React.useState(null);
  const [quizSubmitted, setQuizSubmitted] = React.useState(false);
  const [quizScore, setQuizScore] = React.useState(0);

  const selected = ARTICLES.find(a => a.num === selectedNum) || ARTICLES[0];

  // Memoize choices so they don't reshuffle on state changes
  const choices = React.useMemo(() => getChoicesForQ(quizIdx), [quizIdx]);

  const d = dark;
  const card = d ? '#111B2B' : '#fff';
  const bord = d ? '#1E2D42' : '#EEF0F4';
  const textP = d ? '#E8ECF0' : '#1A2030';
  const textS = d ? '#C8D4E0' : '#404E60';
  const textM = d ? '#748092' : '#9BA5B2';

  const handleSubmit = () => {
    if (!quizSelected) return;
    setQuizSubmitted(true);
    if (quizSelected === ARTICLE_QUIZ_QUESTIONS[quizIdx].a) setQuizScore(s => s + 1);
  };

  const nextQuiz = () => {
    setQuizIdx(i => (i + 1) % ARTICLE_QUIZ_QUESTIONS.length);
    setQuizSelected(null);
    setQuizSubmitted(false);
  };

  // Choice style — no outline/focus ring, muted dark mode colors
  const getChoiceStyle = (choice) => {
    const isCorrect = choice === ARTICLE_QUIZ_QUESTIONS[quizIdx].a;
    const wasSelected = quizSelected === choice;
    const base = {
      background: d ? '#111B2B' : '#fff',
      border: `1.5px solid ${d ? '#1E2D42' : '#DDE1E9'}`,
      borderRadius: 7,
      padding: '12px 16px',
      cursor: quizSubmitted ? 'default' : 'pointer',
      transition: 'all 150ms',
      outline: 'none',
      userSelect: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
    };
    if (!quizSubmitted) {
      if (wasSelected) return { ...base, borderColor: d ? '#4A6FA5' : '#1B2A4A', background: d ? '#162236' : '#EBF2F9' };
      return base;
    }
    if (isCorrect) return { ...base, borderColor: d ? '#2A5C42' : '#2A7A4B', background: d ? '#071A12' : '#EAF5EE' };
    if (wasSelected && !isCorrect) return { ...base, borderColor: d ? '#5C2525' : '#C0392B', background: d ? '#1A0808' : '#FDECEA' };
    return { ...base, opacity: 0.4 };
  };

  const getNumColor = (choice) => {
    const isCorrect = choice === ARTICLE_QUIZ_QUESTIONS[quizIdx].a;
    const wasSelected = quizSelected === choice;
    if (!quizSubmitted) return wasSelected ? (d ? '#8BAED4' : '#1B2A4A') : textM;
    if (isCorrect) return d ? '#5A9A7A' : '#1A3D2B';
    if (wasSelected && !isCorrect) return d ? '#9A5A5A' : '#3D1A1A';
    return textM;
  };

  return (
    <div>
      {/* Mode tabs */}
      <div style={{ display: 'flex', gap: 4, marginBottom: 20, borderBottom: `1px solid ${bord}`, paddingBottom: 12 }}>
        {[['browse','Browse Articles'],['flashcard','Flashcards'],['quiz','Quiz Mode']].map(([m, l]) => (
          <button key={m} onClick={() => setMode(m)} style={{
            fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 13, fontWeight: 600,
            padding: '7px 16px', borderRadius: 6, border: 'none', cursor: 'pointer',
            outline: 'none',
            background: mode === m ? '#1B2A4A' : (d ? '#253447' : '#F8F9FB'),
            color: mode === m ? '#fff' : textM,
            transition: 'all 150ms',
          }}>{l}</button>
        ))}
      </div>

      {/* BROWSE */}
      {mode === 'browse' && (
        <div style={{ display: 'flex', gap: 20 }}>
          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: 200, flexShrink: 0 }}>
            {ARTICLES.map(a => {
              const isActive = selected.num === a.num;
              return (
                <div key={a.num} onClick={() => setSelectedNum(a.num)} style={{
                  background: isActive ? (d ? '#1A2B40' : '#F5F0E8') : (d ? '#111B2B' : '#fff'),
                  border: `1.5px solid ${isActive ? (d ? '#253447' : '#DDE1E9') : (d ? '#1E2D42' : '#EEF0F4')}`,
                  borderLeft: `3px solid ${isActive ? a.color : 'transparent'}`,
                  borderRadius: '0 7px 7px 0',
                  padding: '10px 12px',
                  cursor: 'pointer',
                  outline: 'none',
                  transition: 'all 150ms',
                  userSelect: 'none',
                }}>
                  <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 11, fontWeight: 700, display: 'block', marginBottom: 2, color: isActive ? a.color : textM }}>Art. {a.num}</span>
                  <span style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 11.5, fontWeight: 600, color: d ? '#BFC6D0' : '#1A2030', lineHeight: 1.3 }}>{a.title}</span>
                </div>
              );
            })}
          </div>

          {/* Detail */}
          <div style={{ flex: 1, background: card, borderRadius: 10, padding: '22px 24px', border: `1px solid ${bord}`, boxShadow: d ? 'none' : '0 1px 3px rgba(0,0,0,0.06)' }}>
            <div style={{ borderLeft: `4px solid ${selected.color}`, paddingLeft: 14, marginBottom: 14 }}>
              <div style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: textM, marginBottom: 3 }}>Article {selected.num}</div>
              <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: '1.3rem', fontWeight: 700, color: textP, marginBottom: 3 }}>{selected.title}</div>
              <div style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 11, color: textM }}>{selected.unit}</div>
            </div>
            <p style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 13.5, color: textS, lineHeight: 1.6, marginBottom: 18 }}>{selected.summary}</p>

            <div style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#BFC6D0', marginBottom: 8, marginTop: 16 }}>Key Sections</div>
            {selected.sections.map(sec => (
              <div key={sec.sec} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 7 }}>
                <span style={{ fontFamily: "'JetBrains Mono','Courier New',monospace", fontSize: 10, fontWeight: 500, background: d ? '#253447' : '#EEF0F4', color: d ? '#9BA5B2' : '#5A6779', padding: '2px 7px', borderRadius: 4, flexShrink: 0, marginTop: 1 }}>{sec.sec}</span>
                <span style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 13, color: d ? '#C8D4E0' : '#2B3748', lineHeight: 1.45 }}>{sec.desc}</span>
              </div>
            ))}

            <div style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#BFC6D0', marginBottom: 8, marginTop: 16 }}>Key Terms</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 6 }}>
              {selected.keyTerms.map(t => (
                <span key={t} style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 11, fontWeight: 500, background: 'transparent', border: `1px solid ${selected.color}44`, color: selected.color, padding: '3px 9px', borderRadius: 9999 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FLASHCARD */}
      {mode === 'flashcard' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
          <div onClick={() => setFlashFlipped(f => !f)} style={{
            width: 480, minHeight: 220, background: card, borderRadius: 12,
            border: `2px solid ${bord}`, display: 'flex', alignItems: 'center',
            justifyContent: 'center', padding: 32, cursor: 'pointer',
            boxShadow: d ? 'none' : '0 4px 12px rgba(0,0,0,0.08)',
            outline: 'none', userSelect: 'none',
          }}>
            {!flashFlipped ? (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#B22234', marginBottom: 12 }}>Constitutional Article</div>
                <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: '3rem', fontWeight: 700, color: d ? '#E8ECF0' : '#1B2A4A', marginBottom: 8 }}>Article {ARTICLES[flashIdx].num}</div>
                <div style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 11, color: textM }}>Click to reveal</div>
              </div>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: '1.3rem', fontWeight: 700, color: textP, marginBottom: 10 }}>{ARTICLES[flashIdx].title}</div>
                <p style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 13.5, color: textS, lineHeight: 1.55 }}>{ARTICLES[flashIdx].summary}</p>
              </div>
            )}
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <button style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 13, fontWeight: 600, padding: '7px 18px', borderRadius: 6, border: `1.5px solid ${bord}`, background: card, color: textP, cursor: 'pointer', outline: 'none' }}
              onClick={() => { setFlashIdx(i => (i - 1 + ARTICLES.length) % ARTICLES.length); setFlashFlipped(false); }}>← Prev</button>
            <span style={{ fontSize: 12, color: textM }}>{flashIdx + 1} / {ARTICLES.length}</span>
            <button style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 13, fontWeight: 600, padding: '7px 18px', borderRadius: 6, border: `1.5px solid ${bord}`, background: card, color: textP, cursor: 'pointer', outline: 'none' }}
              onClick={() => { setFlashIdx(i => (i + 1) % ARTICLES.length); setFlashFlipped(false); }}>Next →</button>
          </div>
        </div>
      )}

      {/* QUIZ */}
      {mode === 'quiz' && (
        <div style={{ maxWidth: 560 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
            <span style={{ fontSize: 12, color: textM, fontFamily: "'Source Sans 3',Arial,sans-serif" }}>Question {quizIdx + 1} / {ARTICLE_QUIZ_QUESTIONS.length}</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: d ? '#5A9A7A' : '#2A7A4B', fontFamily: "'Source Sans 3',Arial,sans-serif" }}>Score: {quizScore} / {quizIdx + (quizSubmitted ? 1 : 0)}</span>
          </div>

          <p style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 15, fontWeight: 500, color: textP, lineHeight: 1.65, marginBottom: 18 }}>{ARTICLE_QUIZ_QUESTIONS[quizIdx].q}</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
            {choices.map(choice => {
              const isCorrect = choice === ARTICLE_QUIZ_QUESTIONS[quizIdx].a;
              const wasSelected = quizSelected === choice;
              return (
                <div key={choice} style={getChoiceStyle(choice)} onClick={() => !quizSubmitted && setQuizSelected(choice)}>
                  {/* Roman numeral badge */}
                  <div style={{
                    minWidth: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'Playfair Display',Georgia,serif", fontSize: 14, fontWeight: 700,
                    color: quizSubmitted && isCorrect ? '#fff' : quizSubmitted && wasSelected && !isCorrect ? '#fff' : (!quizSubmitted && wasSelected ? (d ? '#8BAED4' : '#1B2A4A') : textM),
                    background: quizSubmitted && isCorrect ? (d ? '#2A5C42' : '#2A7A4B') : quizSubmitted && wasSelected && !isCorrect ? (d ? '#5C2525' : '#C0392B') : (!quizSubmitted && wasSelected ? (d ? '#162236' : '#EBF2F9') : (d ? '#1E2D42' : '#EEF0F4')),
                    border: `1.5px solid ${quizSubmitted && isCorrect ? (d ? '#2A5C42' : '#2A7A4B') : quizSubmitted && wasSelected && !isCorrect ? (d ? '#5C2525' : '#C0392B') : (d ? '#253447' : '#DDE1E9')}`,
                    transition: 'all 200ms',
                  }}>
                    {choice}
                  </div>
                  {/* Label — only shows "Article X" with NO title to prevent giving away answer */}
                  <span style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 14, fontWeight: 600, color: getNumColor(choice) }}>
                    Article {choice}
                  </span>
                  {/* After submission, reveal the title */}
                  {quizSubmitted && (
                    <span style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 12, color: textM, marginLeft: 2 }}>
                      — {ARTICLES.find(a => a.num === choice)?.title}
                    </span>
                  )}
                  {/* Check/X icons */}
                  {quizSubmitted && isCorrect && (
                    <svg style={{ marginLeft: 'auto', flexShrink: 0 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={d ? '#5A9A7A' : '#2A7A4B'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  )}
                  {quizSubmitted && wasSelected && !isCorrect && (
                    <svg style={{ marginLeft: 'auto', flexShrink: 0 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={d ? '#9A5A5A' : '#C0392B'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  )}
                </div>
              );
            })}
          </div>

          {/* Result banner */}
          {quizSubmitted && (
            <div style={{
              padding: '10px 14px', borderRadius: 8, marginBottom: 14,
              background: quizSelected === ARTICLE_QUIZ_QUESTIONS[quizIdx].a ? (d ? '#071A12' : '#EAF5EE') : (d ? '#1A0808' : '#FDECEA'),
              color: quizSelected === ARTICLE_QUIZ_QUESTIONS[quizIdx].a ? (d ? '#5A9A7A' : '#1A3D2B') : (d ? '#9A5A5A' : '#3D1A1A'),
              border: `1.5px solid ${quizSelected === ARTICLE_QUIZ_QUESTIONS[quizIdx].a ? (d ? '#2A5C42' : '#A8D5B9') : (d ? '#5C2525' : '#F1A89E')}`,
              fontSize: 13.5, fontFamily: "'Source Sans 3',Arial,sans-serif", fontWeight: 600,
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{ fontSize: 18 }}>{quizSelected === ARTICLE_QUIZ_QUESTIONS[quizIdx].a ? '✓' : '✗'}</span>
              {quizSelected === ARTICLE_QUIZ_QUESTIONS[quizIdx].a
                ? 'Correct!'
                : `Incorrect — the answer is Article ${ARTICLE_QUIZ_QUESTIONS[quizIdx].a}.`}
            </div>
          )}

          {!quizSubmitted
            ? <button onClick={handleSubmit} disabled={!quizSelected} style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 13.5, fontWeight: 700, padding: '9px 24px', borderRadius: 6, border: 'none', background: '#1B2A4A', color: '#fff', cursor: quizSelected ? 'pointer' : 'not-allowed', opacity: quizSelected ? 1 : 0.4, outline: 'none' }}>Submit</button>
            : <button onClick={nextQuiz} style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 13.5, fontWeight: 700, padding: '9px 24px', borderRadius: 6, border: 'none', background: '#1B2A4A', color: '#fff', cursor: 'pointer', outline: 'none' }}>Next Question →</button>
          }
        </div>
      )}
    </div>
  );
};

Object.assign(window, { ArticlesSection, ARTICLES });
