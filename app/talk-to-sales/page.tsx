'use client';

import { useState } from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function TalkToSalesPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', teamSize: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ background: 'var(--ivory)', color: 'var(--charcoal)' }}>
      <Nav />

      <div className="min-h-screen grid md:grid-cols-2">

        {/* ── LEFT: Forest panel ── */}
        <div
          className="relative hidden md:flex flex-col justify-between p-12 pt-32"
          style={{ background: 'linear-gradient(135deg, #1A0A0F 0%, #2A1018 50%, #3A1622 100%)' }}
        >
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(138, 32, 64, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(138, 32, 64, 0.15) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

          <div className="relative z-10">
            <p className="font-mono-label mb-8" style={{ color: '#E0A040', fontSize: '0.65rem' }}>
              Talk to Sales
            </p>
            <h2 className="headline-lg text-white mb-6" style={{ maxWidth: '380px' }}>
              Offer a path
              <br />
              <em className="italic-accent">at every career stage.</em>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '340px' }}>
              Tell us about your organization and we will follow up about offering Luminary Path Financial as a self-serve benefit for your team.
            </p>
          </div>

          <div className="relative z-10 space-y-6">
            {[
              { title: 'Walkthrough of the paths', desc: 'See the four career-stage paths and the guides, checklists and calculators inside them.' },
              { title: 'Rollout questions answered', desc: 'Learn how Employer IDs, invites and optional HR system links work.' },
              { title: 'Privacy explained', desc: 'Understand how employers see anonymous usage only, never individual entries.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#E0A040' }} />
                <div>
                  <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.88rem', marginBottom: '0.2rem' }}>{item.title}</p>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Form panel ── */}
        <div className="flex flex-col justify-center px-6 py-24 md:px-12 lg:px-16" style={{ background: 'var(--ivory)' }}>
          <div className="max-w-md w-full mx-auto">

            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: 'rgba(138, 32, 64, 0.12)' }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--olive)" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="headline-md mb-4" style={{ color: 'var(--forest)' }}>
                  We&apos;ll be in touch.
                </h2>
                <p style={{ color: 'rgba(42, 16, 24, 0.55)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Thank you for your interest in Luminary Path Financial. We will follow up with you soon.
                </p>
                <Link href="/" className="btn-forest">
                  Back to Home
                </Link>
              </div>
            ) : (
              <>
                <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
                  Talk to Sales
                </p>
                <h1 className="headline-md mb-3" style={{ color: 'var(--forest)', fontSize: '2rem' }}>
                  Ready to offer a path
                  <br />
                  <em className="italic-accent">for every career stage?</em>
                </h1>
                <p style={{ color: 'rgba(42, 16, 24, 0.75)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                  Share a few details about your organization and we will be in touch about next steps.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="font-mono-label block mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl text-sm"
                      style={{
                        background: 'rgba(42, 16, 24, 0.04)',
                        border: '1px solid rgba(42, 16, 24, 0.12)',
                        color: 'var(--charcoal)',
                        outline: 'none',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    />
                  </div>

                  {/* Work Email */}
                  <div>
                    <label className="font-mono-label block mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl text-sm"
                      style={{
                        background: 'rgba(42, 16, 24, 0.04)',
                        border: '1px solid rgba(42, 16, 24, 0.12)',
                        color: 'var(--charcoal)',
                        outline: 'none',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="font-mono-label block mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 rounded-xl text-sm"
                      style={{
                        background: 'rgba(42, 16, 24, 0.04)',
                        border: '1px solid rgba(42, 16, 24, 0.12)',
                        color: 'var(--charcoal)',
                        outline: 'none',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    />
                  </div>

                  {/* Team Size */}
                  <div>
                    <label className="font-mono-label block mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>
                      Team Size *
                    </label>
                    <select
                      name="teamSize"
                      required
                      value={formData.teamSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm"
                      style={{
                        background: 'rgba(42, 16, 24, 0.04)',
                        border: '1px solid rgba(42, 16, 24, 0.12)',
                        color: formData.teamSize ? 'var(--charcoal)' : 'rgba(42, 16, 24, 0.35)',
                        outline: 'none',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      <option value="" disabled>Select team size</option>
                      <option value="1-50">1–50 employees</option>
                      <option value="51-200">51–200 employees</option>
                      <option value="201-500">201–500 employees</option>
                      <option value="501-1000">501–1,000 employees</option>
                      <option value="1001+">1,000+ employees</option>
                    </select>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="font-mono-label block mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 555-5555"
                      className="w-full px-4 py-3 rounded-xl text-sm"
                      style={{
                        background: 'rgba(42, 16, 24, 0.04)',
                        border: '1px solid rgba(42, 16, 24, 0.12)',
                        color: 'var(--charcoal)',
                        outline: 'none',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-mono-label block mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>
                      Anything else we should know?
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your team or any questions you have..."
                      className="w-full px-4 py-3 rounded-xl text-sm resize-none"
                      style={{
                        background: 'rgba(42, 16, 24, 0.04)',
                        border: '1px solid rgba(42, 16, 24, 0.12)',
                        color: 'var(--charcoal)',
                        outline: 'none',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    />
                  </div>

                  {/* Terms */}
                  <div className="flex items-start gap-3 pt-1">
                    <input
                      type="checkbox"
                      id="termsAgreement"
                      required
                      className="mt-1 w-4 h-4 rounded flex-shrink-0"
                      style={{ accentColor: 'var(--olive)' }}
                    />
                    <label htmlFor="termsAgreement" style={{ fontSize: '0.75rem', color: 'rgba(42, 16, 24, 0.5)', lineHeight: 1.6 }}>
                      I have read and agree to the{' '}
                      <Link href="/privacy" style={{ color: 'var(--olive)', textDecoration: 'underline' }}>Privacy Policy</Link>
                      {' '}and{' '}
                      <Link href="/terms" style={{ color: 'var(--olive)', textDecoration: 'underline' }}>Terms of Service</Link>. *
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-forest w-full justify-center mt-2"
                    style={{ opacity: isSubmitting ? 0.6 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                  >
                    {isSubmitting ? 'Submitting…' : 'Talk to Sales'}
                    {!isSubmitting && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
