export const hrItems = [
  { name: 'Eligibility check', desc: 'Confirms an employee can join' },
  { name: 'Invitations', desc: 'Sends the sign-up invite' },
  { name: 'Starting stage', desc: 'Optional career-stage suggestion' },
  { name: 'Employer ID', desc: 'Matches employees to your program' },
  { name: 'Opt-in only', desc: 'You choose what is turned on' },
  { name: 'Nothing more', desc: 'No other HR data is requested' },
];

export const otherIntegrations = [
  {
    mark: 'B',
    title: 'Benefits Pages',
    desc: 'Link employees to your own benefits pages from the steps where they matter, such as enrolling on time.',
    examples: ['Benefits portal link', 'Enrollment window page', 'HR contact page'],
  },
  {
    mark: 'R',
    title: 'Retirement Plan Pages',
    desc: 'Point employees to your workplace retirement plan page and plan provider site for the details of your plan.',
    examples: ['Plan provider site', 'Plan documents', 'Questions for your plan provider'],
  },
  {
    mark: 'C',
    title: 'Calendar Export',
    desc: 'Employees can export their reminders to the calendar they already use, so next steps do not get lost.',
    examples: ['Calendar file download', 'Works with common calendar apps', 'Employee-controlled'],
  },
];

export const connectionSteps = [
  { step: '1', title: 'HR sets up', desc: 'Your team shares an Employer ID and, if you like, turns on eligibility checks and invites.' },
  { step: '2', title: 'Employee joins', desc: 'The employee signs up with the Employer ID and picks, or confirms, a career stage.' },
  { step: '3', title: 'Links appear', desc: 'Your benefits and retirement plan pages show up inside the steps where they are useful.' },
  { step: '4', title: 'Reminders export', desc: 'Employees can export reminders to their calendar and keep moving along their path.' },
];

export const privacyItems = [
  { title: 'Eligibility and invites only', desc: 'HR systems are used to verify eligibility, invite employees and, optionally, set a starting career stage.' },
  { title: 'No financial account connections', desc: 'Luminary Path Financial does not connect to bank accounts, financial accounts or payroll data.' },
  { title: 'Employers see anonymous totals', desc: "Employers see anonymous aggregate usage only, never an individual employee's entries." },
  { title: 'Employees stay in control', desc: "Everything on a path is self-entered, and calendar export is the employee's choice." },
];
