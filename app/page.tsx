'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { PathMockup, GuideMockup } from './components/Mockups';
import EmployerUsageMockup from './components/EmployerUsageMockup';
import { careerStages } from './components/stages';
import { NOT_A_BANK_LINE } from './components/SmsCopy';

const arrow = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const howItWorks = [
  {
    num: '01',
    title: 'Choose your stage',
    desc: 'Pick the career stage that fits you today: First Job, Growing Career, Leadership & Peak Earning, or Pre-Retirement.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 21V4" />
        <path d="M4 4h12l-2 4 2 4H4" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Follow your path',
    desc: 'Your stage comes with a step-by-step path of decision guides, checklists and calculators. Each completed step unlocks the next.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="6" cy="19" r="2" />
        <circle cx="18" cy="5" r="2" />
        <path d="M8 19h6a4 4 0 0 0 0-8h-4a4 4 0 0 1 0-8h6" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Use the tools',
    desc: 'Work through a guide, tick off a checklist, or type your own numbers into a calculator. Everything you enter is private to you.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M8 6h8M8 11h2M12 11h2M8 15h2M12 15h2" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Get reminders',
    desc: 'Automated reminders point you to your next step, so you can pick your path back up whenever it suits you.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.7 21a2 2 0 0 1-3.4 0" />
      </svg>
    ),
  },
];

const pillars = [
  {
    title: 'Private by design',
    desc: 'Path progress and calculator entries stay with the employee. Employers see anonymous totals only.',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    title: 'Self-serve, at your pace',
    desc: 'Guides, checklists and calculators are there whenever you want them. No appointments, no waiting.',
    icon: <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 5v5l3 3" />,
  },
  {
    title: 'Built for every career stage',
    desc: 'From your first paycheck to your last day before retirement, there is a path that fits where you are.',
    icon: (
      <>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </>
    ),
  },
];

