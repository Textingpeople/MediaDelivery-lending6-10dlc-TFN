// ─── App UI mockups: path and guide items only, self-entered sample numbers ───

const checkIcon = (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
    <path d="M5 13l4 4L19 7" />
  </svg>
);

const reminderBox = (
  <div
    className="rounded-xl p-3"
    style={{ background: 'rgba(224,160,64,0.18)', border: '1px solid rgba(224,160,64,0.5)' }}
  >
    <p style={{ fontSize: '0.72rem', color: 'var(--forest)', lineHeight: 1.5 }}>
      <strong>Reminder:</strong> finish your Job-Change Checklist
    </p>
  </div>
);

export function PathMockup() {
  const steps = [
    { label: 'Guide: Got a raise? What to review', done: true, locked: false },
    { label: 'Calculator: Take-home pay change after a raise', done: true, locked: false },
    { label: 'Checklist: Changing jobs? Your money checklist', done: false, locked: false },
    { label: 'Calculator: 401(k) contribution change', done: false, locked: false },
    { label: 'Calculator: Emergency fund target', done: false, locked: true },
  ];

  return (
    <div className="app-card p-6 w-full max-w-sm mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="font-mono-label" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Your path</p>
          <p style={{ fontWeight: 600, color: 'var(--forest)', fontSize: '1rem' }}>Growing Career — Step 2 of 5</p>
        </div>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold"
          style={{ background: 'var(--forest)', color: '#FFFFFF' }}
        >
          J
        </div>
      </div>

      <div className="rounded-full h-1.5 mb-5" style={{ background: 'rgba(42,16,24,0.1)' }}>
        <div className="h-1.5 rounded-full" style={{ width: '40%', background: 'var(--olive)' }} />
      </div>

      <div className="space-y-3 mb-5">
        {steps.map(s => (
          <div key={s.label} className="flex items-start gap-3">
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{
                background: s.done ? 'var(--olive)' : 'transparent',
                border: s.done ? 'none' : '1.5px solid rgba(42,16,24,0.3)',
              }}
            >
              {s.done && checkIcon}
            </div>
            <p style={{ fontSize: '0.78rem', color: s.locked ? 'rgba(42,16,24,0.6)' : 'var(--charcoal)', fontWeight: 500, lineHeight: 1.5 }}>
              {s.label}
              {s.locked && (
                <span className="font-mono-label" style={{ marginLeft: '0.5rem', fontSize: '0.5rem', color: 'var(--olive)' }}>
                  Unlocks next
                </span>
              )}
            </p>
          </div>
        ))}
      </div>

      {reminderBox}
    </div>
  );
}

export function GuideMockup() {
  return (
    <div className="app-card p-5 w-full max-w-sm mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="mb-4 pb-4" style={{ borderBottom: '1px solid rgba(42,16,24,0.1)' }}>
        <p className="font-mono-label" style={{ color: 'var(--olive)', fontSize: '0.55rem' }}>Guide</p>
        <p style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--forest)' }}>Got a raise? What to review</p>
      </div>

      <div className="space-y-2 mb-4">
        {[
          'Check your new pay stub for the updated amount',
          'Review your 401(k) contribution setting',
          'Revisit your starter budget and emergency fund goal',
        ].map(item => (
          <div key={item} className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: 'var(--olive)' }} />
            <p style={{ fontSize: '0.75rem', color: 'var(--charcoal)', lineHeight: 1.5 }}>{item}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl p-4 mb-4" style={{ background: 'var(--forest)', color: '#FFFFFF' }}>
        <p className="font-mono-label mb-3" style={{ color: '#E0A040', fontSize: '0.55rem' }}>
          Calculator: 401(k) contribution change
        </p>
        <div className="flex justify-between mb-1" style={{ fontSize: '0.75rem' }}>
          <span style={{ color: 'rgba(255,255,255,0.85)' }}>Your entry: current contribution</span>
          <span style={{ fontWeight: 600 }}>5%</span>
        </div>
        <div className="flex justify-between" style={{ fontSize: '0.75rem' }}>
          <span style={{ color: 'rgba(255,255,255,0.85)' }}>Your entry: new contribution</span>
          <span style={{ fontWeight: 600 }}>7%</span>
        </div>
        <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.75)', marginTop: '0.75rem' }}>
          Sample numbers you type in. Entries stay private to you.
        </p>
      </div>

      {reminderBox}
    </div>
  );
}
