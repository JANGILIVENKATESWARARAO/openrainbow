/**
 * Company-wide copy: contact details, approach and engagement models.
 * Services, solutions and blog content live in /public/data/*.json.
 */
import type { Item } from '../models/content';

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
