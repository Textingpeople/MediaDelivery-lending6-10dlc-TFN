'use client';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';
import { milestones, howMilestonesWork, activePaths } from './data';

function ProgressBar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="w-full rounded-full h-2" style={{ background: 'rgba(42,16,24,0.1)' }}>
      <div className="h-2 rounded-full transition-all" style={{ width: `${pct}%`, background: color }} />
    </div>
  );
}

const softCard = { background: 'var(--white)', border: '1px solid rgba(42,16,24,0.12)', borderRadius: '24px' } as const;

export default function ChallengesPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--ivory)', color: 'var(--charcoal)' }}>
      <Nav />

      <section className="pt-40 pb-20 px-6 text-center" style={{ background: 'var(--forest)' }}>
        <div className="max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{ background: 'rgba(224,160,64,0.15)', border: '1px solid rgba(224,160,64,0.45)', color: '#FFFFFF' }}
          >
            Path Milestones
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6" style={{ color: '#FFFFFF' }}>
            Small steps that
            <br />
            <span style={{ color: '#E0A040' }}>add up along your path.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Each career stage has milestones made of guides, checklists and calculators. Finish a step, unlock the next, and pick up where you left off whenever you like.
          </p>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--forest)' }}>
              Four path milestones.
            </h2>
            <p className="text-lg" style={{ color: 'rgba(42,16,24,0.8)' }}>
              Each one is self-serve, step by step, and private to you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {milestones.map(m => (
              <div key={m.name} className="p-8" style={softCard}>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-bold"
                    style={{ background: m.tint, color: m.color }}
                  >
                    {m.mark}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: 'var(--forest)' }}>{m.name}</h3>
                    <p className="text-sm" style={{ color: 'rgba(42,16,24,0.75)' }}>{m.sub}</p>
                  </div>
                </div>
                <p className="mb-6" style={{ color: 'rgba(42,16,24,0.85)' }}>{m.desc}</p>
                <div className="p-5 rounded-2xl mb-4" style={{ background: 'rgba(42,16,24,0.04)' }}>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-semibold" style={{ color: 'var(--forest)' }}>{m.sample}</p>
                  </div>
                  <ProgressBar pct={m.pct} color={m.color} />
                </div>
                <ul className="space-y-2">
                  {m.steps.map(s => (
                    <li key={s} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(42,16,24,0.85)' }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: m.color }} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How milestones work */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--forest)' }}>
              Milestones that guide themselves.
            </h2>
            <p className="text-lg" style={{ color: 'rgba(42,16,24,0.8)' }}>
              Pick a path. Work through the steps. Get a reminder when the next one is ready.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {howMilestonesWork.map(item => (
                <div key={item.title} className="flex items-start gap-4">
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{ background: 'var(--olive)', color: '#FFFFFF' }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <p className="font-semibold mb-1" style={{ color: 'var(--forest)' }}>{item.title}</p>
                    <p className="text-sm" style={{ color: 'rgba(42,16,24,0.8)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6" style={softCard}>
              <p className="text-xs uppercase tracking-wider font-medium mb-4" style={{ color: 'var(--olive)' }}>
                Your Paths
              </p>
              <div className="space-y-4">
                {activePaths.map(c => (
                  <div key={c.name} className="p-4 rounded-2xl" style={{ background: 'rgba(42,16,24,0.04)' }}>
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="text-sm font-semibold" style={{ color: 'var(--forest)' }}>{c.name}</p>
                        <p className="text-xs" style={{ color: 'rgba(42,16,24,0.75)' }}>{c.type}</p>
                      </div>
                      <span className="text-xs font-bold" style={{ color: c.color }}>{c.label}</span>
                    </div>
                    <ProgressBar pct={c.progress} color={c.color} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--forest)' }}>Ready to begin your path?</h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(42,16,24,0.8)' }}>
            Employees sign up with the Employer ID from their HR team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup" className="btn-forest">
              Employee Sign Up
            </Link>
            <Link href="/for-employers" className="btn-outline" style={{ color: 'var(--forest)', borderColor: 'rgba(42,16,24,0.4)' }}>
              For Employers
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
