import { Component, computed, input } from '@angular/core';
import { ICONS } from './icons';

/** Inline line icon. Usage: <or-icon name="shield" /> */
@Component({
  selector: 'or-icon',
  template: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      @for (d of paths(); track $index) {
        <path [attr.d]="d" />
      }
    </svg>
  `,
  styles: [
    `
      :host { display: inline-flex; width: 24px; height: 24px; flex: none; color: inherit; }
      svg { width: 100%; height: 100%; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
    `,
  ],
})
export class IconComponent {
  readonly name = input.required<string>();
  readonly paths = computed(() => ICONS[this.name()] ?? []);
}
