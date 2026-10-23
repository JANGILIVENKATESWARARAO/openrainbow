import { Component, computed, inject, input } from '@angular/core';
import { ContentService } from '../../core/services/content.service';

/** Open Rainbow wordmark with monogram. */
@Component({
  selector: 'or-logo',
  template: `
    <span class="mono" aria-hidden="true">{{ initials() }}</span>
    <span class="word">
      <span class="word__name">{{ company().name }}</span>
      <span class="word__tag">{{ company().tagline }}</span>
    </span>
  `,
  host: { '[class.is-inverse]': 'inverse()' },
  styles: [
    `
      :host { display: inline-flex; align-items: center; gap: 12px; color: var(--ink); }
      .mono {
        display: grid;
        place-items: center;
        width: 40px;
        height: 40px;
        border-radius: 10px;
        background: var(--btn-bg);
        color: var(--btn-fg);
        font: 600 16px/1 var(--font-sans);
        letter-spacing: 0.04em;
      }
      .word { display: grid; gap: 3px; }
      .word__name { font: 600 20px/1 var(--font-sans); letter-spacing: -0.01em; }
      .word__tag {
        font: 600 12px/1 var(--font-sans);
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--muted);
      }
      :host(.is-inverse) { color: var(--on-band); }
      :host(.is-inverse) .mono { background: var(--on-band); color: var(--navy-800); }
      :host(.is-inverse) .word__tag { color: var(--on-dark-muted); }
    `,
  ],
})
export class LogoComponent {
  private readonly site = inject(ContentService).site;
  protected readonly company = computed(() => this.site().company);
  /** White version for dark backgrounds. */
  readonly inverse = input(false);

  protected readonly initials = computed(() =>
    this.company()
      .name.split(/\s+/)
      .map((word) => word[0])
      .join('')
      .slice(0, 2)
      .toUpperCase(),
  );
}
