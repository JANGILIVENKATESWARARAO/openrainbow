import { Component, computed, input } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { ICON_NAMES } from './icons';

/** Lucide line icon. Usage: <or-icon name="shield" /> (short name or any Lucide name). */
@Component({
  selector: 'or-icon',
  imports: [LucideDynamicIcon],
  template: `<svg [lucideIcon]="lucideName()" [strokeWidth]="1.75" aria-hidden="true"></svg>`,
  styles: [
    `
      :host { display: inline-flex; width: 24px; height: 24px; flex: none; color: inherit; }
      svg { width: 100%; height: 100%; }
    `,
  ],
})
export class IconComponent {
  readonly name = input.required<string>();
  readonly lucideName = computed(() => ICON_NAMES[this.name()] ?? this.name());
}
