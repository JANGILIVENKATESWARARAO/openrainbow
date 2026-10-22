import { Component, input } from '@angular/core';

/** Open Rainbow wordmark with monogram. */
@Component({
  selector: 'or-logo',
  template: `
    <span class="mono" aria-hidden="true">OR</span>
    <span class="word">
      <span class="word__name">Open Rainbow</span>
      <span class="word__tag">IT services &amp; solutions</span>
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
        border-radius: 6px;
        background: var(--navy-800);
        color: #fff;
        font: 600 16px/1 var(--font-sans);
        letter-spacing: 0.04em;
      }
      .word { display: grid; gap: 3px; }
      .word__name { font: 600 20px/1 var(--font-sans); letter-spacing: -0.01em; }
      .word__tag {
        font: 500 12px/1 var(--font-mono);
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--muted);
      }
      :host(.is-inverse) { color: #fff; }
      :host(.is-inverse) .mono { background: #fff; color: var(--navy-800); }
      :host(.is-inverse) .word__tag { color: var(--on-dark-muted); }
    `,
  ],
})
export class LogoComponent {
  /** White version for dark backgrounds. */
  inverse = input(false);
}
