/**
 * Types for /public/data/site.json: company details, navigation and every page's copy.
 * Text may contain {founded}, {years} or {vendors}; see ContentService.fill().
 */
import type { Item } from './content';

export interface Link {
  label: string;
  path: string;
}

/** A heading block: optional pill label, title with an emphasised ending, optional lead. */
export interface Heading {
  eyebrow?: string;
  title: string;
  emphasis?: string;
  lead?: string;
}

export interface PageHeading extends Heading {
  crumb: string;
}

export interface Office {
  label: string;
  lines: string[];
}

export interface NavItem extends Link {
  /** Shows a dropdown with the pages from services.json or solutions.json. */
  menu?: 'services' | 'solutions';
}

export interface StatusRow {
  system: string;
  detail: string;
  state: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SiteData {
  company: { name: string; legalName: string; founded: number; tagline: string; summary: string };
  contact: {
    phone: string;
    phoneHref: string;
    email: string;
    salesEmail: string;
    registration: string;
    offices: Office[];
  };
  navigation: NavItem[];
  header: { cta: Link; viewAll: string };
  footer: { companyLabel: string; servicesLabel: string; solutionsLabel: string; links: Link[]; salesLabel: string };
  vendors: string[];
  enquiryTopics: string[];
  cta: { title: string; text: string; primary: string; phonePrefix: string };
  home: {
    hero: Heading & { primary: Link; secondary: Link; checks: string[] };
    monitoring: {
      title: string;
      live: string;
      rows: StatusRow[];
      footLabel: string;
      footValue: string;
      coverage: { label: string; stats: Stat[] };
      desk: {
        label: string;
        ringLabel: string;
        ringValue: string;
        ringSub: string;
        ringPercent: number;
        items: { icon: string; text: string }[];
      };
      note: string;
    };
    vendorsLabel: string;
    services: Heading & { cta: Link; more: string };
    practices: Heading;
    approach: Heading & { steps: Item[] };
    technologies: Heading & { link: Link; count: number };
    outcomes: { eyebrow: string };
    featured: Heading & { cta: string; topic: string };
    quote: string;
  };
  pages: {
    services: PageHeading & { specialist: Heading; more: string };
    solutions: PageHeading & {
      outcomes: Heading;
      technologies: Heading;
      featured: Heading;
      featuredCta: string;
      more: string;
      cta: { title: string; topic: string };
    };
    detail: {
      benefitsLabel: string;
      specialist: { label: string; text: string; cta: string };
      related: { eyebrow: string; title: string; emphasis: string; link: string };
    };
    blog: PageHeading & { empty: string; cta: string; readTime: string };
    article: {
      crumb: string;
      authorRole: string;
      outline: string;
      share: string;
      back: string;
      more: string;
      readTime: string;
      cta: string;
    };
    about: PageHeading & {
      facts: { label: string; value: string }[];
      storyLead: string;
      story: string[];
      engagement: Heading & { items: Item[] };
      offices: Heading;
    };
    contact: PageHeading & {
      topicGroup: string;
      sent: { title: string; text: string; again: string };
      details: { phone: string; email: string; sales: string };
    };
    notFound: Heading & { cta: Link };
  };
}
