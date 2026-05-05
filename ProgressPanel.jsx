// ProgressPanel.jsx — Student progress overview

const UNIT_PROGRESS = [
  { id: 1, title: "Foundations of Democracy", total: 35, done: 35, correct: 28, color: '#2A7A4B' },
  { id: 2, title: "Interactions Among Branches", total: 50, done: 32, correct: 24, color: '#2D5D8B' },
  { id: 3, title: "Civil Liberties & Rights", total: 45, done: 18, correct: 15, color: '#D97706' },
  { id: 4, title: "Political Ideologies", total: 35, done: 0, correct: 0, color: '#BFC6D0' },
  { id: 5, title: "Political Participation", total: 40, done: 0, correct: 0, color: '#BFC6D0' },
];

const ProgressPanel = ({ compact = false }) => {
  const totalDone = UNIT_PROGRESS.reduce((a, u) => a + u.done, 0);
  const totalCorrect = UNIT_PROGRESS.reduce((a, u) => a + u.correct, 0);
  const totalQ = UNIT_PROGRESS.reduce((a, u) => a + u.total, 0);
  const accuracy = totalDone > 0 ? Math.round((totalCorrect / totalDone) * 100) : 0;

  return (
    <div style={progStyles.panel}>
      {/* Summary row */}
      <div style={progStyles.summaryRow}>
        <div style={progStyles.summaryCard}>
          <div style={progStyles.bigNum}>{totalDone}</div>
          <div style={progStyles.bigLabel}>Questions Attempted</div>
        </div>
        <div style={progStyles.summaryCard}>
          <div style={{ ...progStyles.bigNum, color: '#2A7A4B' }}>{accuracy}%</div>
          <div style={progStyles.bigLabel}>Accuracy</div>
        </div>
        <div style={progStyles.summaryCard}>
          <div style={{ ...progStyles.bigNum, color: '#C9A84C' }}>{Math.round((totalDone / totalQ) * 100)}%</div>
          <div style={progStyles.bigLabel}>Course Complete</div>
        </div>
        <div style={progStyles.summaryCard}>
          <div style={progStyles.bigNum}>12</div>
          <div style={progStyles.bigLabel}>Day Streak 🔥</div>
        </div>
      </div>

      {/* Unit breakdown */}
      <div style={progStyles.sectionLabel}>Unit Breakdown</div>
      {UNIT_PROGRESS.map(unit => {
        const pct = Math.round((unit.done / unit.total) * 100);
        const acc = unit.done > 0 ? Math.round((unit.correct / unit.done) * 100) : null;
        return (
          <div key={unit.id} style={progStyles.unitRow}>
            <div style={{ ...progStyles.unitNum, background: unit.done === unit.total ? '#2A7A4B' : unit.done > 0 ? '#1B2A4A' : '#EEF0F4', color: unit.done > 0 ? '#fff' : '#9BA5B2' }}>{unit.id}</div>
            <div style={{ flex: 1 }}>
              <div style={progStyles.unitMeta}>
                <span style={progStyles.unitName}>Unit {unit.id}: {unit.title}</span>
                <span style={{ ...progStyles.unitPct, color: acc ? (acc >= 70 ? '#2A7A4B' : '#D97706') : '#9BA5B2' }}>
                  {acc !== null ? `${acc}% accuracy` : 'Not started'}
                </span>
              </div>
              <div style={progStyles.barWrap}>
                <div style={{ ...progStyles.barFill, width: `${pct}%`, background: unit.color }} />
              </div>
              <div style={progStyles.unitSub}>{unit.done} / {unit.total} questions</div>
            </div>
          </div>
        );
      })}

      {/* Weak spots */}
      <div style={progStyles.sectionLabel}>Needs Review</div>
      <div style={progStyles.tagRow}>
        {["2.12 Bureaucracy", "3.7 Selective Incorporation", "2.3 Redistricting", "1.8 Federalism Cases"].map(t => (
          <span key={t} style={progStyles.reviewTag}>{t}</span>
        ))}
      </div>
    </div>
  );
};

const progStyles = {
  panel: { background: '#fff', borderRadius: 10, padding: '22px 24px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' },
  summaryRow: { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, marginBottom: 24 },
  summaryCard: { background: '#F8F9FB', borderRadius: 8, padding: '14px 16px', border: '1px solid #EEF0F4', textAlign: 'center' },
  bigNum: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.8rem', fontWeight: 700, color: '#1A2030', lineHeight: 1 },
  bigLabel: { fontFamily: "'Source Sans 3', Arial, sans-serif", fontSize: 11, color: '#9BA5B2', marginTop: 4 },
  sectionLabel: { fontFamily: "'Source Sans 3', Arial, sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#BFC6D0', marginBottom: 12, marginTop: 8 },
  unitRow: { display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 14 },
  unitNum: { width: 26, height: 26, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0, fontFamily: "'Source Sans 3', Arial, sans-serif", marginTop: 2 },
  unitMeta: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 5 },
  unitName: { fontFamily: "'Source Sans 3', Arial, sans-serif", fontSize: 13, fontWeight: 600, color: '#1A2030' },
  unitPct: { fontFamily: "'Source Sans 3', Arial, sans-serif", fontSize: 11, fontWeight: 600 },
  barWrap: { background: '#EEF0F4', borderRadius: 9999, height: 7, overflow: 'hidden', marginBottom: 3 },
  barFill: { height: '100%', borderRadius: 9999, transition: 'width 600ms ease' },
  unitSub: { fontFamily: "'Source Sans 3', Arial, sans-serif", fontSize: 10.5, color: '#9BA5B2' },
  tagRow: { display: 'flex', gap: 7, flexWrap: 'wrap' },
  reviewTag: { fontFamily: "'Source Sans 3', Arial, sans-serif", fontSize: 11.5, fontWeight: 500, padding: '4px 10px', borderRadius: 9999, background: '#FEF3C7', color: '#D97706', border: '1px solid #FCD34D' },
};

Object.assign(window, { ProgressPanel, UNIT_PROGRESS });
