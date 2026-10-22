/**
 * All website copy lives here, so content can be edited in one place.
 * Content is based on the current openrainbow.co.uk website.
 */

export interface Practice {
  id: string;
  title: string;
  summary: string;
  items: { title: string; text: string }[];
}

export interface Item {
  title: string;
  text: string;
  /** Detail page slug, when the item has its own page. */
  slug?: string;
}

export interface TechArea {
  title: string;
  text: string;
  vendors: string[];
}

export interface Office {
  label: string;
  lines: string[];
}

export const COMPANY = {
  name: 'Open Rainbow',
  legalName: 'Open Rainbow Ltd',
  founded: 2014,
  tagline: 'IT services & solutions',
};

export const VENDORS: string[] = [
  'Hewlett Packard Enterprise',
  'Cisco',
  'Microsoft',
  'VMware',
  'NetApp',
  'Dell',
  'IBM',
  'Oracle',
  'Pure Storage',
  'Veeam',
];

/** Design, deploy, operate, improve: the delivery approach, in order. */
export const APPROACH: Item[] = [
  { title: 'Design', text: 'We start by listening, then shape a solution around your current and future requirements.' },
  { title: 'Deploy', text: 'Procurement, build and implementation, managed by our project teams from start to finish.' },
  { title: 'Operate', text: '24/7 monitoring, service desk and maintenance that keep your systems running.' },
  { title: 'Improve', text: 'Regular reviews of capacity, availability and cost, so your IT keeps pace with the business.' },
];

export const PRACTICES: Practice[] = [
  {
    id: 'infrastructure',
    title: 'Infrastructure services',
    summary:
      'We help you harness emerging technologies while getting the most out of your legacy environments, whether that is fixing problems when they occur or optimising capacity and availability.',
    items: [
      { title: 'Contract management', text: 'Complete visibility and control of your supplier contracts, maximising performance and compliance.' },
      { title: 'Break/fix and monitoring', text: '24/7 monitoring with proactive maintenance, so minor issues never escalate into bigger problems.' },
      { title: 'Server and desktop virtualisation', text: 'A modern model of service delivery that moves beyond outdated hardware-centric architectures.' },
      { title: 'Hosting and cloud', text: 'Virtualised resources or cloud hosting with the scalability you need, and security and privacy built in.' },
    ],
  },
  {
    id: 'managed',
    title: 'Managed services',
    summary:
      'Managing IT assets can be resource heavy. Our managed services lighten the load, reduce risk and provide round-the-clock support, freeing your teams for more strategic work.',
    items: [
      { title: 'Business continuity', text: 'Every infrastructure event detected and alerted in real time to minimise downtime.' },
      { title: 'Disaster recovery', text: 'Protection for key data and applications, from DR plan testing to remote mirroring.' },
      { title: 'Lifecycle management', text: 'Regular reviews of your infrastructure to keep it configured to perform, and costs under control.' },
      { title: 'Remote support', text: 'Instant access to specialists who understand your systems and core business processes.' },
      { title: 'Service desk', text: 'A single point of contact, available 24/7 for faults, incidents and requests.' },
      { title: 'Infrastructure maintenance', text: 'Configuration conformity testing, driver renewal and hardware and software upgrades.' },
    ],
  },
  {
    id: 'professional',
    title: 'Professional services',
    summary:
      'Our IT professionals and project management teams establish where you are, where you want to be and how to get there, working with you from defining goals to procurement, deployment and beyond.',
    items: [
      { title: 'Consultancy', text: 'Business cases, assessments and roadmaps grounded in your current and future requirements.' },
      { title: 'Project management', text: 'Experienced project teams with an Agile, structured approach to delivery.' },
      { title: 'Procurement', text: 'Hardware and software sourced from leading vendors, specified to fit the solution.' },
      { title: 'Deployment', text: 'Build, configuration, testing and handover, with minimal disruption to your business.' },
    ],
  },
];

