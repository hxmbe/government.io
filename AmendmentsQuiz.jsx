// AmendmentsQuiz.jsx — Amendments flashcard + quiz component with reverse mode & shuffle

const AMENDMENTS = [
  { num: 1,  short: "First Amendment", rights: "Freedom of religion, speech, press, assembly, and petition", detail: "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.", year: 1791, unit: "Unit 3 · Topic 3.2–3.4", cases: ["Engel v. Vitale", "Tinker v. Des Moines", "New York Times v. United States", "Schenck v. United States"] },
  { num: 2,  short: "Second Amendment", rights: "Right to keep and bear arms", detail: "A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.", year: 1791, unit: "Unit 3 · Topic 3.5", cases: ["McDonald v. Chicago (2010)"] },
  { num: 3,  short: "Third Amendment", rights: "No quartering of soldiers in private homes without consent", detail: "No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.", year: 1791, unit: "Unit 3", cases: [] },
  { num: 4,  short: "Fourth Amendment", rights: "Protection against unreasonable searches and seizures; warrant requirement", detail: "The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause.", year: 1791, unit: "Unit 3 · Topic 3.6", cases: ["New Jersey v. T.L.O.", "Terry v. Ohio"] },
  { num: 5,  short: "Fifth Amendment", rights: "Grand jury, no double jeopardy, no self-incrimination, due process, eminent domain", detail: "No person shall be held to answer for a capital crime unless on a presentment or indictment of a Grand Jury… nor be deprived of life, liberty, or property, without due process of law.", year: 1791, unit: "Unit 3 · Topic 3.6", cases: ["Miranda v. Arizona"] },
  { num: 6,  short: "Sixth Amendment", rights: "Right to speedy and public trial, impartial jury, and assistance of counsel", detail: "In all criminal prosecutions, the accused shall enjoy the right to a speedy and public trial, by an impartial jury… and to have the Assistance of Counsel for his defence.", year: 1791, unit: "Unit 3 · Topic 3.7", cases: ["Gideon v. Wainwright"] },
  { num: 7,  short: "Seventh Amendment", rights: "Right to jury trial in civil cases over $20", detail: "In Suits at common law, where the value in controversy shall exceed twenty dollars, the right of trial by jury shall be preserved.", year: 1791, unit: "Unit 3", cases: [] },
  { num: 8,  short: "Eighth Amendment", rights: "No excessive bail, excessive fines, or cruel and unusual punishment", detail: "Excessive bail shall not be required, nor excessive fines imposed, nor cruel and unusual punishments inflicted.", year: 1791, unit: "Unit 3 · Topic 3.6", cases: [] },
  { num: 9,  short: "Ninth Amendment", rights: "Rights not listed in the Constitution are retained by the people", detail: "The enumeration in the Constitution, of certain rights, shall not be construed to deny or disparage others retained by the people.", year: 1791, unit: "Unit 3", cases: [] },
  { num: 10, short: "Tenth Amendment", rights: "Powers not delegated to the federal government are reserved to states or the people", detail: "The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people.", year: 1791, unit: "Unit 1 · Topic 1.7", cases: ["United States v. Lopez"] },
  { num: 11, short: "Eleventh Amendment", rights: "States cannot be sued in federal court by citizens of another state", detail: "The Judicial power of the United States shall not be construed to extend to any suit commenced or prosecuted against one of the United States by Citizens of another State.", year: 1795, unit: "Unit 2", cases: [] },
  { num: 12, short: "Twelfth Amendment", rights: "Separate Electoral College ballots for president and vice president", detail: "The Electors shall meet in their respective states, and vote by ballot for President and Vice-President.", year: 1804, unit: "Unit 5", cases: [] },
  { num: 13, short: "Thirteenth Amendment", rights: "Abolition of slavery and involuntary servitude", detail: "Neither slavery nor involuntary servitude, except as a punishment for crime… shall exist within the United States.", year: 1865, unit: "Unit 3 · Topic 3.10", cases: [] },
  { num: 14, short: "Fourteenth Amendment", rights: "Citizenship, equal protection, and due process for all persons born in the U.S.", detail: "No State shall make or enforce any law which shall abridge the privileges or immunities of citizens of the United States; nor shall any State deprive any person of life, liberty, or property, without due process of law; nor deny to any person within its jurisdiction the equal protection of the laws.", year: 1868, unit: "Unit 3 · Topics 3.7, 3.10–3.12", cases: ["Brown v. Board of Education", "Obergefell v. Hodges"] },
  { num: 15, short: "Fifteenth Amendment", rights: "Voting rights cannot be denied based on race or color", detail: "The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of race, color, or previous condition of servitude.", year: 1870, unit: "Unit 3 · Topic 3.11", cases: [] },
  { num: 16, short: "Sixteenth Amendment", rights: "Congress may levy a federal income tax", detail: "The Congress shall have power to lay and collect taxes on incomes, from whatever source derived, without apportionment among the several States.", year: 1913, unit: "Unit 4 · Topic 4.9", cases: [] },
  { num: 17, short: "Seventeenth Amendment", rights: "Direct popular election of U.S. Senators", detail: "The Senate of the United States shall be composed of two Senators from each State, elected by the people thereof.", year: 1913, unit: "Unit 2 · Topic 2.1", cases: [] },
  { num: 18, short: "Eighteenth Amendment", rights: "Prohibition — manufacture, sale, and transportation of alcohol banned", detail: "After one year from the ratification of this article the manufacture, sale, or transportation of intoxicating liquors… is hereby prohibited.", year: 1919, unit: "Unit 4", cases: [] },
  { num: 19, short: "Nineteenth Amendment", rights: "Voting rights cannot be denied based on sex", detail: "The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of sex.", year: 1920, unit: "Unit 3 · Topic 3.10", cases: [] },
  { num: 20, short: "Twentieth Amendment", rights: "Lame-duck amendment — sets start dates for presidential and congressional terms", detail: "The terms of the President and Vice President shall end at noon on the 20th day of January, and the terms of Senators and Representatives at noon on the 3d day of January.", year: 1933, unit: "Unit 2", cases: [] },
  { num: 21, short: "Twenty-First Amendment", rights: "Repeal of Prohibition (18th Amendment)", detail: "The eighteenth article of amendment to the Constitution of the United States is hereby repealed.", year: 1933, unit: "Unit 4", cases: [] },
  { num: 22, short: "Twenty-Second Amendment", rights: "Presidential term limits — maximum two terms", detail: "No person shall be elected to the office of the President more than twice.", year: 1951, unit: "Unit 2 · Topic 2.6", cases: [] },
  { num: 23, short: "Twenty-Third Amendment", rights: "Washington D.C. receives Electoral College votes", detail: "The District constituting the seat of Government shall appoint… a number of electors… equal to the whole number of Senators and Representatives in Congress to which the District would be entitled if it were a State.", year: 1961, unit: "Unit 5 · Topic 5.1", cases: [] },
  { num: 24, short: "Twenty-Fourth Amendment", rights: "Poll taxes prohibited in federal elections", detail: "The right of citizens of the United States to vote in any primary or other election… shall not be denied or abridged by reason of failure to pay any poll tax or other tax.", year: 1964, unit: "Unit 5 · Topic 5.1", cases: [] },
  { num: 25, short: "Twenty-Fifth Amendment", rights: "Presidential succession and disability procedures", detail: "In case of the removal of the President from office or of his death or resignation, the Vice President shall become President.", year: 1967, unit: "Unit 2 · Topic 2.4", cases: [] },
  { num: 26, short: "Twenty-Sixth Amendment", rights: "Voting age lowered to 18 years old", detail: "The right of citizens of the United States, who are eighteen years of age or older, to vote shall not be denied or abridged by the United States or by any State on account of age.", year: 1971, unit: "Unit 5 · Topic 5.1", cases: [] },
  { num: 27, short: "Twenty-Seventh Amendment", rights: "Congressional pay raises cannot take effect until after the next election", detail: "No law, varying the compensation for the services of the Senators and Representatives, shall take effect, until an election of Representatives shall have intervened.", year: 1992, unit: "Unit 2", cases: [] },
];

