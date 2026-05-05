const StimulusModal = ({ stimulusId, onClose, dark }) => {
  const stimulusMap = {
    // Unit 1
    1000: { file: 'stimulus_01_questions.html', unit: 'Unit 1', topic: '1.1' },
    1001: { file: 'stimulus_02_questions.html', unit: 'Unit 1', topic: '1.9' },
    1002: { file: 'stimulus_03_questions.html', unit: 'Unit 1', topic: '1.6' },
    // Unit 2
    1003: { file: 'stimulus_04_questions.html', unit: 'Unit 2', topic: '2.4' },
    1004: { file: 'stimulus_05_questions.html', unit: 'Unit 2', topic: '2.3' },
    1005: { file: 'stimulus_06_questions.html', unit: 'Unit 2', topic: '2.5' },
    1006: { file: 'stimulus_07_questions.html', unit: 'Unit 2', topic: '2.9' },
    1007: { file: 'stimulus_08_questions.html', unit: 'Unit 2', topic: '2.12' },
    // Unit 3
    1008: { file: 'stimulus_09_questions.html', unit: 'Unit 3', topic: '3.6' },
    1009: { file: 'stimulus_10_questions.html', unit: 'Unit 3', topic: '3.2-3.4' },
    1010: { file: 'stimulus_11_questions.html', unit: 'Unit 3', topic: '3.5' },
    1011: { file: 'stimulus_12_questions.html', unit: 'Unit 3', topic: '3.1' },
    1012: { file: 'stimulus_13_questions.html', unit: 'Unit 3', topic: '3.4' },
    1013: { file: 'stimulus_14_questions.html', unit: 'Unit 3', topic: '3.3' },
    1014: { file: 'stimulus_15_questions.html', unit: 'Unit 3', topic: '3.1' },
    1015: { file: 'stimulus_16_questions.html', unit: 'Unit 3', topic: '3.2' },
    // Unit 4
    1016: { file: 'stimulus_17_questions.html', unit: 'Unit 4', topic: '4.1' },
    1017: { file: 'stimulus_18_questions.html', unit: 'Unit 4', topic: '4.2' },
    1018: { file: 'stimulus_19_questions.html', unit: 'Unit 4', topic: '4.3' },
    1019: { file: 'stimulus_20_questions.html', unit: 'Unit 4', topic: '4.5' },
    // Unit 5
    1020: { file: 'stimulus_21_questions.html', unit: 'Unit 5', topic: '5.1' },
    1021: { file: 'stimulus_22_questions.html', unit: 'Unit 5', topic: '5.10' },
    1022: { file: 'stimulus_23_questions.html', unit: 'Unit 5', topic: '5.5' },
  };

  const stimulus = stimulusMap[stimulusId];
  if (!stimulus) return null;

  const bgModal = dark ? '#0D1621' : '#FFFFFF';
  const textColor = dark ? '#FFFFFF' : '#1a1a18';

  return (
    <div onClick={onClose} style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center',
      justifyContent: 'center', zIndex: 9999, padding: '20px'
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: bgModal, borderRadius: '12px', maxWidth: '900px',
        width: '100%', maxHeight: '90vh', overflow: 'auto', boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <div style={{
          position: 'sticky', top: 0, background: bgModal,
          borderBottom: `1px solid ${dark ? '#3B5578' : '#dddbd5'}`,
          padding: '16px 24px', display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', zIndex: 100
        }}>
          <div style={{ color: textColor, fontWeight: 600 }}>Stimulus Question</div>
          <button onClick={onClose} style={{
            background: 'transparent', border: 'none', fontSize: '24px',
            cursor: 'pointer', color: textColor, padding: 0, width: 32, height: 32
          }}>×</button>
        </div>
        <iframe
          src={stimulus.file}
          style={{
            width: '100%', height: 'calc(90vh - 56px)', border: 'none',
            background: dark ? '#0D1621' : '#F5F4F0'
          }}
          title={`Stimulus ${stimulusId}`}
        />
      </div>
    </div>
  );
};

Object.assign(window, { StimulusModal });
