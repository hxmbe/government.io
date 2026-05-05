// QuestionCard.jsx — Animated MCQ with sound, hints, wrong-answer notes, dark mode

// ── CSS INJECTION ──────────────────────────────────────────────
(function() {
  if (document.getElementById('qcard-styles')) return;
  const s = document.createElement('style');
  s.id = 'qcard-styles';
  s.textContent = `
    @keyframes qc-slideUp   { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
    @keyframes qc-shake     { 0%,100%{transform:translateX(0)} 15%{transform:translateX(-7px)} 35%{transform:translateX(7px)} 55%{transform:translateX(-5px)} 75%{transform:translateX(5px)} }
    @keyframes qc-pulseGreen{ 0%{box-shadow:0 0 0 0 rgba(42,122,75,0.5)} 70%{box-shadow:0 0 0 10px rgba(42,122,75,0)} 100%{box-shadow:0 0 0 0 rgba(42,122,75,0)} }
    @keyframes qc-fadeIn    { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
    @keyframes qc-banner    { from{opacity:0;transform:translateY(-8px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }
    @keyframes qc-hint-pop  { from{opacity:0;transform:scale(0.95)} to{opacity:1;transform:scale(1)} }
    @keyframes qc-spin      { to{transform:rotate(360deg)} }
    .qc-shake     { animation:qc-shake 420ms cubic-bezier(.36,.07,.19,.97) both; }
    .qc-pulseGreen{ animation:qc-pulseGreen 600ms ease; }
    .qc-slideUp   { animation:qc-slideUp 260ms ease forwards; }
    .qc-fadeIn    { animation:qc-fadeIn 380ms ease forwards; }
    .qc-banner    { animation:qc-banner 280ms cubic-bezier(0.175,0.885,0.32,1.275) forwards; }
    .qc-hint-pop  { animation:qc-hint-pop 220ms ease forwards; }
    .qc-choice-hover:hover { filter:brightness(0.97); }
    .qc-spin { animation:qc-spin 1s linear infinite; }
  `;
  document.head.appendChild(s);
})();

// ── SOUND ENGINE ───────────────────────────────────────────────
const SoundEngine = {
  get enabled() { return window.APP_SETTINGS?.sound !== false; },
  _ctx: null,
  _getCtx() {
    if (!this._ctx) this._ctx = new (window.AudioContext || window.webkitAudioContext)();
    return this._ctx;
  },
  _tone(freq, startT, dur, type='sine', vol=0.22) {
    try {
      const ctx = this._getCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type; osc.frequency.value = freq;
      osc.connect(gain); gain.connect(ctx.destination);
      gain.gain.setValueAtTime(0, startT);
      gain.gain.linearRampToValueAtTime(vol, startT + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.001, startT + dur);
      osc.start(startT); osc.stop(startT + dur + 0.05);
    } catch(e){}
  },
  correct() {
    if(!this.enabled) return;
    try {
      const ctx = this._getCtx();
      const t = ctx.currentTime;
      this._tone(523, t,       0.18, 'sine', 0.2);   // C5
      this._tone(659, t+0.10, 0.18, 'sine', 0.2);    // E5
      this._tone(784, t+0.20, 0.30, 'sine', 0.2);    // G5
    } catch(e){}
  },
  incorrect() {
    if(!this.enabled) return;
    try {
      const ctx = this._getCtx();
      const t = ctx.currentTime;
      this._tone(220, t,       0.15, 'sawtooth', 0.15);
      this._tone(196, t+0.12, 0.20, 'sawtooth', 0.12);
    } catch(e){}
  },
  select() {
    if(!this.enabled) return;
    try { const ctx=this._getCtx(); this._tone(440, ctx.currentTime, 0.08, 'sine', 0.08); } catch(e){}
  },
};

