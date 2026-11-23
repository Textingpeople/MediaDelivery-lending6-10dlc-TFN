'use client';

import { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'Product', href: '/product' },
  { label: 'For Employers', href: '/for-employers' },
  { label: 'Contact', href: '/contact' },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 pt-4">
      <nav
        className="w-full max-w-6xl mx-auto px-6 py-4 flex items-center justify-between"
        style={{
          background: 'rgba(26,10,15,0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #8A2040 0%, #E0A040 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: '0.9rem', color: 'white', lineHeight: 1 }}>
              L
            </span>
          </div>
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '1rem',
              color: 'white',
              letterSpacing: '-0.01em',
            }}
          >
            Luminary Path Financial
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: '0.875rem',
                fontWeight: 500,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#E0A040'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <Link
            href="/signup"
            className="hidden md:inline-flex"
            style={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: '0.875rem',
              fontWeight: 500,
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.25)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
          >
            Employee Sign Up
          </Link>
          <Link
            href="/talk-to-sales"
            className="hidden md:inline-flex items-center gap-2"
            style={{
              background: '#E0A040',
              color: '#1A0A0F',
              fontSize: '0.875rem',
              fontWeight: 600,
              padding: '0.5rem 1.25rem',
              borderRadius: '8px',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
          >
            Talk to Sales
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ background: 'rgba(255,255,255,0.1)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="absolute top-20 left-4 right-4 rounded-2xl p-6 md:hidden"
          style={{
            background: 'rgba(26,10,15,0.98)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {[...navItems, { label: 'Employee Sign Up', href: '/signup' }].map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 border-b"
              style={{
                color: 'rgba(255,255,255,0.85)',
                borderColor: 'rgba(255,255,255,0.08)',
                fontSize: '0.9rem',
              }}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/talk-to-sales"
            className="block mt-4 text-center py-3 rounded-xl"
            style={{ background: '#E0A040', color: '#1A0A0F', fontWeight: 600 }}
            onClick={() => setMobileOpen(false)}
          >
            Talk to Sales →
          </Link>
        </div>
      )}
    </header>
  );
}

