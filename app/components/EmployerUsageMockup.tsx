export default function EmployerUsageMockup() {
  return (
    <div
      className="rounded-2xl p-6"
      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)' }}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="font-mono-label" style={{ color: '#E0A040', fontSize: '0.6rem' }}>Employer view</p>
          <p style={{ color: '#FFFFFF', fontWeight: 600, marginTop: '0.25rem' }}>Anonymous usage overview</p>
        </div>
        <div
          className="px-3 py-1 rounded-full font-mono-label"
          style={{ background: 'rgba(224,160,64,0.2)', color: '#E0A040', fontSize: '0.6rem' }}
        >
          Aggregate only
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {['Paths started', 'Path completion', 'Guides opened', 'Calculators used'].map(label => (
          <div key={label} className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <p className="font-mono-label mb-2" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.55rem' }}>
              {label}
            </p>
            <p style={{ color: '#FFFFFF', fontSize: '0.9rem', fontWeight: 600 }}>Anonymous totals</p>
          </div>
        ))}
      </div>

      <div
        className="rounded-xl p-4 flex items-start gap-3"
        style={{ background: 'rgba(224,160,64,0.12)', border: '1px solid rgba(224,160,64,0.35)' }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E0A040" strokeWidth="2" className="flex-shrink-0 mt-0.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.75rem', lineHeight: 1.5 }}>
          <strong style={{ color: '#FFFFFF' }}>Privacy protected:</strong> employers never see individual entries, only anonymous usage.
        </p>
      </div>
    </div>
  );
}
