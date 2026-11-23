// Shared SMS copy so Terms, Privacy and Contact stay word-for-word identical.

export const NO_SHARING_SENTENCE =
  'No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.';

export const NOT_A_BANK_LINE =
  'Luminary Path Financial is a software platform. We are not a bank, lender, broker-dealer or registered investment adviser, and we do not hold, move, lend or invest your money.';

export const EDUCATIONAL_DISCLAIMER =
  'Luminary Path Financial provides software tools and general educational information only and does not provide financial, investment, tax or legal advice. Check your plan documents or talk with your HR or benefits team about your specific situation.';

export const TEXTS_NEVER_INCLUDE = 'Texts never include balances, account numbers, calculator entries or SSNs.';

const accountSamples = [
  "Luminary Path Financial: You're signed up for path reminders from your employer's career money program. Msg frequency varies. Msg & data rates may apply. Reply HELP for help, STOP to opt out.",
  'Luminary Path Financial: Reminder: finish step 3 of your First Job path at luminarypathfinancial.com. Reply STOP to opt out.',
  'Luminary Path Financial: Your next guide, "Got a raise? What to review," is ready at luminarypathfinancial.com. Reply STOP to opt out.',
];

const promoSamples = [
  'Luminary Path Financial: New guide: questions to ask HR before you retire. Read it at luminarypathfinancial.com. Reply STOP to opt out.',
  'Luminary Path Financial: New tool: see how a 401(k) contribution change affects your take-home pay. Try it at luminarypathfinancial.com. Reply STOP to opt out.',
];

export function SampleMessages() {
  return (
    <div>
      <p className="font-mono-label mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Sample Messages</p>
      <p className="mb-2" style={{ fontWeight: 600, color: 'var(--forest)' }}>Account Notifications</p>
      <ol className="list-decimal pl-6 space-y-2 mb-4">
        {accountSamples.map(m => (
          <li key={m}>{m}</li>
        ))}
      </ol>
      <p className="mb-2" style={{ fontWeight: 600, color: 'var(--forest)' }}>Promotional</p>
      <ol className="list-decimal pl-6 space-y-2" start={4}>
        {promoSamples.map(m => (
          <li key={m}>{m}</li>
        ))}
      </ol>
    </div>
  );
}
