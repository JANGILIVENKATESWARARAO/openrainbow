import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, catchError, firstValueFrom, map, shareReplay, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BlogData, Category, ContentPage, Post, ServicesData, SolutionsData } from '../models/content';
import { SiteData } from '../models/site';
import { contentUrl } from './content-url';

export type ContentFile = keyof typeof environment.content.remoteUrls;

/**
 * Loads all site content from JSON.
 * Local files in /public/data by default, or remote links when environment.content.remote is true.
 * Each file is requested once and cached for the session.
 */
@Injectable({ providedIn: 'root' })
export class ContentService {
  private readonly http = inject(HttpClient);

  /** site.json is loaded before the app starts (see app.config.ts). */
  private readonly siteState = signal<SiteData | null>(null);

  readonly site = computed<SiteData>(() => {
    const site = this.siteState();
    if (!site) throw new Error('site.json has not been loaded yet.');
    return site;
  });

  readonly services$: Observable<ServicesData> = this.load<ServicesData>('services');
  readonly solutions$: Observable<SolutionsData> = this.load<SolutionsData>('solutions');

  /** Posts, newest first. */
  readonly posts$: Observable<Post[]> = this.load<BlogData>('blog').pipe(
    map((data) => [...data.posts].sort((a, b) => b.date.localeCompare(a.date))),
    shareReplay(1),
  );

  /** Called once by the app initializer. */
  async loadSite(): Promise<void> {
    this.siteState.set(await firstValueFrom(this.load<SiteData>('site')));
  }

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

  /**
   * Replaces {founded}, {years}, {vendors} and any extra {keys} in JSON text.
   * Example: "IT services since {founded}" -> "IT services since 2014".
   */
  fill(text: string, extra: Record<string, string | number> = {}): string {
    const site = this.site();
    const values: Record<string, string | number> = {
      founded: site.company.founded,
      years: new Date().getFullYear() - site.company.founded,
      vendors: site.vendors.length,
      ...extra,
    };
    return text.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
  }

  private load<T>(name: ContentFile): Observable<T> {
    const { remote, remoteUrls, localPath, driveApiKey } = environment.content;
    const local = `${localPath}/${name}.json`;
    const remoteUrl = remote ? contentUrl(remoteUrls[name], driveApiKey) : '';

    if (!remoteUrl) {
      return this.http.get<T>(local).pipe(shareReplay(1));
    }

    return this.http.get<T>(remoteUrl).pipe(
      catchError((error: unknown) => {
        console.warn(`Could not load ${name} from the remote link. Using the local copy.`, error);
        return this.http.get<T>(local).pipe(catchError(() => throwError(() => error)));
      }),
      shareReplay(1),
    );
  }
}
