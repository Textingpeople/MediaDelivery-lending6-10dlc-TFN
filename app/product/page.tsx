'use client';

import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { careerStages } from '../components/stages';
import { EDUCATIONAL_DISCLAIMER } from '../components/SmsCopy';
import { features, privacyPoints } from './data';

const iconBox = { background: 'rgba(42,16,24,0.08)', color: 'var(--forest)' };

export default function ProductPage() {
  return (
    <div style={{ background: 'var(--ivory)', color: 'var(--charcoal)' }}>
      <Nav />

      {/* ── HERO ── */}
      <section className="relative pt-48 pb-28 px-6" style={{ background: 'var(--forest)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono-label mb-8" style={{ color: '#E0A040', fontSize: '0.65rem' }}>
            The Product
          </p>
          <h1 className="headline-xl text-white mb-8">
            A path for
            <br />
            <em className="italic-accent">every career stage.</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '540px', margin: '0 auto 2.5rem' }}>
            Luminary Path Financial pairs step-by-step paths with decision guides, checklists and calculators, so employees can work through money decisions on their own schedule.
          </p>
          <Link href="/signup" className="btn-primary">
            Employee Sign Up
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── CORE FEATURES ── */}
      <section className="py-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
              What&apos;s Inside
            </p>
            <h2 className="headline-lg" style={{ color: 'var(--forest)' }}>
              Self-serve tools
              <br />
              <em className="italic-accent">that build on each other.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map(feature => (
              <div key={feature.title} className="card-feature p-8">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5" style={iconBox}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="font-serif mb-3" style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--forest)' }}>
                  {feature.title}
                </h3>
                <p style={{ color: 'rgba(42,16,24,0.8)', fontSize: '0.9rem', lineHeight: 1.75 }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STAGES ── */}
      <section className="py-28 px-6" style={{ background: 'var(--white)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
              Career Stages
            </p>
            <h2 className="headline-lg" style={{ color: 'var(--forest)' }}>
              Pick the stage
              <br />
              <em className="italic-accent">that fits you today.</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {careerStages.map(stage => (
              <div key={stage.name} className="rounded-2xl p-8" style={{ background: 'var(--ivory)', border: '1px solid rgba(42,16,24,0.12)' }}>
                <p className="font-mono-label mb-3" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>{stage.tag}</p>
                <h3 className="font-serif mb-3" style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--forest)' }}>{stage.name}</h3>
                <ul className="space-y-2">
                  {stage.items.map(item => (
                    <li key={item} className="flex items-start gap-2" style={{ fontSize: '0.88rem', lineHeight: 1.5 }}>
                      <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: 'var(--olive)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRIVACY SECTION ── */}
      <section className="py-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
                Privacy Controls
              </p>
              <h2 className="headline-lg mb-6" style={{ color: 'var(--forest)' }}>
                Your entries
                <br />
                <em className="italic-accent">stay yours.</em>
              </h2>
              <p style={{ color: 'rgba(42,16,24,0.8)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Luminary Path Financial is self-serve and self-entered. You decide what to type in, and your employer never sees it individually.
              </p>
              <div className="space-y-5">
                {privacyPoints.map(item => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(138,32,64,0.15)' }}
                    >
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="var(--olive)" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, color: 'var(--forest)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>{item.title}</p>
                      <p style={{ color: 'rgba(42,16,24,0.8)', fontSize: '0.85rem' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-8" style={{ background: 'var(--white)', border: '1px solid rgba(42,16,24,0.12)' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: 'var(--forest)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontWeight: 600, color: 'var(--forest)', fontSize: '0.9rem' }}>Who sees what</p>
                  <p className="font-mono-label" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Privacy controls</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Path progress', who: 'Only you' },
                  { label: 'Calculator entries', who: 'Only you' },
                  { label: 'Usage and path completion', who: 'Employer, anonymous totals only' },
                ].map(row => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-4 p-3 rounded-xl"
                    style={{ background: 'rgba(42,16,24,0.04)', border: '1px solid rgba(42,16,24,0.1)' }}
                  >
                    <span style={{ fontSize: '0.85rem', color: 'var(--charcoal)', fontWeight: 500 }}>{row.label}</span>
                    <span className="font-mono-label text-right" style={{ color: 'var(--olive)', fontSize: '0.55rem' }}>{row.who}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-6" style={{ background: 'var(--forest)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="headline-lg text-white mb-8">
            Ready to start
            <br />
            <em className="italic-accent">your path?</em>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/signup" className="btn-primary">
              Employee Sign Up →
            </Link>
            <Link href="/for-employers" className="btn-outline">
              For Employers
            </Link>
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER ── */}
      <section className="px-6 py-10" style={{ background: 'var(--ivory)' }}>
        <p className="max-w-3xl mx-auto text-center" style={{ color: 'rgba(42,16,24,0.8)', fontSize: '0.82rem', lineHeight: 1.7 }}>
          {EDUCATIONAL_DISCLAIMER}
        </p>
      </section>

      <Footer />
    </div>
  );
}
