export const milestones = [
  {
    name: 'First Paycheck Ready',
    sub: 'First Job stage',
    mark: '1',
    tint: 'rgba(138,32,64,0.12)',
    color: '#8A2040',
    desc: 'A short checklist for the first paycheck: read the pay stub line by line, set up direct deposit, sketch a starter budget and note your benefits enrollment date.',
    sample: 'First Job — Step 3 of 5',
    pct: 60,
    steps: ['Read your first pay stub', 'Set up direct deposit', 'Build a starter budget', 'Enroll in benefits on time'],
  },
  {
    name: 'Raise Review',
    sub: 'Growing Career stage',
    mark: '2',
    tint: 'rgba(224,160,64,0.22)',
    color: '#B8741A',
    desc: 'Got a raise or promotion? Walk through what to review: your new pay stub, your 401(k) contribution and your emergency fund target.',
    sample: 'Growing Career — Step 2 of 5',
    pct: 40,
    steps: ['Guide: Got a raise? What to review', 'Take-home pay change calculator', '401(k) contribution change calculator', 'Emergency fund target calculator'],
  },
  {
    name: 'Job-Change Checklist',
    sub: 'Growing Career stage',
    mark: '3',
    tint: 'rgba(138,32,64,0.12)',
    color: '#8A2040',
    desc: 'Changing jobs? A checklist of things to sort out before and after your move, from benefits timing to your workplace retirement plan.',
    sample: 'Job-Change Checklist — 3 of 6 done',
    pct: 50,
    steps: ['Note your last day and benefits end date', 'Ask HR what happens to your plan account', 'Review the new employer\'s benefits dates', 'Update your direct deposit'],
  },
  {
    name: 'Retirement Timeline Kickoff',
    sub: 'Pre-Retirement stage',
    mark: '4',
    tint: 'rgba(224,160,64,0.22)',
    color: '#B8741A',
    desc: 'Start your retirement timeline: understand your workplace retirement plan and collect the questions to bring to HR and your plan provider.',
    sample: 'Pre-Retirement — Step 1 of 4',
    pct: 25,
    steps: ['Understand your workplace retirement plan', 'Fill in your retirement timeline checklist', 'List questions for HR', 'List questions for your plan provider'],
  },
];

export const howMilestonesWork = [
  { icon: '1', title: 'Steps unlock in order', desc: 'Finish one step and the next one opens, so you always know where to go.' },
  { icon: '2', title: 'Progress you can see', desc: 'Each path shows how many steps are done and which one is next.' },
  { icon: '3', title: 'Reminders for next steps', desc: 'Automated reminders point you back to the step you were on.' },
  { icon: '4', title: 'Private to you', desc: 'Your progress is yours. Employers see anonymous totals only.' },
];

export const activePaths = [
  { name: 'First Paycheck Ready', type: 'First Job', progress: 60, label: 'Step 3 of 5', color: '#8A2040' },
  { name: 'Raise Review', type: 'Growing Career', progress: 40, label: 'Step 2 of 5', color: '#B8741A' },
  { name: 'Job-Change Checklist', type: 'Growing Career', progress: 50, label: '3 of 6 done', color: '#8A2040' },
  { name: 'Retirement Timeline Kickoff', type: 'Pre-Retirement', progress: 25, label: 'Step 1 of 4', color: '#B8741A' },
];
