import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { EnvironmentProviders, Provider, provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ContentService } from '../app/core/services/content.service';
import { provideIcons } from '../app/shared/icon/icons';
import site from '../../public/data/site.json';
import services from '../../public/data/services.json';
import solutions from '../../public/data/solutions.json';
import blog from '../../public/data/blog.json';
import type { SiteData } from '../app/core/models/site';
import type { BlogData, ServicesData, SolutionsData } from '../app/core/models/content';

/** The real JSON content, typed, for use in specs. */
export const testSite = site as unknown as SiteData;
export const testServices = services as unknown as ServicesData;
export const testSolutions = solutions as unknown as SolutionsData;
export const testBlog = blog as unknown as BlogData;

const FILES: Record<string, unknown> = { site, services, solutions, blog };

/** Same core providers as the app (zoneless, router, HttpClient, icons), with a fake HTTP backend. */
export const testProviders: (Provider | EnvironmentProviders)[] = [
  provideZonelessChangeDetection(),
  provideRouter([]),
  provideHttpClient(),
  provideHttpClientTesting(),
  provideIcons(),
];

/** Answers every pending JSON request with the matching file from public/data. */
export function flushContent(): void {
  const http = TestBed.inject(HttpTestingController);
  for (const req of http.match(() => true)) {
    const name = Object.keys(FILES).find((file) => req.request.url.endsWith(`/${file}.json`));
    if (name) req.flush(FILES[name]);
  }
}

/** Loads site.json into ContentService, as the app initializer does before the first render. */
export async function loadSite(): Promise<void> {
  const ready = TestBed.inject(ContentService).loadSite();
  flushContent();
  await ready;
}
