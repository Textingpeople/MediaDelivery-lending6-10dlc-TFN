'use client';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';
import { hrItems, otherIntegrations, connectionSteps, privacyItems } from './data';

const softCard = { background: 'var(--white)', border: '1px solid rgba(42,16,24,0.12)', borderRadius: '24px' } as const;

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--ivory)', color: 'var(--charcoal)' }}>
      <Nav />

      <section className="pt-40 pb-20 px-6 text-center" style={{ background: 'var(--forest)' }}>
        <div className="max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{ background: 'rgba(224,160,64,0.15)', border: '1px solid rgba(224,160,64,0.45)', color: '#FFFFFF' }}
          >
            HR and Plan Links
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6" style={{ color: '#FFFFFF' }}>
            Light connections.
            <br />
            <span style={{ color: '#E0A040' }}>Nothing financial.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Luminary Path Financial only needs a few things from your HR system, and it points employees to the benefits and retirement plan pages you already have.
          </p>
        </div>
      </section>

      {/* HR systems: primary */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="p-10 mb-8" style={softCard}>
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div
                  className="w-24 h-24 rounded-3xl flex items-center justify-center shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #8A2040, #E0A040)' }}
                >
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h2 className="text-3xl font-bold" style={{ color: 'var(--forest)' }}>HR Systems</h2>
                  <span
                    className="px-3 py-1 text-sm font-semibold rounded-full"
                    style={{ background: 'rgba(224,160,64,0.25)', color: 'var(--forest)' }}
                  >
                    Optional
                  </span>
                </div>
                <p className="text-lg mb-6 leading-relaxed" style={{ color: 'rgba(42,16,24,0.8)' }}>
                  Connect your HR system to verify eligibility, invite employees and, if you want, set each person&apos;s starting career stage. That is the whole list.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                  {hrItems.map(item => (
                    <div key={item.name} className="p-4 rounded-2xl" style={{ background: 'rgba(42,16,24,0.04)' }}>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full" style={{ background: 'var(--olive)' }} />
                        <p className="text-sm font-semibold" style={{ color: 'var(--forest)' }}>{item.name}</p>
                      </div>
                      <p className="text-xs" style={{ color: 'rgba(42,16,24,0.75)' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div
                  className="p-4 rounded-2xl flex items-start gap-3"
                  style={{ background: 'rgba(224,160,64,0.15)', border: '1px solid rgba(224,160,64,0.45)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--forest)" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <p className="text-sm" style={{ color: 'var(--forest)' }}>
                    <strong>HR connections never carry personal money details.</strong> They are used for eligibility, invites and an optional starting stage only.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Other connections */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {otherIntegrations.map(item => (
              <div key={item.title} className="p-6" style={softCard}>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold mb-4"
                  style={{ background: 'rgba(138,32,64,0.12)', color: 'var(--olive)' }}
                >
                  {item.mark}
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--forest)' }}>{item.title}</h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: 'rgba(42,16,24,0.8)' }}>{item.desc}</p>
                <ul className="space-y-1">
                  {item.examples.map(e => (
                    <li key={e} className="flex items-center gap-2 text-xs" style={{ color: 'rgba(42,16,24,0.75)' }}>
                      <div className="w-1 h-1 rounded-full" style={{ background: 'var(--olive)' }} />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Important note */}
          <div className="p-8 text-center" style={softCard}>
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--forest)' }}>About Connections</h3>
            <p className="max-w-2xl mx-auto" style={{ color: 'rgba(42,16,24,0.8)' }}>
              Luminary Path Financial does not connect to bank accounts, any other financial accounts or payroll data. Links to benefits and retirement plan pages open the employer&apos;s own pages, and what you find there is governed by your employer and plan provider.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--forest)' }}>
              How the links work.
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {connectionSteps.map(item => (
              <div key={item.step} className="p-6 text-center relative" style={softCard}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4"
                  style={{ background: 'var(--olive)', color: '#FFFFFF' }}
                >
                  {item.step}
                </div>
                <h3 className="font-bold mb-2" style={{ color: 'var(--forest)' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: 'rgba(42,16,24,0.8)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="p-8" style={softCard}>
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--forest)' }}>Privacy &amp; permissions</h2>
            <div className="space-y-4">
              {privacyItems.map(item => (
                <div key={item.title} className="flex items-start gap-4 p-4 rounded-2xl" style={{ background: 'rgba(42,16,24,0.04)' }}>
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(138,32,64,0.15)' }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: 'var(--olive)' }} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1" style={{ color: 'var(--forest)' }}>{item.title}</p>
                    <p className="text-sm" style={{ color: 'rgba(42,16,24,0.8)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/privacy" className="text-sm font-semibold underline" style={{ color: 'var(--olive)' }}>
                Read our full privacy policy →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--forest)' }}>Ready to get started?</h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(42,16,24,0.8)' }}>
            Employees need an Employer ID from their HR team to sign up.
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
