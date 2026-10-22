import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, RedirectCommand, ResolveFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { Category, ContentPage, Post } from './models/content';
import { ContentService } from './services/content.service';

const SITE = 'Open Rainbow';

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
      .pipe(map((page) => (page ? `${page.title} | ${SITE}` : SITE)));
}

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
    .pipe(map((post) => (post ? `${post.title} | ${SITE}` : SITE)));