const AMENDMENT_QUIZ_QUESTIONS = [
  { q: "Which amendment protects freedom of speech, religion, press, assembly, and petition?", a: 1 },
  { q: "Which amendment abolished slavery in the United States?", a: 13 },
  { q: "Which amendment grants citizenship and equal protection to all persons born in the U.S.?", a: 14 },
  { q: "Which amendment prohibits unreasonable searches and seizures?", a: 4 },
  { q: "Which amendment limits the president to two terms in office?", a: 22 },
  { q: "Which amendment guarantees the right to keep and bear arms?", a: 2 },
  { q: "Which amendment reserves unenumerated powers to the states or the people?", a: 10 },
  { q: "Which amendment granted women the right to vote?", a: 19 },
  { q: "Which amendment lowered the voting age to 18?", a: 26 },
  { q: "Which amendment established the federal income tax?", a: 16 },
  { q: "Which amendment abolished poll taxes in federal elections?", a: 24 },
  { q: "Which amendment provides for direct election of U.S. Senators?", a: 17 },
  { q: "Which amendment protects the right to a speedy and public trial with assistance of counsel?", a: 6 },
  { q: "Which amendment protects against self-incrimination and double jeopardy?", a: 5 },
  { q: "Which amendment granted African Americans the right to vote?", a: 15 },
  { q: "Which amendment repealed Prohibition?", a: 21 },
  { q: "Which amendment established Prohibition, banning the manufacture and sale of alcohol?", a: 18 },
  { q: "Which amendment protects against cruel and unusual punishment?", a: 8 },
  { q: "Which amendment gives D.C. electoral votes in presidential elections?", a: 23 },
  { q: "Which amendment states that rights not listed in the Constitution are still retained by the people?", a: 9 },
  { q: "Which amendment sets presidential and congressional term start dates (Lame-duck amendment)?", a: 20 },
  { q: "Which amendment provides for presidential succession and disability?", a: 25 },
  { q: "Which amendment bars Congressional pay raises from taking effect until after the next election?", a: 27 },
  { q: "Which amendment prevents states from being sued in federal court by citizens of another state?", a: 11 },
  { q: "Which amendment requires separate Electoral College ballots for president and vice president?", a: 12 },
];

