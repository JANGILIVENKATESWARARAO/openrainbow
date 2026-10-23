import { Routes } from '@angular/router';
import { contentPageResolver, contentPageTitle, postResolver, postTitle, siteTitle } from './core/resolvers';

const detailPage = () => import('./pages/detail/detail.component').then((m) => m.DetailComponent);

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: siteTitle(() => ''),
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then((m) => m.ServicesComponent),
    title: siteTitle((site) => site.pages.services.crumb),
  },
  {
    path: 'services/:slug',
    loadComponent: detailPage,
    data: { category: 'services' },
    resolve: { page: contentPageResolver('services') },
    title: contentPageTitle('services'),
  },
  {
    path: 'solutions',
    loadComponent: () => import('./pages/solutions/solutions.component').then((m) => m.SolutionsComponent),
    title: siteTitle((site) => site.pages.solutions.crumb),
  },
  {
    path: 'solutions/:slug',
    loadComponent: detailPage,
    data: { category: 'solutions' },
    resolve: { page: contentPageResolver('solutions') },
    title: contentPageTitle('solutions'),
  },
  {
    path: 'insights',
    loadComponent: () => import('./pages/insights/insights.component').then((m) => m.InsightsComponent),
    title: siteTitle((site) => site.pages.insights.crumb),
  },
  {
    path: 'insights/:slug',
    loadComponent: () => import('./pages/article/article.component').then((m) => m.ArticleComponent),
    resolve: { post: postResolver },
    title: postTitle,
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: siteTitle((site) => site.pages.about.crumb),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: siteTitle((site) => site.pages.contact.crumb),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
    title: siteTitle((site) => site.pages.notFound.eyebrow ?? ''),
  },
];
