import { Component, computed, input } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { ICON_NAMES } from './icons';

/** Lucide line icon. Usage: <or-icon name="shield" /> (short name or any Lucide name). */
@Component({
  selector: 'or-icon',
  imports: [LucideDynamicIcon],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  readonly name = input.required<string>();
  readonly lucideName = computed(() => ICON_NAMES[this.name()] ?? this.name());
}
