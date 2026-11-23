import Link from 'next/link';

const footerLink = { color: 'rgba(251,245,242,0.75)', fontSize: '0.9rem', transition: 'color 0.2s' } as const;
const metaText = { color: 'rgba(251,245,242,0.65)', fontSize: '0.65rem' } as const;

const productLinks = [
  { label: 'Product', href: '/product' },
  { label: 'For Employers', href: '/for-employers' },
  { label: 'Integrations', href: '/integrations' },
  { label: 'Path Milestones', href: '/challenges' },
  { label: 'Employee Sign Up', href: '/signup' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Contact', href: '/contact' },
];

function LinkList({ items }: { items: { label: string; href: string }[] }) {
  return (
    <ul className="space-y-3">
      {items.map(item => (
        <li key={item.href}>
          <Link
            href={item.href}
            style={footerLink}
            onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(251,245,242,0.75)')}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--forest)', color: 'var(--ivory)' }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Top row */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <span
                style={{
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontWeight: 600,
                  fontSize: '1.4rem',
                  color: 'rgba(251,245,242,0.95)',
                  letterSpacing: '-0.01em',
                }}
              >
                Luminary Path Financial
              </span>
            </div>
            <p
              className="headline-md italic-accent mb-6"
              style={{ color: 'rgba(251,245,242,0.85)', maxWidth: '320px', fontSize: '1.4rem' }}
            >
              One step at a time, from first paycheck to last day.
            </p>
            <p style={{ color: 'rgba(251,245,242,0.7)', fontSize: '0.85rem', lineHeight: '1.7', maxWidth: '300px' }}>
              Self-serve guides, checklists and calculators, offered through your employer.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="font-mono-label mb-6" style={{ color: '#E0A040', fontSize: '0.65rem' }}>
              Product
            </p>
            <LinkList items={productLinks} />
          </div>

          {/* Legal */}
          <div>
            <p className="font-mono-label mb-6" style={{ color: '#E0A040', fontSize: '0.65rem' }}>
              Legal
            </p>
            <LinkList items={legalLinks} />
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(251,245,242,0.15)', paddingTop: '2rem' }}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-2">
              <p className="font-mono-label" style={metaText}>
                © {new Date().getFullYear()} Media Delivery Solutions LLC, d/b/a Luminary Path Financial. All rights reserved.
              </p>
              <p className="font-mono-label" style={metaText}>
                9 Johnston Dr, Bloomsbury, NJ 08804, United States ·{' '}
                <a href="tel:+19083998307" style={{ color: 'inherit', textDecoration: 'underline' }}>
                  (908) 399-8307
                </a>
              </p>
            </div>
            <p className="font-mono-label" style={metaText}>
              luminarypathfinancial.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
