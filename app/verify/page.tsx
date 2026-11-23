'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';

function Spinner({ size = 20, color = 'var(--forest)' }: { size?: number; color?: string }) {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        style={{ animation: 'verify-spin 0.8s linear infinite' }}
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" opacity="0.25" />
        <path d="M21 12a9 9 0 0 0-9-9" />
      </svg>
      <style>{`@keyframes verify-spin { to { transform: rotate(360deg); } }`}</style>
    </>
  );
}

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-6 py-12"
      style={{ background: 'var(--ivory)', color: 'var(--charcoal)' }}
    >
      {children}
    </main>
  );
}

function VerifyContent() {
  const searchParams = useSearchParams();
  const phone = searchParams.get('phone');
  const destination = searchParams.get('destination');
  const [phoneValue, setPhoneValue] = useState(phone ?? '');
  const [focused, setFocused] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const [error, setError] = useState('');

  if (!phone) {
    return (
      <PageShell>
        <p style={{ color: 'var(--forest)', fontSize: '1rem', textAlign: 'center' }}>
          Invalid verification link. Phone number is missing.
        </p>
      </PageShell>
    );
  }

  const handleVerify = () => {
    if (!destination) {
      setError('Invalid verification link. Destination is missing.');
      return;
    }

    let url: URL;
    try {
      url = new URL(destination);
    } catch {
      setError('Invalid verification link. Destination is missing.');
      return;
    }
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      setError('Invalid verification link. Destination is missing.');
      return;
    }

    setError('');
    setRedirecting(true);

    // Pass every other query param through, except phone (and destination itself).
    searchParams.forEach((value, key) => {
      if (key !== 'phone' && key !== 'destination') {
        url.searchParams.set(key, value);
      }
    });
    window.location.href = url.toString();
  };

  return (
    <PageShell>
      <div
        className="w-full"
        style={{
          maxWidth: '420px',
          background: '#FFFFFF',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 8px 40px rgba(42, 16, 24, 0.12)',
        }}
      >
        <div style={{ height: '6px', background: 'var(--olive)' }} />

        <div style={{ padding: '2rem' }}>
          <div className="flex justify-center mb-5">
            <div
              className="flex items-center justify-center"
              style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--forest)' }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <h1
            className="text-center"
            style={{ color: 'var(--forest)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}
          >
            Validate your number.
          </h1>

          <label
            htmlFor="verify-phone"
            className="font-mono-label block mb-2"
            style={{ color: 'var(--forest)', fontSize: '0.65rem' }}
          >
            Phone number
          </label>
          <input
            id="verify-phone"
            type="tel"
            value={phoneValue}
            onChange={e => setPhoneValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="w-full px-4 py-3 text-sm"
            style={{
              borderRadius: '10px',
              border: `1.5px solid ${focused ? 'var(--olive)' : 'rgba(42, 16, 24, 0.2)'}`,
              color: 'var(--charcoal)',
              outline: 'none',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '1.25rem',
            }}
          />

          {error && (
            <p role="alert" style={{ color: '#dc2626', fontSize: '0.8rem', marginBottom: '1rem' }}>
              {error}
            </p>
          )}

          <button
            type="button"
            onClick={handleVerify}
            disabled={redirecting}
            className="w-full flex items-center justify-center gap-2"
            style={{
              background: 'var(--forest)',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '0.95rem',
              padding: '0.85rem 1rem',
              borderRadius: '10px',
              border: 'none',
              cursor: redirecting ? 'not-allowed' : 'pointer',
              opacity: redirecting ? 0.85 : 1,
            }}
          >
            {redirecting ? (
              <>
                <Spinner size={18} color="#FFFFFF" />
                Redirecting...
              </>
            ) : (
              'Verify Number'
            )}
          </button>
        </div>

        <p
          className="text-center"
          style={{ color: '#6B7280', fontSize: '0.75rem', padding: '0 2rem 1.5rem' }}
        >
          Secured by Luminary Path Financial
        </p>
      </div>
    </PageShell>
  );
}

export default function VerifyPage() {
  return (
    <Suspense
      fallback={
        <PageShell>
          <Spinner size={32} />
        </PageShell>
      }
    >
      <VerifyContent />
    </Suspense>
  );
}