const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
const ordinal = n => { if (n === 1) return '1st'; if (n === 2) return '2nd'; if (n === 3) return '3rd'; return `${n}th`; };

const aStyles = {
  wrap: { padding: '0 0 24px' },
  modeTabs: { display: 'flex', gap: 4, marginBottom: 20, borderBottom: '1px solid #EEF0F4', paddingBottom: 12 },
  modeTab: { fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 13, fontWeight: 600, padding: '7px 16px', borderRadius: 6, border: 'none', background: '#F8F9FB', color: '#9BA5B2', cursor: 'pointer' },
  modeTabActive: { background: '#1B2A4A', color: '#fff' },
  filterRow: { display: 'flex', gap: 7, flexWrap: 'wrap', marginBottom: 16 },
  filterBtn: { fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 11, fontWeight: 600, padding: '4px 12px', borderRadius: 9999, border: '1.5px solid #DDE1E9', background: '#fff', color: '#5A6779', cursor: 'pointer' },
  filterActive: { background: '#1B2A4A', color: '#fff', borderColor: '#1B2A4A' },
  amendGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: 8 },
  amendChip: { background: '#fff', borderRadius: 8, border: '1.5px solid #EEF0F4', padding: '10px 12px', cursor: 'pointer', transition: 'all 150ms' },
  amendChipActive: { borderColor: '#1B2A4A', background: '#EBF2F9' },
  amendNum: { fontFamily: "'Playfair Display',Georgia,serif", fontSize: '1.5rem', fontWeight: 700, color: '#B22234', lineHeight: 1 },
  amendShort: { fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 12, fontWeight: 600, color: '#1A2030', margin: '4px 0 2px', lineHeight: 1.3 },
  amendYear: { fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 10, color: '#9BA5B2' },
  detail: { width: 310, flexShrink: 0, background: '#fff', borderRadius: 10, padding: '18px 20px', border: '1px solid #EEF0F4', alignSelf: 'flex-start', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' },
  detailNum: { fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#B22234', marginBottom: 4 },
  detailShort: { fontFamily: "'Playfair Display',Georgia,serif", fontSize: '1.15rem', fontWeight: 700, color: '#1A2030', marginBottom: 3 },
  detailYear: { fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 11, color: '#9BA5B2', marginBottom: 10 },
  detailRights: { fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 13.5, fontWeight: 600, color: '#1B2A4A', marginBottom: 12, lineHeight: 1.45 },
  detailTextBox: { background: '#F5F0E8', borderLeft: '3px solid #C9A84C', borderRadius: '0 6px 6px 0', padding: '10px 12px' },
  detailTextLabel: { fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#9BA5B2', marginBottom: 4 },
  detailText: { fontFamily: "'Playfair Display',Georgia,serif", fontSize: 12, fontStyle: 'italic', color: '#2B3748', lineHeight: 1.55 },
  caseTag: { fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 11, background: '#EBF2F9', color: '#2D5D8B', border: '1px solid #A3C4DF', padding: '3px 8px', borderRadius: 4 },
  flashCard: { width: 500, minHeight: 230, background: '#fff', borderRadius: 12, border: '2px solid #DDE1E9', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 36, cursor: 'pointer', boxShadow: '0 4px 14px rgba(0,0,0,0.08)', transition: 'box-shadow 150ms' },
  flashLabel: { fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#B22234', marginBottom: 12 },
  flashAnswer: { fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 15, fontWeight: 600, color: '#1B2A4A', lineHeight: 1.5, marginBottom: 8, textAlign: 'center' },
  flashYear: { fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 11, color: '#9BA5B2', textAlign: 'center' },
  navBtn: { fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 13, fontWeight: 600, padding: '8px 20px', borderRadius: 6, border: '1.5px solid #DDE1E9', background: '#fff', color: '#1B2A4A', cursor: 'pointer' },
  quizHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  quizStem: { fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 15, fontWeight: 500, color: '#1A2030', lineHeight: 1.6, marginBottom: 18, background: '#F5F0E8', padding: '14px 16px', borderRadius: 8, borderLeft: '4px solid #1B2A4A' },
  quizChoice: { background: '#fff', border: '1.5px solid #DDE1E9', borderRadius: 7, padding: '12px 14px', fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 13, color: '#1A2030', transition: 'all 150ms' },
  quizCorrect: { background: '#C8E6D8', borderColor: '#4A9070', color: '#1A3D2B' },
  quizWrong: { background: '#EAC8C8', borderColor: '#A04040', color: '#3D1A1A' },
  submitBtn: { fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 13.5, fontWeight: 600, padding: '9px 24px', borderRadius: 6, border: 'none', background: '#1B2A4A', color: '#fff', cursor: 'pointer' },
};

const AmendmentsSection = ({ dark = false }) => {
  const [mode, setMode] = React.useState('browse');
  const [selected, setSelected] = React.useState(null);
  const [filter, setFilter] = React.useState('all');
  const [shuffled, setShuffled] = React.useState(false);

  // Flashcard state
  const [flashIdx, setFlashIdx] = React.useState(0);
  const [flashFlipped, setFlashFlipped] = React.useState(false);
  const [flashReverse, setFlashReverse] = React.useState(false); // reverse = show rights, guess number
  const [flashOrder, setFlashOrder] = React.useState(AMENDMENTS.map((_, i) => i));

  // Quiz state
  const [quizIdx, setQuizIdx] = React.useState(0);
  const [quizOrder, setQuizOrder] = React.useState(AMENDMENT_QUIZ_QUESTIONS.map((_, i) => i));
  const [quizAnswer, setQuizAnswer] = React.useState(null);
  const [quizSubmitted, setQuizSubmitted] = React.useState(false);
  const [quizScore, setQuizScore] = React.useState(0);
  const [quizChoices, setQuizChoices] = React.useState([]);

  const filterMap = {
    all: AMENDMENTS,
    bill: AMENDMENTS.filter(a => a.num <= 10),
    reconstruction: AMENDMENTS.filter(a => [13,14,15].includes(a.num)),
    progressive: AMENDMENTS.filter(a => [16,17,18,19].includes(a.num)),
    modern: AMENDMENTS.filter(a => a.num >= 20),
  };
  const filtered = filterMap[filter];

  const generateQuizChoices = (idx) => {
    const q = AMENDMENT_QUIZ_QUESTIONS[quizOrder[idx]];
    const correct = q.a;
    const pool = AMENDMENTS.map(a => a.num).filter(n => n !== correct);
    const wrong = shuffle(pool).slice(0, 3);
    return shuffle([...wrong, correct]);
  };

  React.useEffect(() => { setQuizChoices(generateQuizChoices(0)); }, []);

  const handleShuffle = () => {
    const newOrder = shuffle(flashOrder);
    setFlashOrder(newOrder);
    setFlashIdx(0);
    setFlashFlipped(false);
    setShuffled(true);
  };

  const handleQuizShuffle = () => {
    const newOrder = shuffle(quizOrder);
    setQuizOrder(newOrder);
    setQuizIdx(0);
    setQuizAnswer(null);
    setQuizSubmitted(false);
    setQuizChoices(generateQuizChoices(0));
  };

  const goFlash = (dir) => {
    const next = (flashIdx + dir + flashOrder.length) % flashOrder.length;
    setFlashIdx(next);
    setFlashFlipped(false);
  };

  const nextQuiz = () => {
    const next = (quizIdx + 1) % quizOrder.length;
    setQuizIdx(next);
    setQuizAnswer(null);
    setQuizSubmitted(false);
    setQuizChoices(generateQuizChoices(next));
  };

  const handleQuizSubmit = (numGuess) => {
    setQuizSubmitted(true);
    if (numGuess === AMENDMENT_QUIZ_QUESTIONS[quizOrder[quizIdx]].a) setQuizScore(s => s + 1);
  };

  const currentFlashAmendment = AMENDMENTS[flashOrder[flashIdx]];
  const currentQuizQ = AMENDMENT_QUIZ_QUESTIONS[quizOrder[quizIdx]];

  // Dark mode style overrides
  const card = dark ? '#111B2B' : '#fff';
  const bord = dark ? '#1E2D42' : '#EEF0F4';
  const bord2= dark ? '#253447' : '#DDE1E9';
  const textP= dark ? '#E8ECF0' : '#1A2030';
  const textS= dark ? '#C8D4E0' : '#2B3748';
  const s = React.useMemo(() => {
    if (!dark) return aStyles;
    return {
      ...aStyles,
      modeTabs:    { ...aStyles.modeTabs,    borderBottom: `1px solid #1E2D42` },
      modeTab:     { ...aStyles.modeTab,     background: '#253447', color: '#BFC6D0' },
      filterRow:   aStyles.filterRow,
      filterBtn:   { ...aStyles.filterBtn,   background: '#0D1421', borderColor: '#253447', color: '#9BA5B2' },
      filterActive:aStyles.filterActive,
      amendChip:   { ...aStyles.amendChip,   background: card, border: `1.5px solid #1E2D42` },
      amendChipActive: { ...aStyles.amendChipActive, background: '#1A2E48', borderColor: '#8BAED4' },
      amendShort:  { ...aStyles.amendShort,  color: '#BFC6D0' },
      detail:      { ...aStyles.detail,      background: card, border: `1px solid #1E2D42`, boxShadow: 'none' },
      detailShort: { ...aStyles.detailShort, color: '#E8ECF0' },
      detailYear:  { ...aStyles.detailYear },
      detailRights:{ ...aStyles.detailRights,color: '#BFC6D0' },
      detailTextBox:{ ...aStyles.detailTextBox, background: 'rgba(201,168,76,0.12)', borderLeftColor: '#C9A84C' },
      detailTextLabel:{ ...aStyles.detailTextLabel },
      detailText:  { ...aStyles.detailText,  color: '#C8D4E0' },
      caseTag:     { ...aStyles.caseTag,     background: 'rgba(45,93,139,0.25)', color: '#8BAED4', borderColor: '#2D5D8B' },
      flashCard:   { ...aStyles.flashCard,   background: card, border: `2px solid #1E2D42`, boxShadow: 'none' },
      flashAnswer: { ...aStyles.flashAnswer, color: '#BFC6D0' },
      flashYear:   { ...aStyles.flashYear },
      navBtn:      { ...aStyles.navBtn,      background: card, borderColor: '#253447', color: '#BFC6D0' },
      quizHeader:  aStyles.quizHeader,
      quizStem:    { ...aStyles.quizStem,    background: 'rgba(27,42,74,0.5)', color: '#E8ECF0', borderLeftColor: '#8BAED4' },
      quizChoice:  { ...aStyles.quizChoice,  background: card, border: `1.5px solid #1E2D42` },
      quizCorrect: { background: '#071A12', borderColor: '#2A5C42', color: '#5A9A7A' },
      quizWrong:   { background: '#1A0808', borderColor: '#5C2525', color: '#9A5A5A' },
      submitBtn:   aStyles.submitBtn,
    };
  }, [dark]);

  return (
    <div style={s.wrap}>
      {/* Mode tabs */}
      <div style={s.modeTabs}>
        {[['browse','Browse All'],['flashcard','Flashcards'],['quiz','Quiz Mode']].map(([m, label]) => (
          <button key={m} style={{ ...s.modeTab, ...(mode === m ? aStyles.modeTabActive : {}) }} onClick={() => setMode(m)}>{label}</button>
        ))}
      </div>

      {/* ── BROWSE MODE ── */}
      {mode === 'browse' && (
        <div style={{ display: 'flex', gap: 20 }}>
          <div style={{ flex: 1 }}>
            <div style={aStyles.filterRow}>
              {[['all','All 27'],['bill','Bill of Rights (1–10)'],['reconstruction','Reconstruction (13–15)'],['progressive','Progressive Era (16–19)'],['modern','Modern (20–27)']].map(([f,l]) => (
                <button key={f} style={{ ...s.filterBtn, ...(filter===f ? aStyles.filterActive : {}) }} onClick={() => { setFilter(f); setSelected(null); }}>{l}</button>
              ))}
            </div>
            <div style={aStyles.amendGrid}>
              {filtered.map(a => (
                <div key={a.num} style={{ ...s.amendChip, ...(selected?.num === a.num ? s.amendChipActive : {}) }} onClick={() => setSelected(a === selected ? null : a)}>
                  <div style={aStyles.amendNum}>{a.num}</div>
                  <div style={s.amendShort}>{a.short}</div>
                  <div style={aStyles.amendYear}>{a.year}</div>
                </div>
              ))}
            </div>
          </div>

          {selected && (
            <div style={s.detail}>
              <div style={aStyles.detailNum}>Amendment {selected.num}</div>
              <div style={s.detailShort}>{selected.short}</div>
              <div style={aStyles.detailYear}>Ratified {selected.year} · {selected.unit}</div>
              <div style={s.detailRights}>{selected.rights}</div>
              <div style={s.detailTextBox}>
                <div style={aStyles.detailTextLabel}>Constitutional Text</div>
                <p style={s.detailText}>"{selected.detail}"</p>
              </div>
              {selected.cases.length > 0 && (
                <div style={{ marginTop: 12 }}>
                  <div style={aStyles.detailTextLabel}>Key Related Cases</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 6 }}>
                    {selected.cases.map(c => (
                      <span key={c} style={s.caseTag}><em>{c}</em></span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ── FLASHCARD MODE ── */}
      {mode === 'flashcard' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          {/* Controls row */}
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ display: 'flex', gap: 4 }}>
              {[false, true].map(rev => (
                <button key={String(rev)} onClick={() => { setFlashReverse(rev); setFlashFlipped(false); }}
                  style={{ ...s.filterBtn, ...(flashReverse === rev ? aStyles.filterActive : {}), fontSize: 11 }}>
                  {rev ? 'Rights → Amendment #' : 'Amendment # → Rights'}
                </button>
              ))}
            </div>
            <button onClick={handleShuffle} style={{ ...s.filterBtn, fontSize: 11, borderColor: '#C9A84C', color: '#C9A84C' }}>
              ⇄ Shuffle {shuffled ? '(on)' : ''}
            </button>
          </div>

          <div style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 11, color: '#9BA5B2' }}>
            {flashIdx + 1} / {flashOrder.length} {shuffled ? '· Shuffled' : '· In order'}
          </div>

          <div style={s.flashCard} onClick={() => setFlashFlipped(f => !f)}>
            {!flashReverse ? (
              /* Forward: show amendment number, flip to reveal rights */
              !flashFlipped ? (
                <div style={{ textAlign: 'center' }}>
                  <div style={aStyles.flashLabel}>Amendment</div>
                  <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: '3.5rem', fontWeight: 700, color: dark ? '#E8ECF0' : '#1B2A4A', lineHeight: 1, marginBottom: 8 }}>{currentFlashAmendment.num}</div>
                  <div style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 12, color: '#9BA5B2', marginTop: 8 }}>Tap to reveal rights →</div>
                </div>
              ) : (
                <div style={{ textAlign: 'center' }}>
                  <div style={aStyles.flashLabel}>{currentFlashAmendment.short}</div>
                  <div style={s.flashAnswer}>{currentFlashAmendment.rights}</div>
                  <div style={s.flashYear}>Ratified {currentFlashAmendment.year}</div>
                </div>
              )
            ) : (
              /* Reverse: show rights description, flip to reveal amendment number */
              !flashFlipped ? (
                <div style={{ textAlign: 'center' }}>
                  <div style={aStyles.flashLabel}>Which Amendment?</div>
                  <p style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 15, fontWeight: 600, color: dark ? '#BFC6D0' : '#1B2A4A', lineHeight: 1.5, marginBottom: 8 }}>{currentFlashAmendment.rights}</p>
                  <div style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 12, color: '#9BA5B2', marginTop: 8 }}>Tap to reveal amendment →</div>
                </div>
              ) : (
                <div style={{ textAlign: 'center' }}>
                  <div style={aStyles.flashLabel}>Amendment</div>
                  <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: '3.5rem', fontWeight: 700, color: '#B22234', lineHeight: 1, marginBottom: 8 }}>{currentFlashAmendment.num}</div>
                  <div style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 14, color: dark ? '#9BA5B2' : '#404E60', marginTop: 4 }}>{currentFlashAmendment.short}</div>
                </div>
              )
            )}
          </div>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <button style={s.navBtn} onClick={() => goFlash(-1)}>← Prev</button>
            <button style={s.navBtn} onClick={() => goFlash(1)}>Next →</button>
          </div>
        </div>
      )}

      {/* ── QUIZ MODE ── */}
      {mode === 'quiz' && (
        <div style={{ maxWidth: 580 }}>
          <div style={s.quizHeader}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <span style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 13, color: '#9BA5B2' }}>Q {quizIdx + 1} / {quizOrder.length}</span>
              <button onClick={handleQuizShuffle} style={{ ...s.filterBtn, fontSize: 10, padding: '3px 10px', borderColor: '#C9A84C', color: '#C9A84C' }}>⇄ Shuffle</button>
            </div>
            <span style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 13, fontWeight: 700, color: '#2A7A4B' }}>Score: {quizScore} / {quizIdx}</span>
          </div>

          <div style={s.quizStem}>{currentQuizQ.q}</div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
            {quizChoices.map(num => {
              const amend = AMENDMENTS.find(a => a.num === num);
              const isCorrect = num === currentQuizQ.a;
              const wasSelected = quizAnswer === num;
              let style = s.quizChoice;
              if (quizSubmitted) {
                if (isCorrect) style = { ...style, ...aStyles.quizCorrect };
                else if (wasSelected) style = { ...style, ...aStyles.quizWrong };
                else style = { ...style, opacity: 0.45 };
              } else if (wasSelected) {
                style = { ...style, borderColor: dark ? '#8BAED4' : '#1B2A4A', background: dark ? '#1A2E48' : '#EBF2F9' };
              }
              return (
                <div key={num} style={{ ...style, cursor: quizSubmitted ? 'default' : 'pointer' }}
                  onClick={() => !quizSubmitted && setQuizAnswer(num)}>
                  <strong style={{ color: quizSubmitted && isCorrect ? (dark ? '#5A9A7A' : '#1A3D2B') : quizSubmitted && wasSelected && !isCorrect ? (dark ? '#9A5A5A' : '#3D1A1A') : (dark ? '#BFC6D0' : '#1B2A4A'), fontFamily: "'Playfair Display',Georgia,serif" }}>{ordinal(num)} Amendment</strong>
                  {quizSubmitted && <span style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 12, color: dark ? '#748092' : '#5A6779', lineHeight: 1.4, display: 'block', marginTop: 6 }}>— {amend?.rights}</span>}
                </div>
              );
            })}
          </div>

          {!quizSubmitted ? (
            <button style={{ ...aStyles.submitBtn, opacity: quizAnswer !== null ? 1 : 0.4 }}
              onClick={() => quizAnswer !== null && handleQuizSubmit(quizAnswer)}>
              Submit Answer
            </button>
          ) : (
            <div>
              <div style={{ fontFamily: "'Source Sans 3',Arial,sans-serif", fontSize: 13, color: quizAnswer === currentQuizQ.a ? '#2A7A4B' : '#C0392B', marginBottom: 10, fontWeight: 600 }}>
                {quizAnswer === currentQuizQ.a ? 'Correct!' : `Incorrect — ${ordinal(currentQuizQ.a)} Amendment: ${AMENDMENTS.find(a => a.num === currentQuizQ.a)?.rights}`}
              </div>
              <button style={aStyles.submitBtn} onClick={nextQuiz}>Next Question →</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};


Object.assign(window, { AmendmentsSection, AMENDMENTS });
