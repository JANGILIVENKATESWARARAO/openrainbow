import type { Preview } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { inject, provideAppInitializer, provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { ContentService } from '../src/app/core/services/content.service';

const preview: Preview = {
  decorators: [
    // Same providers as the app: router, HttpClient and site.json loaded before render.
    applicationConfig({
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([]),
        provideHttpClient(withFetch()),
        provideAppInitializer(() => inject(ContentService).loadSite()),
      ],
    }),
    // Toolbar switch for the light and dark theme (sets <html data-theme>).
    withThemeByDataAttribute({
      themes: { light: 'light', dark: 'dark' },
      defaultTheme: 'light',
      attributeName: 'data-theme',
      parentSelector: 'html',
    }),
  ],
  parameters: {
    layout: 'padded',
    controls: { expanded: true },
    backgrounds: { disable: true },
    a11y: { test: 'todo' },
  },
};

export default preview;
