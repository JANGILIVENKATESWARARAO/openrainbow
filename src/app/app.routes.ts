import { Routes } from '@angular/router';
import { contentPageResolver, contentPageTitle, postResolver, postTitle, siteTitle } from './core/resolvers';
import { NotFoundComponent } from './pages/not-found/not-found.component';

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
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog.component').then((m) => m.BlogComponent),
    title: siteTitle((site) => site.pages.blog.crumb),
  },
  {
    path: 'blog/:slug',
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
  // Old Insights links keep working.
  { path: 'insights', redirectTo: 'blog', pathMatch: 'full' },
  { path: 'insights/:slug', redirectTo: 'blog/:slug' },
  // 404: loaded with the app (no wait) and never shows the page loader.
  {
    path: '**',
    component: NotFoundComponent,
    data: { loader: false },
    title: siteTitle((site) => site.pages.notFound.eyebrow ?? ''),
  },
];
