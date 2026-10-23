import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, RedirectCommand, ResolveFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { Category, ContentPage, Post } from './models/content';
import { SiteData } from './models/site';
import { ContentService } from './services/content.service';

/** Loads a service or solution page; unknown slugs go to the 404 page. */
export function contentPageResolver(category: Category): ResolveFn<ContentPage> {
  return (route: ActivatedRouteSnapshot) => {
    const router = inject(Router);
    return inject(ContentService)
      .page(category, route.paramMap.get('slug') ?? '')
      .pipe(map((page) => page ?? new RedirectCommand(router.parseUrl('/page-not-found'), { skipLocationChange: true })));
  };
}

export function contentPageTitle(category: Category): ResolveFn<string> {
  return (route: ActivatedRouteSnapshot) =>
    inject(ContentService)
      .page(category, route.paramMap.get('slug') ?? '')
      .pipe(map((page) => page?.title ?? ''));
}

/** Page titles come from the JSON; SiteTitleStrategy adds the company name. */
export const siteTitle =
  (pick: (site: SiteData) => string): ResolveFn<string> =>
  () =>
    pick(inject(ContentService).site());

/** Loads a blog post; unknown slugs go to the 404 page. */
export const postResolver: ResolveFn<Post> = (route) => {
  const router = inject(Router);
  return inject(ContentService)
    .post(route.paramMap.get('slug') ?? '')
    .pipe(map((post) => post ?? new RedirectCommand(router.parseUrl('/page-not-found'), { skipLocationChange: true })));
};

export const postTitle: ResolveFn<string> = (route) =>
  inject(ContentService)
    .post(route.paramMap.get('slug') ?? '')
    .pipe(map((post) => post?.title ?? ''));
