import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { TitleStrategy, provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { ContentService } from './core/services/content.service';
import { ThemeService } from './core/services/theme.service';
import { SiteTitleStrategy } from './core/title.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' }),
    ),
    provideHttpClient(withFetch()),
    { provide: TitleStrategy, useClass: SiteTitleStrategy },
    // Load site.json before the first render, and apply the saved theme.
    provideAppInitializer(() => {
      inject(ThemeService);
      return inject(ContentService).loadSite();
    }),
  ],
};
