import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { BlogData, Category, ContentPage, Post, ServicesData, SolutionsData } from '../models/content';

/**
 * Loads site content from the JSON files in /public/data.
 * Each file is requested once and cached for the session.
 */
@Injectable({ providedIn: 'root' })
export class ContentService {
  private readonly http = inject(HttpClient);

  readonly services$: Observable<ServicesData> = this.load<ServicesData>('services');
  readonly solutions$: Observable<SolutionsData> = this.load<SolutionsData>('solutions');

  /** Posts, newest first. */
  readonly posts$: Observable<Post[]> = this.load<BlogData>('blog').pipe(
    map((data) => [...data.posts].sort((a, b) => b.date.localeCompare(a.date))),
    shareReplay(1),
  );

  pages(category: Category): Observable<ContentPage[]> {
    // Map each typed stream before choosing between them. Calling pipe on a
    // union of differently typed Observables loses the operator overloads.
    if (category === 'services') {
      return this.services$.pipe(map((data) => data.items));
    }
    return this.solutions$.pipe(map((data) => data.items));
  }

  page(category: Category, slug: string): Observable<ContentPage | undefined> {
    return this.pages(category).pipe(map((items) => items.find((p) => p.slug === slug)));
  }

  post(slug: string): Observable<Post | undefined> {
    return this.posts$.pipe(map((posts) => posts.find((p) => p.slug === slug)));
  }

  private load<T>(name: string): Observable<T> {
    return this.http.get<T>(`data/${name}.json`).pipe(shareReplay(1));
  }
}
