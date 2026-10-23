import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ActivatedRouteSnapshot, TitleStrategy, provideRouter, withComponentInputBinding, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { ContentService } from './core/services/content.service';
import { ThemeService } from './core/services/theme.service';
import { SiteTitleStrategy } from './core/title.strategy';
import { provideIcons } from './shared/icon/icons';

/** Full path of a route snapshot, e.g. "services/managed-it". */
function routePath(route: ActivatedRouteSnapshot): string {
  const parts: string[] = [];
  for (let r: ActivatedRouteSnapshot | null = route; r; r = r.firstChild) {
    parts.push(...r.url.map((segment) => segment.path));
  }
  return parts.join('/');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' }),
      // Soft fade between pages (browsers without view transitions just change page).
      // Skipped when only the #fragment or query changes, e.g. "On this page" links.
      withViewTransitions({
        onViewTransitionCreated: ({ transition, from, to }) => {
          if (routePath(from) === routePath(to)) transition.skipTransition();
        },
      }),
    ),
    provideHttpClient(withFetch()),
    provideIcons(),
    { provide: TitleStrategy, useClass: SiteTitleStrategy },
    // Load site.json before the first render, and apply the saved theme.
    provideAppInitializer(() => {
      inject(ThemeService);
      return inject(ContentService).loadSite();
    }),
  ],
};
