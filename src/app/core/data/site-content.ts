/**
 * All website copy lives here, so content can be edited in one place.
 * Copy is taken from the current openrainbow.co.uk site.
 */

export interface Stage {
  no: string;
  id: string;
  name: string;
  line: string;
  color: string;
}

export interface ServiceLine {
  id: string;
  title: string;
  summary: string;
  stages: string[];
  points: string[];
  color: string;
}

export interface Capability {
  title: string;
  line: string;
}

export interface Office {
  label: string;
  lines: string[];
}

/** The IT life cycle. Order matters: this is a real sequence. */
export const STAGES: Stage[] = [
  { no: '01', id: 'design', name: 'Design', line: 'Business cases, network designs and roadmaps built around your goals.', color: '#e5484d' },
  { no: '02', id: 'deploy', name: 'Deploy', line: 'Procurement, install and cut-over, managed from start to finish.', color: '#f0883e' },
  { no: '03', id: 'test', name: 'Test', line: 'Every link proven before go-live, including OTDR fibre testing.', color: '#f5c84c' },
  { no: '04', id: 'operate', name: 'Operate', line: 'Round-the-clock support that keeps your systems running.', color: '#3dbb78' },
  { no: '05', id: 'maintain', name: 'Maintain', line: 'Routine tasks and fixes handled, so your team can do more.', color: '#3b8cf6' },
  { no: '06', id: 'improve', name: 'Improve', line: 'Capacity, availability and cost tuned as your business grows.', color: '#8b5cf6' },
];

export const SERVICE_LINES: ServiceLine[] = [
  {
    id: 'infrastructure',
    title: 'Infrastructure services',
    summary:
      'We help you harness the power of emerging technologies while getting the most out of your legacy environments. Whether that is fixing problems when they occur, or optimising capacity and availability.',
    stages: ['Test', 'Improve'],
    points: ['Infrastructure assessment', 'Hardware and software upgrades', 'Scalability and optimisation', 'OTDR fibre testing'],
    color: '#f5c84c',
  },
  {
    id: 'managed',
    title: 'Managed services',
    summary:
      'Managing IT assets can be a resource-heavy job. Our managed services lighten the load, reduce risk and give you round-the-clock IT support, freeing your teams for more strategic work.',
    stages: ['Operate', 'Maintain'],
    points: ['24/7 IT support', 'Security enhancements', 'Redundancy solutions', 'Routine maintenance'],
    color: '#3dbb78',
  },
  {
    id: 'professional',
    title: 'Professional services',
    summary:
      'Our IT professionals and project managers work out where you are, where you want to be, and how to get there. We work with you at every step: goals, procurement, deployment and beyond.',
    stages: ['Design', 'Deploy'],
    points: ['Business cases', 'Network design', 'Project management', 'Procurement and deployment'],
    color: '#e5484d',
  },
];

export const OUTCOMES: string[] = [
  'Improved performance',
  'Enhanced security',
  'Cost savings',
  'Reliability and redundancy',
  'Future-proofing',
];

export const CAPABILITIES: Capability[] = [
  { title: 'Infrastructure assessment', line: 'A clear picture of what you have, what works and what is at risk.' },
  { title: 'Hardware and software upgrades', line: 'Planned upgrades with minimal disruption to your business.' },
  { title: 'Redundancy solutions', line: 'No single point of failure between you and your customers.' },
  { title: 'Security enhancements', line: 'Hardened networks, systems and access, sized to your risk.' },
  { title: 'Scalability and optimisation', line: 'Infrastructure that grows with demand, not ahead of budget.' },
  { title: 'OTDR fibre testing', line: 'Optical Time Domain Reflectometry to find faults and certify links.' },
];

export const QUALITY_PROMISE: string[] = ['our people', 'our advice', 'our services', 'your solutions'];

export const CONTACT = {
  phone: '+44 (0)20 7096 0558',
  phoneHref: 'tel:+442070960558',
  email: 'info@openrainbow.co.uk',
  salesEmail: 'sales@openrainbow.co.uk',
  offices: [
    { label: 'Office', lines: ['4 Segraves', 'Boxworth', 'Cambridgeshire', 'CB23 4LS'] },
    { label: 'Registered office', lines: ['First Floor, 39 High Street', 'Billericay', 'CM12 9BA', 'United Kingdom'] },
  ] as Office[],
  registration: 'Registered in England & Wales',
};

export const ENQUIRY_TOPICS: string[] = [
  'General enquiry',
  'Infrastructure services',
  'Managed services',
  'Professional services',
  'OTDR fibre testing',
];
