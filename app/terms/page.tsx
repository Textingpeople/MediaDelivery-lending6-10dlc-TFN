'use client';

import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import {
  SampleMessages,
  NO_SHARING_SENTENCE,
  NOT_A_BANK_LINE,
  EDUCATIONAL_DISCLAIMER,
  TEXTS_NEVER_INCLUDE,
} from '../components/SmsCopy';

const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const linkStyle = { color: 'var(--olive)', textDecoration: 'underline' } as const;
const h2Style = { fontSize: '1.3rem', fontWeight: 600, color: 'var(--forest)' } as const;
const labelStyle = { color: 'var(--olive)', fontSize: '0.6rem' } as const;

export default function TermsPage() {
  return (
    <div style={{ background: 'var(--ivory)', color: 'var(--charcoal)' }}>
      <Nav />

      {/* ── HERO ── */}
      <section className="pt-40 pb-20 px-6" style={{ background: 'var(--forest)' }}>
        <div className="max-w-4xl mx-auto">
          <p className="font-mono-label mb-6" style={{ color: '#E0A040', fontSize: '0.65rem' }}>
            Legal
          </p>
          <h1 className="headline-xl text-white mb-4" style={{ maxWidth: '560px' }}>
            Terms of Service
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem' }}>
            Last Updated: {today}
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-20 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-10" style={{ fontSize: '0.92rem', lineHeight: 1.8, color: 'rgba(42, 16, 24, 0.85)' }}>

            {/* Intro */}
            <div>
              <p>
                These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Luminary Path Financial software platform and the website at <strong>luminarypathfinancial.com</strong> (collectively, the &quot;Service&quot;), offered by Media Delivery Solutions LLC, a Wyoming limited liability company, d/b/a Luminary Path Financial (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, you may not use the Service.
              </p>
            </div>

            {/* 1. Description of Service */}
            <div>
              <h2 className="font-serif mb-4" style={h2Style}>1. Description of Service</h2>
              <p className="mb-3">
                Luminary Path Financial is employer-offered software that helps employees make smarter money decisions at every stage of their career, using self-serve tools. The Service includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Career-stage paths: First Job, Growing Career, Leadership &amp; Peak Earning, and Pre-Retirement</li>
                <li>Decision guides and checklists, such as &quot;Got a raise? What to review&quot; and &quot;Changing jobs? Your money checklist&quot;</li>
                <li>Calculators that use numbers you enter yourself, such as take-home pay change after a raise, a 401(k) contribution change, and an emergency fund target</li>
                <li>A progress tracker and automated reminders for your next step</li>
                <li>Optional SMS reminders and notices (for users who opt in)</li>
              </ul>
              <p className="mt-3">{NOT_A_BANK_LINE}</p>
              <p className="mt-3">{EDUCATIONAL_DISCLAIMER}</p>
            </div>

            {/* 2. Eligibility */}
            <div>
              <h2 className="font-serif mb-4" style={h2Style}>2. Eligibility</h2>
              <p>
                To use the Service, you must be at least 18 years of age and an employee of an organization that offers Luminary Path Financial as a benefit. You must have a valid Employer ID provided by your HR or benefits team to create an account.
              </p>
            </div>

            {/* 3. Account Registration */}
            <div>
              <h2 className="font-serif mb-4" style={h2Style}>3. Account Registration</h2>
              <p className="mb-3">
                To access the Service, you must create an account by providing accurate and complete information, including your name, work email address, Employer ID, and mobile phone number (only if you opt in to SMS). You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.
              </p>
              <p>
                You agree to notify us immediately at <a href="mailto:support@luminarypathfinancial.com" style={linkStyle}>support@luminarypathfinancial.com</a> if you suspect unauthorized access to your account.
              </p>
            </div>

            {/* 4. SMS Communications */}
            <div>
              <h2 className="font-serif mb-4" style={h2Style}>4. SMS Communications</h2>
              <p className="mb-3">
                Luminary Path Financial offers optional SMS messaging to deliver path reminders, guide notices and account updates. By opting in to SMS communications during sign-up, you agree to the following:
              </p>

              <div className="space-y-4">
                <div>
                  <p className="font-mono-label mb-2" style={labelStyle}>Types of Messages</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Account Notifications:</strong> next-step reminders for your path, guide-ready notices for your stage, and account updates.</li>
                    <li><strong>Promotional:</strong> new guides and tools.</li>
                  </ul>
                </div>

                <SampleMessages />

                <div>
                  <p className="font-mono-label mb-2" style={labelStyle}>Consent</p>
                  <p>
                    Opting in to SMS is entirely voluntary and is not required to use the Service. Consent is not a condition of purchasing any products or services. You may opt in to one or both message types independently. A mobile phone number is required only if you opt in.
                  </p>
                </div>

                <div>
                  <p className="font-mono-label mb-2" style={labelStyle}>Opt-Out</p>
                  <p>
                    You may opt out of SMS messages at any time by replying <strong>STOP</strong> to any message. You will receive a one-time confirmation and no further messages will be sent. To re-enroll, reply <strong>START</strong>.
                  </p>
                </div>

                <div>
                  <p className="font-mono-label mb-2" style={labelStyle}>Help</p>
                  <p>
                    Reply <strong>HELP</strong> to any message for assistance, or contact us at <a href="mailto:support@luminarypathfinancial.com" style={linkStyle}>support@luminarypathfinancial.com</a>.
                  </p>
                </div>

                <div>
                  <p className="font-mono-label mb-2" style={labelStyle}>Rates &amp; Frequency</p>
                  <p>
                    Message and data rates may apply. Message frequency varies. {TEXTS_NEVER_INCLUDE}
                  </p>
                </div>

                <div
                  className="rounded-xl p-4"
                  style={{ background: 'rgba(138, 32, 64, 0.06)', border: '1px solid rgba(138, 32, 64, 0.2)' }}
                >
                  <p style={{ fontWeight: 600, color: 'var(--forest)', marginBottom: '0.5rem' }}>
                    No Mobile Data Sharing
                  </p>
                  <p>{NO_SHARING_SENTENCE}</p>
                </div>
              </div>
            </div>

            {/* 5. Educational Information */}
            <div>
              <h2 className="font-serif mb-4" style={h2Style}>5. General Educational Information</h2>
              <p className="mb-3">
                The guides, checklists and calculators in the Service are general educational tools. Calculator results depend entirely on the numbers you type in and are examples only. They do not constitute:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Financial planning or advice about any product</li>
                <li>Legal or tax advice</li>
                <li>A promise about any outcome</li>
              </ul>
              <p className="mt-3">
                {EDUCATIONAL_DISCLAIMER} We are not responsible for decisions you make based on information provided through the Service.
              </p>
            </div>

            {/* 6. Privacy */}
            <div>
              <h2 className="font-serif mb-4" style={h2Style}>6. Privacy</h2>
              <p>
                Your use of the Service is also governed by our <Link href="/privacy" style={linkStyle}>Privacy Policy</Link>, which is incorporated into these Terms by reference. Your path progress and calculator entries are private to you. Your employer sees only anonymous aggregate usage, never your individual entries.
              </p>
            </div>

            {/* 7. Acceptable Use */}
            <div>
              <h2 className="font-serif mb-4" style={h2Style}>7. Acceptable Use</h2>
              <p className="mb-3">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Service for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any part of the Service</li>
                <li>Provide false or misleading information during registration</li>
                <li>Use another person&apos;s Employer ID or account credentials</li>
                <li>Interfere with or disrupt the integrity or performance of the Service</li>
              </ul>
            </div>

            {/* 8. Termination */}
            <div>
              <h2 className="font-serif mb-4" style={h2Style}>8. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your account at any time for violation of these Terms or at the request of your employer. You may also delete your account at any time by contacting us at <a href="mailto:support@luminarypathfinancial.com" style={linkStyle}>support@luminarypathfinancial.com</a>.
              </p>
            </div>

            {/* 9. Limitation of Liability */}
            <div>
              <h2 className="font-serif mb-4" style={h2Style}>9. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Media Delivery Solutions LLC, d/b/a Luminary Path Financial, shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Service, including any decisions you make based on the guides, checklists or calculators in the Service.
              </p>
            </div>

            {/* 10. Changes to Terms */}
            <div>
              <h2 className="font-serif mb-4" style={h2Style}>10. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. We will notify you of material changes by updating the &quot;Last Updated&quot; date at the top of this page. Continued use of the Service after changes constitutes acceptance of the updated Terms.
              </p>
            </div>

            {/* 11. Contact */}
            <div>
              <h2 className="font-serif mb-4" style={h2Style}>11. Contact Us</h2>
              <p>For questions about these Terms, please contact us:</p>
              <div className="mt-3 space-y-1">
                <p><strong>Media Delivery Solutions LLC, d/b/a Luminary Path Financial</strong></p>
                <p>Address: 9 Johnston Dr, Bloomsbury, NJ 08804, United States</p>
                <p>Phone: <a href="tel:+19083998307" style={linkStyle}>(908) 399-8307</a></p>
                <p>Email: <a href="mailto:support@luminarypathfinancial.com" style={linkStyle}>support@luminarypathfinancial.com</a></p>
                <p>Website: <a href="https://luminarypathfinancial.com" style={linkStyle}>luminarypathfinancial.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