// ── QUESTION DATA ──────────────────────────────────────────────
const QUESTIONS = [
  { id:1, unit:"Unit 2", topic:"2.8", type:"SCOTUS", difficulty:"Medium",
    stem:"Which of the following best describes the significance of Marbury v. Madison (1803)?",
    choices:["It established Congress's power to override presidential vetoes.","It created the principle of judicial review, allowing courts to strike down unconstitutional laws.","It affirmed the president's authority to appoint federal judges without Senate approval.","It limited the Supreme Court's original jurisdiction to cases involving states."],
    correct:1,
    hint:"Think about what Chief Justice John Marshall's ruling gave the Supreme Court the power to do — something not explicitly listed in the Constitution.",
    wrongNotes:["Congress's veto override power (2/3 majority in both chambers) is in Article I and existed before Marbury — the case had nothing to do with it.","CORRECT: Marshall established judicial review — the Court's power to declare laws unconstitutional.","The president's appointment authority is in Article II §2. Marbury actually arose from a contested appointment, but the ruling was about the Court's power, not the president's.","Marshall ruled the opposite on original jurisdiction here — Marbury's request for original-jurisdiction mandamus was denied because the Judiciary Act provision granting it was unconstitutional."],
    explanation:"In Marbury v. Madison (1803), Chief Justice Marshall established judicial review — the power of the Supreme Court to declare laws unconstitutional. This is arguably the most consequential decision in American constitutional history.", scotus:{name:"Marbury v. Madison",year:"1803"} },
  { id:2, unit:"Unit 1", topic:"1.8", type:"SCOTUS", difficulty:"Medium",
    stem:"In McCulloch v. Maryland (1819), the Supreme Court upheld which constitutional principle?",
    choices:["The right of states to nullify federal laws they consider unconstitutional.","The implied powers of Congress under the Necessary and Proper Clause and federal supremacy over state law.","The president's power to veto legislation passed by Congress.","The limitation of federal power to those powers explicitly listed in the Constitution."],
    correct:1,
    hint:"The case involved Maryland taxing the national bank. Marshall asked: does Congress have the power to create the bank, and can a state tax it?",
    wrongNotes:["Nullification — the doctrine that states can void federal laws — was explicitly REJECTED by Marshall. The Supremacy Clause makes federal law supreme.","CORRECT: Marshall used the Necessary and Proper Clause to uphold implied congressional power, and the Supremacy Clause to block Maryland's tax.","The presidential veto power is irrelevant to McCulloch; the case was about congressional and state power.","This is the strict constructionist view Marshall REJECTED. He held that 'necessary' means 'useful,' not 'indispensable.'"],
    explanation:"McCulloch v. Maryland established implied powers (Congress can do what's 'necessary and proper' to execute enumerated powers) and federal supremacy (states cannot tax federal institutions).", scotus:{name:"McCulloch v. Maryland",year:"1819"} },
  { id:3, unit:"Unit 3", topic:"3.7", type:"Concept Application", difficulty:"Medium",
    stem:"The doctrine of selective incorporation has primarily served to:",
    hint:"Think about how the Bill of Rights originally only limited the federal government, and which constitutional amendment changed that.",
    choices:["Allow states to selectively apply provisions of the Bill of Rights to different groups of citizens.","Extend most protections of the Bill of Rights to apply to state governments through the Fourteenth Amendment.","Give Congress the authority to selectively expand civil liberties for minority groups.","Require the federal government to adopt state civil liberties protections that are more expansive."],
    correct:1,
    wrongNotes:["This describes discrimination, not incorporation. The doctrine applies constitutional protections equally — it doesn't allow states to pick and choose who is protected.","CORRECT: Selective incorporation uses the 14th Amendment's Due Process Clause to apply Bill of Rights protections to state governments, case by case.","Congress plays no direct role in selective incorporation — it is a judicial doctrine applied by the Supreme Court.","This reverses the actual direction: federal protections flow DOWN to states, not the other way around."],
    explanation:"Selective incorporation applies most Bill of Rights protections to the states through the Due Process Clause of the 14th Amendment, one right at a time through Supreme Court decisions." },
  { id:4, unit:"Unit 2", topic:"2.3", type:"Quantitative Analysis", difficulty:"Medium",
    stem:"Data showing increasing party-line voting in Congress over 40 years best supports which conclusion?",
    hint:"Party-line voting means members vote WITH their party. If this is increasing, what does it suggest about the relationship between the parties?",
    choices:["Congressional representatives have become less responsive to constituent needs.","The legislative process has become more efficient as party discipline increases.","Political polarization has increased, making bipartisan compromise more difficult.","The president has gained increasing influence over congressional voting behavior."],
    correct:2,
    wrongNotes:["Responsiveness to constituents and party-line voting are separate measures. Members may vote with their party AND remain responsive to constituents — the data doesn't address constituent service.","Increased party discipline actually tends to REDUCE efficiency on divided-government questions because neither party will compromise with the other — efficiency requires bipartisan agreement on most major legislation.","CORRECT: Rising party-line voting indicates widening ideological gaps between parties, making the cross-party compromise needed for major legislation increasingly rare.","Presidential influence on Congress is a separate variable. Party-line voting primarily reflects internal party cohesion, not presidential direction, though the relationship is complex."],
    explanation:"Rising party-line voting rates in Congress reflect increased political polarization — parties have become more ideologically cohesive internally and more opposed to each other, making bipartisan compromise harder." },
];

