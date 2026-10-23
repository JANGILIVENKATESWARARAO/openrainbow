/**
 * Types for services.json, solutions.json and blog.json in /public/data.
 * The files can be edited without touching code. Site-wide copy is typed in site.ts.
 */

export interface Item {
  title: string;
  text: string;
}

export interface DetailSection {
  /** columns: plain three-up; grid: bordered cells; dark: navy band; steps: numbered sequence */
  layout: 'columns' | 'grid' | 'dark' | 'steps';
  eyebrow: string;
  title: string;
  items: Item[];
}

/** A service or solution with its own page. */
export interface ContentPage {
  slug: string;
  icon: string;
  title: string;
  /** Short text for cards and menus. */
  summary: string;
  tagline: string;
  lead: string;
  whatTitle: string;
  what: string;
  sections: DetailSection[];
}

export interface Practice {
  id: string;
  icon: string;
  title: string;
  summary: string;
  items: Item[];
}

export interface Technology {
  icon: string;
  title: string;
  text: string;
  vendors: string[];
}

export interface Offer {
  label: string;
  title: string;
  text: string;
}

export interface ServicesData {
  practices: Practice[];
  items: ContentPage[];
}

export interface SolutionsData {
  technologies: Technology[];
  items: ContentPage[];
  featured: Offer[];
}

/** One block of article body: a paragraph, a sub-heading (with anchor id) or a bullet list. */
export interface ArticleBlock {
  type: 'p' | 'h2' | 'ul';
  text?: string;
  id?: string;
  items?: string[];
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  /** ISO date, e.g. 2023-11-25 */
  date: string;
  readingMinutes: number;
  body: ArticleBlock[];
}

export interface BlogData {
  posts: Post[];
}

export type Category = 'services' | 'solutions';
