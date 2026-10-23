import { Component, computed, inject } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { ThemeService } from '../../core/services/theme.service';

/** Round button that switches between the light and dark theme. Border and background show on hover only. Styled with Tailwind utilities. */
@Component({
  selector: 'or-theme-toggle',
  imports: [IconComponent],
  template: `
    <button
      type="button"
      class="inline-grid size-10 cursor-pointer place-items-center rounded-full border border-transparent bg-transparent text-ink transition-colors duration-200 hover:border-line hover:bg-paper"
      [attr.aria-label]="label()"
      [attr.title]="label()"
      [attr.aria-pressed]="isDark()"
      (click)="theme.toggle()"
    >
      <or-icon class="size-5" [name]="isDark() ? 'sun' : 'moon'" />
    </button>
  `,
})
export class ThemeToggleComponent {
  protected readonly theme = inject(ThemeService);
  protected readonly isDark = computed(() => this.theme.theme() === 'dark');
  protected readonly label = computed(() => (this.isDark() ? 'Switch to light theme' : 'Switch to dark theme'));
}
