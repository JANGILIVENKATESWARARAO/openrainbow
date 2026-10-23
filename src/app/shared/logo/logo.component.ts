import { Component, computed, inject, input } from '@angular/core';
import { ContentService } from '../../core/services/content.service';
import { ThemeService } from '../../core/services/theme.service';

/**
 * Open Rainbow logo.
 * Dark text on the light theme, white text on the dark theme and on dark bands (inverse).
 * Files: public/images/logo-light.svg and public/images/logo-dark.svg.
 */
@Component({
  selector: 'or-logo',
  template: `<img [src]="src()" [alt]="name()" width="413" height="88" />`,
  host: { '[class.is-inverse]': 'inverse()' },
  styles: [
    `
      :host { display: inline-flex; align-items: center; }
      img { display: block; width: auto; height: 40px; }
      :host(.is-inverse) img { height: 44px; }
    `,
  ],
})
export class LogoComponent {
  private readonly theme = inject(ThemeService).theme;
  private readonly site = inject(ContentService).site;

  /** White version for dark backgrounds (footer). */
  readonly inverse = input(false);

  protected readonly name = computed(() => this.site().company.name);
  protected readonly src = computed(() =>
    this.inverse() || this.theme() === 'dark' ? 'images/logo-dark.svg' : 'images/logo-light.svg',
  );
}