const getBookmarks = () => { try { return JSON.parse(localStorage.getItem('apgov_bookmarks')||'{}'); } catch { return {}; } };
const saveBookmarks = bm => localStorage.setItem('apgov_bookmarks', JSON.stringify(bm));

const DIFF_CONFIG = {
  'Easy':   {color:'#2A7A4B',bg:'#EAF5EE',border:'#A8D5B9'},
  'Medium': {color:'#D97706',bg:'#FEF3C7',border:'#FCD34D'},
  'Hard':   {color:'#C0392B',bg:'#FDECEA',border:'#F1A89E'},
};
const TYPE_COLORS = {
  'SCOTUS':'#2D5D8B','Stimulus-Based':'#5A2D8B','Data Analysis':'#1B2A4A',
  'SCOTUS Comparison':'#8B2D5A','Comparison':'#374B60','Concept Application':'#748092',
  'Quantitative Analysis':'#2A7A4B','Argument Essay':'#B22234',
};

const QuestionCard = ({ questionIndex=0, onNext, onPrev, totalQuestions, onAnswer, questionBank, dark, onOpenStimulusModal }) => {
  const bank = questionBank || QUESTIONS;
  const [selected,        setSelected]        = React.useState(null);
  const [submitted,       setSubmitted]       = React.useState(false);
  const [showExplanation, setShowExplanation] = React.useState(false);
  const [showHint,        setShowHint]        = React.useState(false);
  const [loadingExpl,     setLoadingExpl]     = React.useState(false);
  const [shakeChoice,     setShakeChoice]     = React.useState(null);
  const [bookmarks,       setBookmarks]       = React.useState(getBookmarks);
  const [revealedWrong,   setRevealedWrong]   = React.useState(false);
  const [partBAnswer,     setPartBAnswer]     = React.useState(null);
  const [showPartB,       setShowPartB]       = React.useState(false);
  const bannerRef   = React.useRef(null);
  const explRef     = React.useRef(null);

  const settings = window.APP_SETTINGS || {};
  const animOn = settings.animations !== false;

  React.useEffect(() => {
    setSelected(null); setSubmitted(false); setShowExplanation(false);
    setShowHint(false); setShakeChoice(null); setRevealedWrong(false); setLoadingExpl(false);
    setPartBAnswer(null); setShowPartB(false);
  }, [questionIndex]);

  const q = bank[questionIndex % bank.length];
  if (!q) return null;

  // ── STIMULUS QUESTIONS (modal-based) ──
  if (q.type === 'Stimulus') {
    const bgCard = dark ? '#1A2332' : '#FFFFFF';
    const textPrimary = dark ? '#FFFFFF' : '#1a1a18';
    const textSecondary = dark ? '#BFC6D0' : '#6b6b68';
    const bord = dark ? '#3B5578' : '#dddbd5';
    const accentColor = '#185fa5';

    const handleOpenStimulus = () => {
      onOpenStimulusModal && onOpenStimulusModal(q.id);
    };

    return (
      <div style={{ background: bgCard, border: `1px solid ${bord}`, borderRadius: '12px', padding: '24px', marginBottom: '20px' }}>
        {/* Header */}
        <div style={{ marginBottom: '20px', paddingBottom: '16px', borderBottom: `1px solid ${bord}` }}>
          <div style={{ fontSize: '11px', fontWeight: '600', color: accentColor, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
            Stimulus Question
          </div>
          <h3 style={{ fontSize: '16px', fontWeight: '600', color: textPrimary, margin: '0 0 6px 0', lineHeight: '1.4' }}>
            {q.title}
          </h3>
          <div style={{ fontSize: '12px', color: textSecondary }}>
            {q.unit} • Topic {q.topic} • {q.difficulty}
          </div>
        </div>

        {/* Content */}
        <div style={{ marginBottom: '24px' }}>
          <p style={{ fontSize: '13px', color: textSecondary, lineHeight: '1.6', marginBottom: '16px' }}>
            This is an interactive stimulus question with a chart and two-part questions. Click below to open the full question.
          </p>
          <button onClick={handleOpenStimulus} style={{
            background: accentColor, color: '#fff', border: 'none', borderRadius: '8px',
            padding: '12px 20px', fontSize: '13px', fontWeight: '600', cursor: 'pointer',
            transition: 'all 150ms'
          }} onMouseEnter={e => e.target.style.background = '#1449d1'}
             onMouseLeave={e => e.target.style.background = accentColor}>
            Open Stimulus Question
          </button>
        </div>

        {/* Info */}
        <div style={{ fontSize: '12px', color: textSecondary, padding: '12px', background: dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)', borderRadius: '6px' }}>
          📊 Chart-based question with Part A and Part B. Answer both parts correctly to earn full credit.
        </div>
      </div>
    );
  }

  const isCorrect   = selected === q.correct;
  const total       = totalQuestions ?? bank.length;
  const diff        = q.difficulty || 'Medium';
  const diffCfg     = DIFF_CONFIG[diff] || DIFF_CONFIG['Medium'];
  const isBookmarked= !!bookmarks[q.id];
  const d = dark;

  // ── theme colors ──
  const bg     = d?'#1A2535':'#fff';
  const bgAlt  = d?'#0F1829':'#F5F0E8';
  const bgInfo = d?'#162236':'#EBF2F9';
  const bord   = d?'#253447':'#DDE1E9';
  const textP  = d?'#E8ECF0':'#1A2030';
  const textS  = d?'#C8D4E0':'#404E60';
  const textM  = d?'#748092':'#9BA5B2';

  const toggleBookmark = e => {
    e.stopPropagation();
    const bm = {...bookmarks};
    if (bm[q.id]) delete bm[q.id]; else bm[q.id] = true;
    setBookmarks(bm); saveBookmarks(bm);
  };

  const handleSelect = i => {
    if (submitted) return;
    SoundEngine.select();
    setSelected(i);
  };

  const handleSubmit = () => {
    if (selected === null) return;
    setSubmitted(true);
    const correct = selected === q.correct;
    // Animate wrong choice
    if (!correct && animOn) {
      setShakeChoice(selected);
      setTimeout(() => setShakeChoice(null), 500);
    }
    // Sound
    if (correct) SoundEngine.correct(); else SoundEngine.incorrect();
    // Staggered explanation reveal
    setLoadingExpl(true);
    setTimeout(() => { setLoadingExpl(false); setShowExplanation(true); }, 700);
    onAnswer && onAnswer(correct, q);
  };

  const handleNext = () => {
    setSelected(null); setSubmitted(false); setShowExplanation(false);
    setShowHint(false); setShakeChoice(null); setRevealedWrong(false); setLoadingExpl(false);
    onNext && onNext();
  };

  const choiceLetter = i => String.fromCharCode(65+i);

  const getChoiceStyle = i => {
    const base = {
      display:'flex', alignItems:'flex-start', gap:11,
      border:`1.5px solid ${bord}`, borderRadius:8, padding:'12px 14px',
      marginBottom:8, background:bg, cursor:submitted?'default':'pointer',
      transition:'all 180ms', userSelect:'none',
    };
    if (!submitted) return selected===i ? {...base, borderColor:'#1B2A4A', background:d?'#1E3A55':'#EBF2F9'} : {...base};
    if (i===q.correct) return {...base, borderColor:'#2A7A4B', background:d?'#0F2E1A':'#EAF5EE', cursor:'default'};
    if (i===selected&&i!==q.correct) return {...base, borderColor:'#C0392B', background:d?'#2E0F0F':'#FDECEA', cursor:'default'};
    return {...base, opacity:0.38};
  };

  const getLetterBg = i => {
    if (!submitted) return selected===i ? {bg:'#1B2A4A',color:'#fff',bord:'#1B2A4A'} : {bg:'transparent',color:textM,bord:d?'#374B60':'#BFC6D0'};
    if (i===q.correct) return {bg:'#2A7A4B',color:'#fff',bord:'#2A7A4B'};
    if (i===selected&&i!==q.correct) return {bg:'#C0392B',color:'#fff',bord:'#C0392B'};
    return {bg:'transparent',color:textM,bord:d?'#374B60':'#BFC6D0'};
  };

  const typeColor = TYPE_COLORS[q.type] || '#748092';

  return (
    <div style={{ background:bg, borderRadius:12, boxShadow:d?'0 2px 20px rgba(0,0,0,0.5)':'0 2px 8px rgba(0,0,0,0.08),0 1px 3px rgba(0,0,0,0.06)', padding:'22px 24px', transition:'background 300ms' }}>

      {/* ── META ROW ── */}
      <div style={{ display:'flex', alignItems:'center', gap:6, marginBottom:14, flexWrap:'wrap' }}>
        <span style={{ fontSize:10,fontWeight:700,letterSpacing:'0.06em',textTransform:'uppercase',padding:'3px 8px',borderRadius:4,background:'#1B2A4A',color:'#fff',fontFamily:"'Source Sans 3',Arial,sans-serif" }}>{q.unit}</span>
        <span style={{ fontSize:10,fontWeight:700,padding:'3px 8px',borderRadius:4,background:d?'#1A2535':'#EEF0F4',color:d?'#9BA5B2':'#5A6779',fontFamily:"'Source Sans 3',Arial,sans-serif",letterSpacing:'0.04em' }}>Topic {q.topic}</span>
        <span style={{ fontSize:10,fontWeight:700,letterSpacing:'0.04em',padding:'3px 8px',borderRadius:4,background:typeColor,color:'#fff',fontFamily:"'Source Sans 3',Arial,sans-serif" }}>{q.type}</span>
        <span style={{ fontSize:10,fontWeight:700,padding:'3px 8px',borderRadius:4,background:d?diffCfg.bg+'22':diffCfg.bg,color:diffCfg.color,border:`1px solid ${diffCfg.border}`,fontFamily:"'Source Sans 3',Arial,sans-serif" }}>{diff}</span>
        <div style={{ marginLeft:'auto', display:'flex', alignItems:'center', gap:8 }}>
          <span style={{ fontSize:12, color:textM, fontFamily:"'Source Sans 3',Arial,sans-serif" }}>{(questionIndex%bank.length)+1} / {total}</span>
          <button onClick={toggleBookmark} style={{ background:'none',border:'none',cursor:'pointer',padding:'2px',fontSize:17,color:isBookmarked?'#C9A84C':textM,lineHeight:1,transition:'color 150ms,transform 150ms' }}
            onMouseEnter={e=>e.currentTarget.style.transform='scale(1.2)'}
            onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}
            title={isBookmarked?'Remove bookmark':'Bookmark'}>
            {isBookmarked?'★':'☆'}
          </button>
        </div>
      </div>

      {/* ── STIMULUS ── */}
      {q.stimulus && (
        <div style={{ background:bgAlt,borderLeft:'4px solid #C9A84C',borderRadius:'0 8px 8px 0',padding:'12px 16px',marginBottom:16 }}>
          {q.stimulus.source && (
            <div style={{ fontFamily:"'Source Sans 3',Arial,sans-serif",fontSize:10,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.08em',color:'#C9A84C',marginBottom:6 }}>
              {q.stimulus.type==='data'?'Data':q.stimulus.type==='image'||q.stimulus.type==='chart'?'Chart':'Excerpt'} — {q.stimulus.source}
            </div>
          )}
          {q.stimulus.type==='chart' ? (
            <div style={{background:'#fff',borderRadius:6,padding:'10px 6px 4px',overflow:'hidden',marginTop:2}} dangerouslySetInnerHTML={{__html:q.stimulus.svg}}/>
          ) : q.stimulus.type==='image' ? (
            <div style={{background:'#fff',borderRadius:6,padding:'8px',overflow:'hidden',marginTop:2,textAlign:'center'}}>
              <img src={q.stimulus.src} alt={q.stimulus.source||'Chart stimulus'} style={{maxWidth:'100%',height:'auto',borderRadius:4,display:'block',margin:'0 auto'}}/>
            </div>
          ) : q.stimulus.type==='data' ? (
            <pre style={{ fontFamily:"'JetBrains Mono',monospace",fontSize:12,color:textS,lineHeight:1.7,whiteSpace:'pre-wrap',margin:0 }}>{q.stimulus.text}</pre>
          ) : (
            <p style={{ fontFamily:"'Playfair Display',Georgia,serif",fontSize:13.5,fontStyle:'italic',color:textS,lineHeight:1.65,margin:0 }}>"{q.stimulus.text}"</p>
          )}
        </div>
      )}

      {/* ── HINT ── */}
      {q.hint && !submitted && (
        <div style={{ marginBottom:12 }}>
          {!showHint ? (
            <button onClick={()=>setShowHint(true)}
              style={{ fontFamily:"'Source Sans 3',Arial,sans-serif",fontSize:12,fontWeight:600,color:'#C9A84C',background:'none',border:'1px solid #C9A84C44',borderRadius:6,padding:'5px 12px',cursor:'pointer',display:'flex',alignItems:'center',gap:5 }}>
              💡 Show Hint
            </button>
          ) : (
            <div className={animOn?'qc-hint-pop':''} style={{ background:d?'#1E2D0F':'#FFFBEB',border:'1px solid #C9A84C55',borderRadius:8,padding:'10px 14px',display:'flex',gap:8,alignItems:'flex-start' }}>
              <span style={{ fontSize:14 }}>💡</span>
              <p style={{ fontFamily:"'Source Sans 3',Arial,sans-serif",fontSize:13,color:d?'#E8D48A':'#92400E',lineHeight:1.5,margin:0 }}>{q.hint}</p>
            </div>
          )}
        </div>
      )}

      {/* ── STEM ── */}
      <p style={{ fontSize:15,fontWeight:500,color:textP,lineHeight:1.68,marginBottom:18,fontFamily:"'Source Sans 3',Arial,sans-serif" }}>{q.stem}</p>

      {/* ── CHOICES ── */}
      <div style={{ marginBottom:16 }}>
        {q.choices.map((choice, i) => {
          const ltr = getLetterBg(i);
          const isShaking = shakeChoice===i && animOn;
          return (
            <div key={i}
              className={`${isShaking?'qc-shake':''} ${!submitted?'qc-choice-hover':''}`}
              style={{ ...getChoiceStyle(i), position:'relative' }}
              onClick={() => handleSelect(i)}>
              <div style={{ minWidth:24,height:24,borderRadius:'50%',border:`1.5px solid ${ltr.bord}`,background:ltr.bg,display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,fontWeight:700,color:ltr.color,flexShrink:0,fontFamily:"'Source Sans 3',Arial,sans-serif",transition:'all 200ms' }}>
                {choiceLetter(i)}
              </div>
              <div style={{ fontSize:13.5,color:textP,lineHeight:1.48,paddingTop:2,fontFamily:"'Source Sans 3',Arial,sans-serif",flex:1 }}>
                {choice}
                {/* Wrong note inline */}
                {submitted && i!==q.correct && revealedWrong && q.wrongNotes?.[i] && (
                  <div className={animOn?'qc-fadeIn':''} style={{ marginTop:6,fontSize:12,color:d?'#F1A89E':'#C0392B',lineHeight:1.5,borderTop:`1px solid ${d?'#3E1515':'#F1A89E'}`,paddingTop:5 }}>
                    ✗ {q.wrongNotes[i]}
                  </div>
                )}
              </div>
              {submitted && i===q.correct && (
                <svg style={{ marginLeft:'auto',flexShrink:0 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2A7A4B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              )}
              {submitted && i===selected && i!==q.correct && (
                <svg style={{ marginLeft:'auto',flexShrink:0 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0392B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              )}
            </div>
          );
        })}
      </div>

      {/* ── RESULT BANNER ── */}
      {submitted && (
        <div ref={bannerRef} className={animOn?'qc-banner':''} style={{ padding:'11px 16px',borderRadius:8,marginBottom:14,fontSize:14,fontFamily:"'Source Sans 3',Arial,sans-serif",fontWeight:600,
          background:isCorrect?(d?'#0F2E1A':'#EAF5EE'):(d?'#2E0F0F':'#FDECEA'),
          color:isCorrect?'#2A7A4B':'#C0392B',
          border:`1.5px solid ${isCorrect?'#A8D5B9':'#F1A89E'}`,
          display:'flex',alignItems:'center',gap:10 }}>
          <span style={{ fontSize:20 }}>{isCorrect?'✓':'✗'}</span>
          <div>
            <div>{isCorrect?'Correct!':'Incorrect.'} {isCorrect?'Excellent work.': `The correct answer is (${choiceLetter(q.correct)}).`}</div>
            {!isCorrect && q.wrongNotes && !revealedWrong && (
              <button onClick={()=>setRevealedWrong(true)} style={{ marginTop:4,fontFamily:"'Source Sans 3',Arial,sans-serif",fontSize:11.5,fontWeight:600,background:'none',border:'none',cursor:'pointer',color:isCorrect?'#2A7A4B':'#C0392B',textDecoration:'underline',padding:0 }}>
                Show why each answer is wrong →
              </button>
            )}
          </div>
        </div>
      )}

      {/* ── EXPLANATION LOADING ── */}
      {loadingExpl && (
        <div style={{ display:'flex',alignItems:'center',gap:10,padding:'14px 16px',background:bgAlt,borderRadius:8,marginBottom:14,borderLeft:'4px solid #1B2A4A' }}>
          <div className="qc-spin" style={{ width:16,height:16,border:`2px solid ${d?'#374B60':'#DDE1E9'}`,borderTop:'2px solid #1B2A4A',borderRadius:'50%',flexShrink:0 }}/>
          <span style={{ fontFamily:"'Source Sans 3',Arial,sans-serif",fontSize:13,color:textM }}>Loading explanation…</span>
        </div>
      )}

      {/* ── EXPLANATION ── */}
      {showExplanation && !loadingExpl && (
        <div ref={explRef} className={animOn?'qc-fadeIn':''} style={{ background:bgAlt,borderRadius:8,padding:'14px 16px',marginBottom:16,borderLeft:'4px solid #1B2A4A' }}>
          <div style={{ fontSize:10,fontWeight:700,letterSpacing:'0.08em',textTransform:'uppercase',color:'#B22234',marginBottom:6,fontFamily:"'Source Sans 3',Arial,sans-serif" }}>Explanation</div>
          <p style={{ fontSize:13.5,color:textS,lineHeight:1.68,fontFamily:"'Source Sans 3',Arial,sans-serif" }}>{q.explanation}</p>
          {q.scotus && (
            <div style={{ marginTop:10,display:'flex',alignItems:'center',gap:8 }}>
              <span style={{ fontSize:10,fontWeight:700,background:'#2D5D8B',color:'#fff',padding:'2px 7px',borderRadius:4,fontFamily:"'Source Sans 3',Arial,sans-serif" }}>SCOTUS</span>
              <em style={{ fontFamily:"'Playfair Display',Georgia,serif",color:d?'#8BAED4':'#1B2A4A' }}>{q.scotus.name}</em>
              <span style={{ color:textM,fontSize:12 }}> · {q.scotus.year}</span>
            </div>
          )}
          {q.comparedCase && (
            <div style={{ marginTop:8,padding:'8px 12px',background:bgInfo,borderRadius:6,fontSize:12.5,color:d?'#8BAED4':'#2D5D8B',fontFamily:"'Source Sans 3',Arial,sans-serif" }}>
              <strong>Compare to:</strong> <em>{q.comparedCase.name}</em> — {q.comparedCase.note}
            </div>
          )}
        </div>
      )}

      {/* ── ACTIONS ── */}
      <div style={{ display:'flex',gap:8,marginTop:4,flexWrap:'wrap' }}>
        {!submitted ? (
          <>
            <button style={{ fontFamily:"'Source Sans 3',Arial,sans-serif",fontSize:13.5,fontWeight:700,padding:'9px 22px',borderRadius:7,border:'none',cursor:'pointer',background:'#1B2A4A',color:'#fff',opacity:selected===null?0.4:1,transition:'opacity 150ms,transform 100ms',transform:'scale(1)' }}
              onMouseDown={e=>e.currentTarget.style.transform='scale(0.97)'}
              onMouseUp={e=>e.currentTarget.style.transform='scale(1)'}
              onClick={handleSubmit} disabled={selected===null}>Submit Answer</button>
            <button style={{ fontFamily:"'Source Sans 3',Arial,sans-serif",fontSize:13.5,fontWeight:600,padding:'9px 18px',borderRadius:7,cursor:'pointer',background:'transparent',color:'#2D5D8B',border:'1.5px solid #2D5D8B' }}
              onClick={handleNext}>Skip →</button>
          </>
        ) : (
          <>
            <button style={{ fontFamily:"'Source Sans 3',Arial,sans-serif",fontSize:13.5,fontWeight:700,padding:'9px 22px',borderRadius:7,border:'none',cursor:'pointer',background:'#1B2A4A',color:'#fff',transition:'transform 100ms' }}
              onMouseDown={e=>e.currentTarget.style.transform='scale(0.97)'}
              onMouseUp={e=>e.currentTarget.style.transform='scale(1)'}
              onClick={handleNext}>Next Question →</button>
            {!showExplanation && !loadingExpl && (
              <button style={{ fontFamily:"'Source Sans 3',Arial,sans-serif",fontSize:13,fontWeight:600,padding:'9px 16px',borderRadius:7,cursor:'pointer',background:'transparent',color:'#2D5D8B',border:'1.5px solid #2D5D8B' }}
                onClick={()=>{ setLoadingExpl(true); setTimeout(()=>{setLoadingExpl(false);setShowExplanation(true);},700); }}>
                Show Explanation
              </button>
            )}
            {q.wrongNotes && !revealedWrong && (
              <button style={{ fontFamily:"'Source Sans 3',Arial,sans-serif",fontSize:13,fontWeight:600,padding:'9px 16px',borderRadius:7,cursor:'pointer',background:'transparent',color:'#748092',border:'1.5px solid #BFC6D0' }}
                onClick={()=>setRevealedWrong(true)}>
                Why Each Answer →
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

Object.assign(window, { QuestionCard, QUESTIONS, getBookmarks, saveBookmarks, SoundEngine });