export default function HomePage() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ background: 'var(--ivory)', color: 'var(--charcoal)' }}>
      <Nav />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          background: 'linear-gradient(135deg, #1A0A0F 0%, #2A1018 40%, #3A1622 70%, #1A0A0F 100%)',
          overflow: 'hidden',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(138,32,64,0.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(138,32,64,0.18) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        <div
          className="absolute"
          style={{
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(138,32,64,0.35) 0%, transparent 70%)',
            top: '-100px',
            right: '-100px',
          }}
        />
        <div
          className="absolute"
          style={{
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(224,160,64,0.14) 0%, transparent 70%)',
            bottom: '100px',
            left: '-50px',
          }}
        />

        <div
          className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-32 pb-20"
          style={{
            opacity: heroLoaded ? 1 : 0,
            transform: heroLoaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s ease, transform 1s ease',
          }}
        >
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full"
              style={{ background: 'rgba(224,160,64,0.15)', border: '1px solid rgba(224,160,64,0.45)' }}
            >
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E0A040' }} />
              <span style={{ color: '#FFFFFF', fontSize: '0.8rem', fontWeight: 500 }}>
                Self-serve tools for every career stage
              </span>
            </div>

            <h1
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: '#FFFFFF',
                marginBottom: '1.5rem',
              }}
            >
              Smarter money decisions
              <br />
              <span style={{ color: '#E0A040' }}>at every stage</span>
              <br />
              of your career.
            </h1>

            <p
              style={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: '1.15rem',
                lineHeight: 1.7,
                maxWidth: '540px',
                marginBottom: '2.5rem',
              }}
            >
              Luminary Path Financial is employer-offered software that walks you through guides, checklists and calculators, from your first paycheck to your last day before retirement.
            </p>


            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2"
                style={{
                  background: '#E0A040',
                  color: '#1A0A0F',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  padding: '0.875rem 2rem',
                  borderRadius: '10px',
                  transition: 'opacity 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Employee Sign Up
                {arrow}
              </Link>
              <Link
                href="/for-employers"
                className="inline-flex items-center gap-2"
                style={{
                  color: '#FFFFFF',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  padding: '0.875rem 2rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.4)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
              >
                For Employers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PILLARS BAR ── */}
      <section style={{ background: '#2A1018', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-5xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map(pillar => (
              <div key={pillar.title} className="flex items-start gap-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(224,160,64,0.18)', color: '#E0A040' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {pillar.icon}
                  </svg>
                </div>
                <div>
                  <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.35rem' }}>
                    {pillar.title}
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem', lineHeight: 1.6 }}>
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAREER STAGES ── */}
      <section className="py-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
              Four Career Stages
            </p>
            <h2 className="headline-lg" style={{ color: 'var(--forest)' }}>
              From your first paycheck
              <br />
              <em className="italic-accent">to your last day before retirement.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {careerStages.map(stage => (
              <div key={stage.name} className="card-feature p-8" style={{ minHeight: '320px' }}>
                <p className="font-mono-label mb-4" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>
                  {stage.tag}
                </p>
                <h3 className="font-serif mb-3" style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--forest)' }}>
                  {stage.name}
                </h3>
                <p style={{ color: 'var(--charcoal)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                  {stage.blurb}
                </p>
                <ul className="space-y-2">
                  {stage.items.map(item => (
                    <li key={item} className="flex items-start gap-2" style={{ fontSize: '0.82rem', color: 'var(--charcoal)', lineHeight: 1.5 }}>
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: 'var(--olive)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── HOW IT WORKS ── */}
      <section className="py-28 px-6" style={{ background: 'var(--white)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
              How It Works
            </p>
            <h2 className="headline-lg" style={{ color: 'var(--forest)' }}>
              One clear step,
              <br />
              <em className="italic-accent">then the next.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {howItWorks.map((step, i) => (
              <div key={step.num} className="relative">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(42,16,24,0.08)', color: 'var(--forest)' }}
                >
                  {step.icon}
                </div>
                <p className="font-mono-label mb-3" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
                  {step.num}
                </p>
                <h3 className="font-serif mb-3" style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--forest)' }}>
                  {step.title}
                </h3>
                <p style={{ color: 'rgba(42,16,24,0.75)', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  {step.desc}
                </p>
                {i < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-5 -right-3 z-10">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(42,16,24,0.3)" strokeWidth="1.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APP UI DEMO ── */}
      <section className="py-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
              The Experience
            </p>
            <h2 className="headline-lg" style={{ color: 'var(--forest)' }}>
              A path you can see,
              <br />
              <em className="italic-accent">a step at a time.</em>
            </h2>
            <p
              style={{
                color: 'rgba(42,16,24,0.75)',
                fontSize: '1rem',
                lineHeight: 1.8,
                maxWidth: '460px',
                margin: '1.5rem auto 0',
              }}
            >
              Track where you are on your path, open the next guide, and try a calculator with numbers you type in yourself.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="font-mono-label mb-4" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>
                Path Tracker
              </p>
              <p className="headline-md mb-6" style={{ color: 'var(--forest)', fontSize: '1.5rem' }}>
                See your next step at a glance
              </p>
              <p style={{ color: 'rgba(42,16,24,0.75)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                Each completed step unlocks the next one, so you always know what to do now and what is coming up.
              </p>
              <div className="animate-float">
                <PathMockup />
              </div>
            </div>

            <div>
              <p className="font-mono-label mb-4" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>
                Guides and Calculators
              </p>
              <p className="headline-md mb-6" style={{ color: 'var(--forest)', fontSize: '1.5rem' }}>
                Plain-language guides, simple tools
              </p>
              <p style={{ color: 'rgba(42,16,24,0.75)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                Read a short guide, then use a calculator to see what a change could mean for you. Your entries stay private.
              </p>
              <div className="animate-float-delay">
                <GuideMockup />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── EMPLOYER SECTION ── */}
      <section className="py-28 px-6" style={{ background: 'var(--forest)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono-label mb-6" style={{ color: '#E0A040', fontSize: '0.65rem' }}>
                For Employers
              </p>
              <h2 className="headline-lg text-white mb-6">
                A decision-support benefit
                <br />
                <em className="italic-accent">for every career stage.</em>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                Offer one benefit that fits a new hire and a long-tenured colleague alike. You see anonymous usage and path completion, never individual entries.
              </p>
              <div className="space-y-5">
                {[
                  { title: 'Simple rollout', desc: 'Share an Employer ID and a sign-up link with your team.' },
                  { title: 'Private by design', desc: 'Employees keep their entries to themselves.' },
                  { title: 'Anonymous usage', desc: 'See how many paths are started and completed, in aggregate.' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(224,160,64,0.2)', border: '1px solid rgba(224,160,64,0.5)' }}
                    >
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#E0A040" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.2rem' }}>{item.title}</p>
                      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/for-employers" className="btn-primary">
                  Learn More for Employers
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <EmployerUsageMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono-label mb-8" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
            Get Started
          </p>
          <h2 className="headline-lg mb-8" style={{ color: 'var(--forest)' }}>
            Pick your stage.
            <br />
            <em className="italic-accent">Take the next step.</em>
          </h2>
          <p
            style={{
              color: 'rgba(42,16,24,0.75)',
              fontSize: '1rem',
              lineHeight: 1.8,
              maxWidth: '440px',
              margin: '0 auto 2.5rem',
            }}
          >
            Sign up with the Employer ID from your HR team and start your path today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/signup" className="btn-forest">
              Employee Sign Up
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/for-employers" className="btn-outline" style={{ color: 'var(--forest)', borderColor: 'rgba(42,16,24,0.4)' }}>
              For Employers
            </Link>
          </div>
        </div>
      </section>

      {/* ── NOT A BANK ── */}
      <section className="px-6 pb-16" style={{ background: 'var(--ivory)' }}>
        <p
          className="max-w-3xl mx-auto text-center"
          style={{ color: 'rgba(42,16,24,0.75)', fontSize: '0.82rem', lineHeight: 1.7 }}
        >
          {NOT_A_BANK_LINE}
        </p>
      </section>

      <Footer />
    </div>
  );
}

