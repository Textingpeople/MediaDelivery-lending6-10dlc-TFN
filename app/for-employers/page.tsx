'use client';

import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import EmployerUsageMockup from '../components/EmployerUsageMockup';

const pillars = [
  {
    title: 'Private by design',
    desc: 'Employers see anonymous aggregate usage only, never an individual employee\'s entries.',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    title: 'One benefit, every stage',
    desc: 'The same program covers a new hire, a rising leader and someone planning their last day of work.',
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    title: 'Anonymous usage reporting',
    desc: 'See anonymous usage and path completion in totals, so you know the benefit is being used.',
    icon: (
      <>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </>
    ),
  },
];

const reasons = [
  {
    label: 'Fits Every Career Stage',
    body: 'First Job, Growing Career, Leadership & Peak Earning and Pre-Retirement each have their own path of guides, checklists and calculators.',
  },
  {
    label: 'Self-Serve by Design',
    body: 'Employees work through their path on their own time. There is nothing for your team to schedule, staff or moderate.',
  },
  {
    label: 'Points to Your Plans',
    body: 'Link employees to your existing benefits and retirement plan pages, so the right documents are one click away.',
  },
  {
    label: 'Light Lift for HR',
    body: 'Share an Employer ID and a sign-up link. Optionally connect your HR system to verify eligibility and send invites.',
  },
];

const rollout = [
  {
    num: '01',
    title: 'Set Up Your Program',
    desc: 'Tell us your company name and which benefits and retirement plan pages you would like employees to be pointed to.',
  },
  {
    num: '02',
    title: 'Invite Your Employees',
    desc: 'Send the sign-up link and Employer ID, or let your HR system send invites. Employees choose their own career stage when they join.',
  },
  {
    num: '03',
    title: 'See Anonymous Usage',
    desc: 'Review anonymous usage and path completion totals. Individual entries are never visible to you.',
  },
];

const reportItems = [
  'Anonymous usage totals',
  'Path completion by career stage, in aggregate',
  'Guides and calculators opened, in aggregate',
  'Reminder opt-in totals, with no names attached',
];

export default function ForEmployersPage() {
  return (
    <div style={{ background: 'var(--ivory)', color: 'var(--charcoal)' }}>
      <Nav />

      {/* ── HERO ── */}
      <section className="relative pt-48 pb-28 px-6" style={{ background: 'var(--forest)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono-label mb-8" style={{ color: '#E0A040', fontSize: '0.65rem' }}>
            For Employers
          </p>
          <h1 className="headline-xl text-white mb-8">
            A decision-support benefit
            <br />
            <em className="italic-accent">for every career stage.</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '540px', margin: '0 auto 2.5rem' }}>
            Give your team self-serve guides, checklists and calculators that meet people wherever they are in their career.
          </p>
          <Link href="/talk-to-sales" className="btn-primary">
            Talk to Sales
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section style={{ background: 'var(--forest)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
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

      {/* ── WHY ── */}
      <section className="py-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
              Why Luminary Path
            </p>
            <h2 className="headline-lg" style={{ color: 'var(--forest)' }}>
              Easy to offer,
              <br />
              <em className="italic-accent">easy to use.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {reasons.map(f => (
              <div key={f.label} className="card-feature p-8" style={{ minHeight: '260px' }}>
                <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.6rem', lineHeight: 1.5 }}>
                  {f.label}
                </p>
                <p style={{ color: 'var(--charcoal)', fontSize: '0.95rem', lineHeight: 1.75 }}>
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIMPLE ROLLOUT ── */}
      <section className="py-28 px-6" style={{ background: 'var(--white)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
              Simple Rollout
            </p>
            <h2 className="headline-lg" style={{ color: 'var(--forest)' }}>
              Three steps
              <br />
              <em className="italic-accent">to get started.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {rollout.map(step => (
              <div key={step.num}>
                <p className="font-mono-label mb-4" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
                  {step.num}
                </p>
                <h3 className="font-serif mb-3" style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--forest)' }}>
                  {step.title}
                </h3>
                <p style={{ color: 'rgba(42,16,24,0.8)', fontSize: '0.9rem', lineHeight: 1.75 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANONYMOUS USAGE ── */}
      <section className="py-28 px-6" style={{ background: 'var(--forest)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono-label mb-6" style={{ color: '#E0A040', fontSize: '0.65rem' }}>
                Anonymous Usage
              </p>
              <h2 className="headline-lg text-white mb-6">
                See that it&apos;s used,
                <br />
                <em className="italic-accent">never what&apos;s entered.</em>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                Your view shows anonymous usage and path completion in aggregate. Individual entries and individual progress are never shown to employers.
              </p>
              <div className="space-y-4">
                {reportItems.map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(224,160,64,0.2)' }}
                    >
                      <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#E0A040" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <EmployerUsageMockup />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono-label mb-8" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
            Get Started
          </p>
          <h2 className="headline-lg mb-8" style={{ color: 'var(--forest)' }}>
            Offer a path
            <br />
            <em className="italic-accent">for every employee.</em>
          </h2>
          <p style={{ color: 'rgba(42,16,24,0.8)', fontSize: '1rem', lineHeight: 1.8, maxWidth: '440px', margin: '0 auto 2.5rem' }}>
            Tell us about your organization and we will follow up about rolling out Luminary Path Financial.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/talk-to-sales" className="btn-forest">
              Talk to Sales
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/product" className="btn-outline" style={{ color: 'var(--forest)', borderColor: 'rgba(42,16,24,0.4)' }}>
              See the Product
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
