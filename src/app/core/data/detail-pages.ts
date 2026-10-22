/**
 * Content for the service and solution detail pages.
 * Based on the internal pages of the current openrainbow.co.uk website.
 */
import type { Item } from './site-content';

export type DetailCategory = 'services' | 'solutions';

export interface DetailSection {
  /** columns: plain three-up; grid: bordered cells; dark: navy band; steps: numbered sequence */
  layout: 'columns' | 'grid' | 'dark' | 'steps';
  eyebrow: string;
  title: string;
  items: Item[];
}

export interface DetailPage {
  slug: string;
  category: DetailCategory;
  title: string;
  tagline: string;
  lead: string;
  whatTitle: string;
  what: string;
  sections: DetailSection[];
  /** Old Wix URL, redirected to the new page. */
  legacyPath: string;
}

export const CATEGORY_LABEL: Record<DetailCategory, string> = {
  services: 'Services',
  solutions: 'Solutions',
};

export const DETAIL_PAGES: DetailPage[] = [
  /* ---------------------------------------------------------------- Services */
  {
    slug: 'infrastructure-assessment',
    category: 'services',
    legacyPath: 'general-4',
    title: 'Infrastructure assessment',
    tagline: 'Optimise. Fortify. Thrive.',
    lead: 'A robust, secure IT infrastructure is essential to business success. Our assessment identifies where to improve, so you can make data-driven decisions about your IT environment.',
    whatTitle: 'Why an assessment is the first step',
    what: 'Technology keeps changing, and so do the risks. An infrastructure assessment gives you a clear, independent view of where you are today, what is holding you back and what to prioritise next.',
    sections: [
      {
        layout: 'columns',
        eyebrow: 'Why it matters',
        title: 'Know where you stand.',
        items: [
          { title: 'Optimise efficiency', text: 'Uncover the inefficiencies and weak points that stop your business operating at its best.' },
          { title: 'Mitigate risk', text: 'Identify vulnerabilities and protect sensitive data against increasingly sophisticated cyber threats.' },
          { title: 'Plan for the future', text: 'Prepare for technology change and set out a long-term strategy for growth.' },
        ],
      },
      {
        layout: 'grid',
        eyebrow: "What's included",
        title: 'A complete review of your environment.',
        items: [
          { title: 'Comprehensive analysis', text: 'A thorough inspection of every part of your IT environment, from servers and networks to security.' },
          { title: 'Detailed reporting', text: 'In-depth findings with clear, prioritised recommendations for improvement.' },
          { title: 'Personal consultation', text: 'We work with you to build a tailored action plan around your specific needs.' },
        ],
      },
      {
        layout: 'dark',
        eyebrow: 'Benefits',
        title: 'What you gain.',
        items: [
          { title: 'Maximum efficiency', text: 'Lower operating costs and better overall business efficiency.' },
          { title: 'Stronger security', text: 'Your data and sensitive information protected from security risks.' },
          { title: 'Strategic planning', text: 'A strong technology foundation for the future of your business.' },
        ],
      },
    ],
  },
  {
    slug: 'hardware-and-software-upgrades',
    category: 'services',
    legacyPath: 'copia-di-infrastructure-assessment',
    title: 'Hardware and software upgrades',
    tagline: 'Enhance performance, security and efficiency',
    lead: 'Planned upgrades that keep your systems fast, secure and in step with current technology, delivered with minimal disruption to your business.',
    whatTitle: 'What are hardware and software upgrades?',
    what: 'Upgrades are the process of enhancing and updating your IT infrastructure. As technology moves on, they keep your systems efficient, secure and compatible with the platforms your business depends on.',
    sections: [
      {
        layout: 'columns',
        eyebrow: 'Why it matters',
        title: 'Systems that keep up with your business.',
        items: [
          { title: 'Better performance', text: 'Upgrades bring speed, efficiency and new functionality, so your systems run at their full potential.' },
          { title: 'Stronger security', text: 'Regular updates close vulnerabilities and protect your data and systems from evolving threats.' },
          { title: 'Cost efficiency', text: 'Optimised hardware and software reduce long-term running costs and improve return on investment.' },
        ],
      },
      {
        layout: 'grid',
        eyebrow: "What's included",
        title: 'End-to-end upgrade delivery.',
        items: [
          { title: 'Hardware enhancements', text: 'Replacing or adding components such as CPUs, memory and storage to improve system performance.' },
          { title: 'Software updates', text: 'Operating systems, applications and software packages kept up to date for compatibility, security and features.' },
          { title: 'Optimisation strategies', text: 'Tailored tuning of your infrastructure for maximum efficiency and performance.' },
        ],
      },
      {
        layout: 'dark',
        eyebrow: 'Benefits',
        title: 'What you gain.',
        items: [
          { title: 'Improved performance', text: 'Faster processing, lower latency and more productive teams.' },
          { title: 'Advanced security', text: 'Up-to-date, secure systems that protect your data and operations.' },
          { title: 'Cost savings', text: 'Less downtime, better use of resources and a longer life for your IT assets.' },
        ],
      },
    ],
  },
  {
    slug: 'security-enhancements',
    category: 'services',
    legacyPath: 'copia-di-redundancy-solutions',
    title: 'Security enhancements',
    tagline: 'Fortify your IT infrastructure for maximum protection',
    lead: 'Cyber threats never stand still. Our security enhancements strengthen the protective measures across your infrastructure to safeguard your digital assets and operations.',
    whatTitle: 'What are security enhancements?',
    what: 'Security enhancements raise the level of protection across your IT infrastructure. They combine proven technologies, regular updates and best practice to keep your organisation resilient against attack.',
    sections: [
      {
        layout: 'columns',
        eyebrow: 'Why it matters',
        title: 'Resilience against modern threats.',
        items: [
          { title: 'Advanced threat defence', text: 'Robust protection against evolving cyber threats keeps your organisation resilient against sophisticated attacks.' },
          { title: 'Data protection', text: 'Sensitive data safeguarded from unauthorised access, alteration and loss, preserving integrity and compliance.' },
          { title: 'Business continuity', text: 'Less downtime and less impact from security incidents, keeping operations running.' },
        ],
      },
      {
        layout: 'grid',
        eyebrow: "What's included",
        title: 'Layered, up-to-date protection.',
        items: [
          { title: 'Advanced threat detection', text: 'Intrusion detection, behaviour analytics and malware scanning to detect and prevent a wide range of threats.' },
          { title: 'Data encryption', text: 'Robust encryption that adds an extra layer of defence to your sensitive information.' },
          { title: 'Regular security updates', text: 'Protocols, software and patches kept current, so your defences stay ahead of new threats.' },
        ],
      },
      {
        layout: 'dark',
        eyebrow: 'Benefits',
        title: 'What you gain.',
        items: [
          { title: 'Threats stopped', text: 'Protection from malware, phishing and other cybercrime, reducing downtime and data loss.' },
          { title: 'Trust and reputation', text: 'A visible commitment to protecting the data of your clients and partners.' },
          { title: 'Regulatory compliance', text: 'Lower risk of penalties, legal issues and reputational damage under data protection law.' },
        ],
      },
    ],
  },
  {
    slug: 'scalability-and-optimisation',
    category: 'services',
    legacyPath: 'copia-di-security-enhancements',
    title: 'Scalability and optimisation',
    tagline: "Unlock your infrastructure's full potential",
    lead: 'Infrastructure that grows when your business does, and runs at peak efficiency in the meantime.',
    whatTitle: 'What are scalability and optimisation?',
    what: 'Scalability is the ability of your systems to adapt and grow. Optimisation is the fine-tuning that keeps them performing at their best. Together, they make sure your technology investment delivers full value.',
    sections: [
      {
        layout: 'columns',
        eyebrow: 'Why it matters',
        title: 'Ready to grow, efficient today.',
        items: [
          { title: 'Future-proof infrastructure', text: 'An IT environment that adapts and grows with the evolving needs of your business.' },
          { title: 'Better performance', text: 'Faster, more efficient operations, streamlined workflows and higher productivity.' },
          { title: 'Cost efficiency', text: 'Lower long-term costs and a better return on your technology investments.' },
        ],
      },
      {
        layout: 'grid',
        eyebrow: "What's included",
        title: 'From assessment to implementation.',
        items: [
          { title: 'Comprehensive assessment', text: 'A detailed evaluation of your infrastructure to identify where to optimise and how to scale.' },
          { title: 'Tailored strategies', text: 'Plans aligned to your business objectives, so your infrastructure can scale when it needs to.' },
          { title: 'Implementation', text: 'Procurement, installation and configuration of the right solutions, managed by our experts.' },
        ],
      },
      {
        layout: 'dark',
        eyebrow: 'Benefits',
        title: 'What you gain.',
        items: [
          { title: 'Agility', text: 'An environment that adapts and grows, keeping your business competitive.' },
          { title: 'Enhanced performance', text: 'More productivity and more value from the technology you already own.' },
          { title: 'Cost efficiency', text: 'Streamlined IT costs and lower long-term expenses.' },
        ],
      },
    ],
  },
  {
    slug: 'redundancy-solutions',
    category: 'services',
    legacyPath: 'copia-di-hardware-and-software-upgrades',
    title: 'Redundancy solutions',
    tagline: 'Elevate reliability and business continuity',
    lead: 'Backup and failover built into your infrastructure, so your systems stay available even when something fails.',
    whatTitle: 'What are redundancy solutions?',
    what: 'Redundancy solutions add backup and failover mechanisms to your IT infrastructure. When downtime is costly, they keep your systems operational through unexpected hardware or software failures.',
    sections: [
      {
        layout: 'columns',
        eyebrow: 'Why it matters',
        title: 'No single point of failure.',
        items: [
          { title: 'Continuous uptime', text: 'Uninterrupted access to critical systems and data, whatever fails.' },
          { title: 'Disaster resilience', text: 'A vital part of disaster recovery, so you can recover quickly without significant data loss or downtime.' },
          { title: 'Customer trust', text: 'Consistent, dependable service that strengthens your reputation.' },
        ],
      },
      {
        layout: 'grid',
        eyebrow: "What's included",
        title: 'Resilience at every layer.',
        items: [
          { title: 'Failover systems', text: 'Backup servers, data centres and redundant network connections that take over if primary systems fail.' },
          { title: 'Data replication', text: 'Redundant copies of your data in geographically diverse locations.' },
          { title: 'Load balancing', text: 'Traffic distributed across multiple servers for optimal performance and no single overload.' },
        ],
      },
      {
        layout: 'dark',
        eyebrow: 'Benefits',
        title: 'What you gain.',
        items: [
          { title: 'Business continuity', text: 'Operations that continue through hardware failures and unforeseen events.' },
          { title: 'Data protection', text: 'Critical data safeguarded, with integrity and regulatory compliance maintained.' },
          { title: 'Customer satisfaction', text: 'Consistent uptime that builds long-lasting customer relationships.' },
        ],
      },
    ],
  },
  {
    slug: 'otdr-fibre-testing',
    category: 'services',
    legacyPath: 'copia-di-infrastructure-assessment-1',
    title: 'OTDR fibre testing',
    tagline: 'Precision optical fibre testing',
    lead: 'Specialist Optical Time Domain Reflectometry (OTDR) testing for organisations upgrading their networks, with accurate results and minimal disruption.',
    whatTitle: 'Why OTDR testing?',
    what: 'A reliable network depends on healthy fibre. OTDR testing measures the condition of every link, locating faults, losses and weak points before they cause outages, so you can upgrade with confidence.',
    sections: [
      {
        layout: 'grid',
        eyebrow: 'Why choose us',
        title: 'Accurate testing, expert analysis.',
        items: [
          { title: 'Latest technology', text: 'Current OTDR equipment for precise, accurate measurement of your optical fibre.' },
          { title: 'Experienced engineers', text: 'Skilled technicians who test thoroughly with minimal disruption to your operations.' },
          { title: 'In-depth analysis', text: 'Detailed insight into the health and performance of your fibre infrastructure.' },
          { title: 'Time and cost efficiency', text: 'A fast, accurate process that reduces downtime and the cost of network disruption.' },
          { title: 'Tailored to your project', text: 'Testing adapted to your upgrade, whether you are extending a network or adding new components.' },
        ],
      },
      {
        layout: 'steps',
        eyebrow: 'How we work',
        title: 'From consultation to implementation.',
        items: [
          { title: 'Consultation', text: 'We start by understanding your network requirements and objectives.' },
          { title: 'Testing', text: 'Our technicians carry out comprehensive OTDR testing of your optical fibre.' },
          { title: 'Analysis', text: 'You receive a detailed analysis of the results, with clear recommendations.' },
          { title: 'Implementation', text: 'We help you carry out the changes, upgrades or repairs that improve performance.' },
        ],
      },
    ],
  },

  /* --------------------------------------------------------------- Solutions */
  {
    slug: 'improved-performance',
    category: 'solutions',
    legacyPath: 'copia-di-infrastructure-assessment-2',
    title: 'Improved performance',
    tagline: 'Elevate your IT performance',
    lead: 'Optimise and fine-tune your IT environment for peak efficiency, so your people and systems get more done.',
    whatTitle: 'What is improved performance?',
    what: 'Improved performance solutions optimise your infrastructure, applications and workflows. When speed matters, they help organisations of every size operate faster and more effectively.',
    sections: [
      {
        layout: 'columns',
        eyebrow: 'Why it matters',
        title: 'Speed is a business advantage.',
        items: [
          { title: 'Greater efficiency', text: 'Faster operations, lower latency and tasks completed more effectively.' },
          { title: 'Cost optimisation', text: 'Streamlined workflows and less wasted resource improve your return on IT investment.' },
          { title: 'Competitive advantage', text: 'High-performing systems let you respond quickly to change and serve customers better.' },
        ],
      },
      {
        layout: 'grid',
        eyebrow: "What's included",
        title: 'Measure, improve, sustain.',
        items: [
          { title: 'Comprehensive analysis', text: 'A detailed assessment of your environment to find bottlenecks and areas to improve.' },
          { title: 'Tailored strategies', text: 'Customised changes that optimise your infrastructure, applications and workflows.' },
          { title: 'Performance monitoring', text: 'Continuous monitoring and tuning to keep systems performing over time.' },
        ],
      },
      {
        layout: 'dark',
        eyebrow: 'Benefits',
        title: 'What you gain.',
        items: [
          { title: 'Higher productivity', text: 'Your team accomplishes more in less time.' },
          { title: 'Cost savings', text: 'Better resource use and a stronger return on investment.' },
          { title: 'Competitive edge', text: 'Systems that help you outpace competitors and delight customers.' },
        ],
      },
    ],
  },
  {
    slug: 'enhanced-security',
    category: 'solutions',
    legacyPath: 'copia-di-infrastructure-assessment-3',
    title: 'Enhanced security',
    tagline: 'Fortify your IT environment',
    lead: 'An advanced approach to protecting your digital assets, sensitive data and operations.',
    whatTitle: 'What is enhanced security?',
    what: 'Enhanced security is an advanced level of protection for your digital assets, data and IT operations. It brings together modern security technology, strategy and best practice to strengthen your whole infrastructure.',
    sections: [
      {
        layout: 'columns',
        eyebrow: 'Why it matters',
        title: 'Protection that keeps pace.',
        items: [
          { title: 'Protection from advanced threats', text: 'Comprehensive defence that keeps your business resilient against sophisticated attacks.' },
          { title: 'Data integrity', text: 'Critical data protected from unauthorised access, alteration or loss, supporting trust and compliance.' },
          { title: 'Business continuity', text: 'Less downtime and smaller impact from incidents, keeping operations running.' },
        ],
      },
      {
        layout: 'grid',
        eyebrow: "What's included",
        title: 'Defence in depth.',
        items: [
          { title: 'Firewalls and intrusion detection', text: 'Advanced firewalls and intrusion detection as the first line of defence.' },
          { title: 'Data encryption', text: 'Encryption that protects sensitive information from unauthorised access.' },
          { title: 'Regular security updates', text: 'Protocols and software updated consistently to stay ahead of new threats.' },
        ],
      },
      {
        layout: 'dark',
        eyebrow: 'Benefits',
        title: 'What you gain.',
        items: [
          { title: 'Proactive threat mitigation', text: 'Protection from malware, phishing and cybercrime, reducing downtime and data loss.' },
          { title: 'Brand trust', text: 'Stronger relationships built on a clear commitment to protecting data.' },
          { title: 'Regulatory compliance', text: 'Reduced risk of penalties, legal issues and reputational damage.' },
        ],
      },
    ],
  },
  {
    slug: 'reliability-and-redundancy',
    category: 'solutions',
    legacyPath: 'copia-di-cost-savings-solutions',
    title: 'Reliability and redundancy',
    tagline: 'Dependable IT for uninterrupted operations',
    lead: 'Infrastructure designed for continuous, fault-tolerant operation, because downtime is always costly.',
    whatTitle: 'What are reliability and redundancy?',
    what: 'Reliability and redundancy solutions build an IT infrastructure that keeps running when things go wrong. Critical data and applications stay available, even through unexpected failures.',
    sections: [
      {
        layout: 'columns',
        eyebrow: 'Why it matters',
        title: 'Always available.',
        items: [
          { title: 'Uninterrupted operations', text: 'Consistent access to critical data and applications, even when issues arise.' },
          { title: 'Risk mitigation', text: 'Less exposure to system failures, disasters and cyber threats.' },
          { title: 'Operational efficiency', text: 'Less downtime, higher productivity and happier customers.' },
        ],
      },
      {
        layout: 'grid',
        eyebrow: "What's included",
        title: 'Built to keep running.',
        items: [
          { title: 'Failover mechanisms', text: 'Backup systems and data centres that take over seamlessly if primary systems fail.' },
          { title: 'Geographically diverse backups', text: 'Redundant copies of data held in different locations to protect against disasters and outages.' },
          { title: 'Load distribution', text: 'Load balancing that maintains performance and prevents server overload.' },
        ],
      },
      {
        layout: 'dark',
        eyebrow: 'Benefits',
        title: 'What you gain.',
        items: [
          { title: 'Continuous operations', text: 'Systems and data available whenever your business needs them.' },
          { title: 'Business continuity', text: 'Robust protection against data loss and disruption.' },
          { title: 'Enhanced reputation', text: 'Reliable services that build customer trust and satisfaction.' },
        ],
      },
    ],
  },
  {
    slug: 'future-proofing',
    category: 'solutions',
    legacyPath: 'copia-di-reliability-and-redundancy',
    title: 'Future-proofing',
    tagline: 'IT resilience for tomorrow',
    lead: 'Design and run IT systems that adapt to new technology and business change, without disruptive overhauls.',
    whatTitle: 'What is future-proofing?',
    what: 'Future-proofing is the design and implementation of IT systems and strategies that adapt and endure as technology and business requirements evolve.',
    sections: [
      {
        layout: 'columns',
        eyebrow: 'Why it matters',
        title: 'Stay ready for what comes next.',
        items: [
          { title: 'Adaptability', text: 'Systems that adapt to new technologies and requirements, keeping you competitive.' },
          { title: 'Risk mitigation', text: 'Lower risk of obsolescence, data loss and security breaches.' },
          { title: 'Cost efficiency', text: 'Fewer updates and replacements, and lower cost over the long term.' },
        ],
      },
      {
        layout: 'grid',
        eyebrow: "What's included",
        title: 'Designed to evolve.',
        items: [
          { title: 'Scalable architecture', text: 'Systems designed to grow with your needs, without a complete overhaul.' },
          { title: 'Integration flexibility', text: 'Solutions that work with a wide range of technologies as the industry moves on.' },
          { title: 'Regular evaluations', text: 'Periodic reviews that keep your environment aligned with technology trends and business goals.' },
        ],
      },
      {
        layout: 'dark',
        eyebrow: 'Benefits',
        title: 'What you gain.',
        items: [
          { title: 'Longevity', text: 'Systems that deliver value for years, with fewer replacements.' },
          { title: 'Agility', text: 'New technologies adopted easily as market conditions change.' },
          { title: 'Cost savings', text: 'Fewer disruptive overhauls and refreshes over time.' },
        ],
      },
    ],
  },
  {
    slug: 'cost-savings',
    category: 'solutions',
    legacyPath: 'copia-di-enhanced-security',
    title: 'Cost savings',
    tagline: 'Optimise your IT costs for sustainable success',
    lead: 'Reduce and optimise your IT spend while maintaining, or improving, performance and security.',
    whatTitle: 'What are cost savings solutions?',
    what: 'Cost savings solutions reduce and optimise IT expenditure without compromising performance. They make sure every pound spent on technology delivers value to your business.',
    sections: [
      {
        layout: 'columns',
        eyebrow: 'Why it matters',
        title: 'Technology as an asset, not a drain.',
        items: [
          { title: 'Financial efficiency', text: 'Lower IT costs that free up capital for other strategic investments.' },
          { title: 'Optimised ROI', text: 'A higher return on your IT systems, so technology adds value rather than cost.' },
          { title: 'Sustainability', text: 'Savings that last, supporting financial stability and competitiveness.' },
        ],
      },
      {
        layout: 'steps',
        eyebrow: 'How we work',
        title: 'Analyse, adjust, monitor.',
        items: [
          { title: 'Cost analysis', text: 'A comprehensive review of your current IT spend to find where costs can be reduced.' },
          { title: 'Strategic adjustments', text: 'Strategies that streamline costs without compromising performance or security.' },
          { title: 'Implementation and monitoring', text: 'We put the plan into action and monitor results to make sure savings are sustained.' },
        ],
      },
    ],
  },
];

export function findDetailPage(category: DetailCategory, slug: string): DetailPage | undefined {
  return DETAIL_PAGES.find((p) => p.category === category && p.slug === slug);
}

export function pagesIn(category: DetailCategory): DetailPage[] {
  return DETAIL_PAGES.filter((p) => p.category === category);
}
