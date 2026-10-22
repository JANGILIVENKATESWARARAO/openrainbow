import { Routes } from '@angular/router';
import { DETAIL_PAGES } from './core/data/detail-pages';

const detailPage = () => import('./pages/detail/detail.component').then((m) => m.DetailComponent);

/** Old Wix URLs, redirected so existing links and search results keep working. */
const legacyRedirects: Routes = [
  { path: 'what-we-do', redirectTo: 'services', pathMatch: 'full' },
  { path: 'copia-di-solutions', redirectTo: 'services', pathMatch: 'full' },
  { path: 'general-4-1', redirectTo: 'solutions', pathMatch: 'full' },
  ...DETAIL_PAGES.map((p) => ({ path: p.legacyPath, redirectTo: `${p.category}/${p.slug}`, pathMatch: 'full' as const })),
];

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Open Rainbow | IT services & solutions',
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then((m) => m.ServicesComponent),
    title: 'Services | Open Rainbow',
  },
  // Title for detail pages is set by the component from its content.
  { path: 'services/:slug', loadComponent: detailPage, data: { category: 'services' } },
  {
    path: 'solutions',
    loadComponent: () => import('./pages/solutions/solutions.component').then((m) => m.SolutionsComponent),
    title: 'Solutions | Open Rainbow',
  },
  { path: 'solutions/:slug', loadComponent: detailPage, data: { category: 'solutions' } },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'About us | Open Rainbow',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact | Open Rainbow',
  },
  ...legacyRedirects,
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
    title: 'Page not found | Open Rainbow',
  },
];
