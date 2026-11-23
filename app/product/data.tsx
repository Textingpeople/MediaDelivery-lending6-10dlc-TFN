export const features = [
  {
    title: 'Career-stage paths',
    desc: 'Choose First Job, Growing Career, Leadership & Peak Earning, or Pre-Retirement and get an ordered path of steps built for that stage.',
    icon: (
      <>
        <circle cx="6" cy="19" r="2" />
        <circle cx="18" cy="5" r="2" />
        <path d="M8 19h6a4 4 0 0 0 0-8h-4a4 4 0 0 1 0-8h6" />
      </>
    ),
  },
  {
    title: 'Decision guides',
    desc: 'Short, plain-language guides such as "Got a raise? What to review" and "Changing jobs? Your money checklist."',
    icon: (
      <>
        <path d="M4 4h12a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4V4z" />
        <path d="M8 9h8M8 13h6" />
      </>
    ),
  },
  {
    title: 'Calculators',
    desc: 'Type in your own numbers to see your take-home pay change after a raise, a 401(k) contribution change, or an emergency fund target.',
    icon: (
      <>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M8 6h8M8 11h2M12 11h2M8 15h2M12 15h2" />
      </>
    ),
  },
  {
    title: 'Progress tracker',
    desc: 'See which steps you have finished and which come next. Each completed step unlocks the one after it.',
    icon: (
      <>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </>
    ),
  },
  {
    title: 'Automated reminders',
    desc: 'Get a nudge toward your next step by email or, if you opt in, by text. Export reminders to your own calendar too.',
    icon: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.7 21a2 2 0 0 1-3.4 0" />
      </>
    ),
  },
  {
    title: 'Privacy controls',
    desc: 'Your path progress and calculator entries are yours alone. Your employer sees anonymous totals, never your individual entries.',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
];

export const privacyPoints = [
  { title: 'Self-entered only', desc: 'Everything in a calculator is typed in by you. Nothing is pulled in from elsewhere.' },
  { title: 'Private to you', desc: 'Path progress and entries are not shared with your employer individually.' },
  { title: 'Anonymous totals for employers', desc: 'Employers see aggregate usage and path completion, never individual entries.' },
  { title: 'Never sold', desc: 'We do not sell your information.' },
];