export const SPECIALIST_SERVICES: Item[] = [
  { slug: 'infrastructure-assessment', title: 'Infrastructure assessment', text: 'Evaluate, optimise and secure your IT infrastructure, with data-driven findings to plan your next steps.' },
  { slug: 'security-enhancements', title: 'Security enhancements', text: 'Measures to safeguard your data, systems and users against evolving threats.' },
  { slug: 'hardware-and-software-upgrades', title: 'Hardware and software upgrades', text: 'Upgrades that improve performance, close vulnerabilities and lower long-term running costs.' },
  { slug: 'scalability-and-optimisation', title: 'Scalability and optimisation', text: 'IT resources tuned for efficiency and performance, and ready to grow with you.' },
  { slug: 'redundancy-solutions', title: 'Redundancy solutions', text: 'Intelligent backup and failover strategies that keep operations running and minimise downtime.' },
  { slug: 'otdr-fibre-testing', title: 'OTDR fibre testing', text: 'Optical Time Domain Reflectometry for precise fibre testing, fault finding and link certification.' },
];

export const TECH_AREAS: TechArea[] = [
  { title: 'Data centre', text: 'Advanced, reliable and resilient infrastructure, built for your needs today and into the future.', vendors: ['HPE', 'VMware', 'Cisco', 'Dell EMC'] },
  { title: 'Storage', text: 'High application uptime, simplified data management and greater business agility.', vendors: ['NetApp', 'HPE', 'Pure Storage'] },
  { title: 'Backup and recovery', text: 'Reliable protection for business-critical data, on premise or in the cloud.', vendors: ['Veeam', 'HPE', 'NetApp'] },
  { title: 'Server virtualisation', text: 'Consolidate workloads on fewer servers, deploy applications faster and reduce downtime.', vendors: ['Microsoft', 'VMware'] },
  { title: 'Routing and switching', text: 'Secure, available networks for data, voice, video and wireless, with remote workers kept connected.', vendors: ['Cisco', 'HPE', 'IBM', 'Dell'] },
  { title: 'Unified communications', text: 'Real-time collaboration that delivers cost savings and helps your people work smarter.', vendors: ['Cisco', 'Microsoft'] },
  { title: 'End user computing', text: 'The applications, data and mobility your people need to work more effectively.', vendors: ['VMware', 'Microsoft', 'Oracle'] },
  { title: 'Hosting and cloud', text: 'Hyper-converged, on premise or cloud: we help you choose, and make the transition.', vendors: ['Microsoft', 'VMware'] },
];

export const OUTCOMES: Item[] = [
  { slug: 'improved-performance', title: 'Improved performance', text: 'Faster, more efficient systems and operations.' },
  { slug: 'enhanced-security', title: 'Enhanced security', text: 'Data, systems and users protected against evolving threats.' },
  { slug: 'cost-savings', title: 'Cost savings', text: 'Lower running costs and a better return on IT investment.' },
  { slug: 'reliability-and-redundancy', title: 'Reliability and redundancy', text: 'Resilient infrastructure and uninterrupted operations.' },
  { slug: 'future-proofing', title: 'Future-proofing', text: 'Technology that stays ready for what comes next.' },
];

export const FEATURED: { title: string; label: string; text: string }[] = [
  { label: 'Storage', title: 'Pure Storage RC20', text: 'Fixed-price enterprise storage, specified, supplied and supported by our team.' },
  { label: 'Data protection', title: 'Veeam Data Cloud', text: 'Backup and recovery delivered as a service, with no infrastructure to manage.' },
];

export const ENGAGEMENT: Item[] = [
  { title: 'Start a project together', text: 'From the first business case, through design, procurement and deployment.' },
  { title: 'Join at any stage', text: 'Already under way? We pick up wherever you are in your IT journey.' },
  { title: 'Ongoing partnership', text: 'Managed services and regular reviews that keep your IT performing.' },
];

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

/** General enquiry types. Service and solution pages are added as extra groups on the contact form. */
export const ENQUIRY_TOPICS: string[] = [
  'General enquiry',
  'Hardware and software sales',
  'Infrastructure services',
  'Managed services',
  'Professional services',
];
