'use client';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { SampleMessages, NO_SHARING_SENTENCE, TEXTS_NEVER_INCLUDE } from '../components/SmsCopy';

const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const linkStyle = { color: 'var(--olive)', textDecoration: 'underline' } as const;
const h2Style = { fontSize: '1.3rem', fontWeight: 600, color: 'var(--forest)' } as const;
const labelStyle = { color: 'var(--olive)', fontSize: '0.6rem' } as const;

export default function PrivacyPage() {
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
            Privacy Policy
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
                Media Delivery Solutions LLC, a Wyoming limited liability company, d/b/a Luminary Path Financial (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our self-serve software platform and website at <strong>luminarypathfinancial.com</strong>. By using our service, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            {/* 1. Information We Collect */}
            <div>
              <h2 className="font-serif mb-4" style={h2Style}>1. Information We Collect</h2>
              <p className="mb-3">When you create an account or use our service, we may collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full name and work email address</li>
                <li>Employer ID (provided by your employer or HR team)</li>
                <li>Mobile phone number (only if you opt in to SMS)</li>
                <li>Your chosen career stage and your path progress</li>
                <li>Numbers you choose to type into calculators</li>
                <li>SMS opt-in consent preferences</li>
                <li>Usage data and device information (browser type, IP address, pages visited)</li>
              </ul>
              <p className="mt-3">
                We do not ask you to connect bank accounts or any other financial accounts, and we do not receive payroll data.
              </p>
            </div>

            {/* 2. SMS Messaging */}
            <div>
              <h2 className="font-serif mb-4" style={h2Style}>2. SMS Messaging</h2>
              <p className="mb-3">
                Luminary Path Financial uses SMS messaging to deliver path reminders, guide notices and account updates to employees who opt in. The following terms apply to our SMS program:
              </p>

              <div className="space-y-4">
                <div>
                  <p className="font-mono-label mb-2" style={labelStyle}>Program Description</p>
                  <p>Luminary Path Financial sends two types of SMS messages:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li><strong>Account Notifications:</strong> next-step reminders for your path, guide-ready notices for your stage, and account updates.</li>
                    <li><strong>Promotional:</strong> new guides and tools.</li>
                  </ul>
                </div>

                <SampleMessages />

                <div>
                  <p className="font-mono-label mb-2" style={labelStyle}>Opt-In</p>
                  <p>
                    You may opt in to receive SMS messages during sign-up by checking the applicable consent boxes. Opting in is entirely optional and is not required to use Luminary Path Financial. Consent is not a condition of purchasing any products or services.
                  </p>
                </div>

                <div>
                  <p className="font-mono-label mb-2" style={labelStyle}>Message Frequency</p>
                  <p>Message frequency varies based on your path, your stage and your account settings.</p>
                </div>

                <div>
                  <p className="font-mono-label mb-2" style={labelStyle}>Opt-Out</p>
                  <p>
                    You may opt out of SMS messages at any time by replying <strong>STOP</strong> to any message. You will receive a confirmation and no further messages will be sent. To re-enroll, reply <strong>START</strong>.
                  </p>
                </div>

                <div>
                  <p className="font-mono-label mb-2" style={labelStyle}>Help</p>
                  <p>
                    Reply <strong>HELP</strong> to any message for assistance, or contact us at <a href="mailto:support@luminarypathfinancial.com" style={linkStyle}>support@luminarypathfinancial.com</a>.
                  </p>
                </div>

                <div>
                  <p className="font-mono-label mb-2" style={labelStyle}>Rates</p>
                  <p>Message and data rates may apply. Check with your mobile carrier for details. {TEXTS_NEVER_INCLUDE}</p>
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

            {/* 3. How We Use Your Information */}
            <div>
              <h2 className="font-serif mb-4" style={h2Style}>3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To create and manage your Luminary Path Financial account</li>
                <li>To match your account to your employer&apos;s program using your Employer ID</li>
                <li>To save your career stage, path progress and calculator entries so you can pick up where you left off</li>
                <li>To send reminders and notices, including SMS messages you have opted into</li>
                <li>To provide anonymous, aggregate usage and path completion totals to your employer</li>
                <li>To improve our platform</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            {/* 4. Employer Data Sharing */}
            <div>
              <h2 className="font-serif mb-4" style={h2Style}>4. Employee Entries and Employer Reporting</h2>
              <p className="mb-3">
                Luminary Path Financial is designed with employee privacy at its core. Your path progress and calculator entries are private to you. They are never shared with your employer individually, and they are never sold.
              </p>
              <p>
                Employers receive only <strong>anonymous aggregate usage</strong>, such as how many employees have started or completed paths. These totals cannot be traced back to any individual employee.
              </p>
            </div>

            {/* 5. Data Security */}
            <div>
              <h2 className="font-serif mb-4" style={h2Style}>5. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your information, including encryption in transit and at rest, access controls, and regular security reviews. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* 6. Your Rights */}
            <div>
              <h2 className="font-serif mb-4" style={h2Style}>6. Your Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your account and associated data</li>
                <li>Opt out of SMS communications at any time by replying STOP</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at <a href="mailto:support@luminarypathfinancial.com" style={linkStyle}>support@luminarypathfinancial.com</a>.
              </p>
            </div>

            {/* 7. Contact */}
            <div>
              <h2 className="font-serif mb-4" style={h2Style}>7. Contact Us</h2>
              <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
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
