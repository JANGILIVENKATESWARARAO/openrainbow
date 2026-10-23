import { DOCUMENT, Injectable, effect, inject, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'or-theme';

/**
 * Light / dark theme.
 * Starts from the visitor's saved choice, otherwise follows the operating system.
 * Sets <html data-theme="..."> which switches every colour token in styles.scss.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly media = this.document.defaultView?.matchMedia?.('(prefers-color-scheme: dark)') ?? null;

  readonly theme = signal<Theme>(this.stored() ?? (this.media?.matches ? 'dark' : 'light'));

  constructor() {
    effect(() => {
      const theme = this.theme();
      const root = this.document.documentElement;
      root.setAttribute('data-theme', theme);
      root.style.colorScheme = theme;
      this.document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0f1114' : '#ffffff');
    });

    // Follow the operating system until the visitor picks a theme themselves.
    this.media?.addEventListener('change', (event) => {
      if (!this.stored()) this.theme.set(event.matches ? 'dark' : 'light');
    });
  }

  toggle(): void {
    this.set(this.theme() === 'dark' ? 'light' : 'dark');
  }

  set(theme: Theme): void {
    this.theme.set(theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Storage can be blocked (private mode); the theme still applies for this visit.
    }
  }

  private stored(): Theme | null {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      return value === 'light' || value === 'dark' ? value : null;
    } catch {
      return null;
    }
  }
}
