import { Component, computed, inject } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { ThemeService } from '../../core/services/theme.service';

/** Round button that switches between the light and dark theme. Border and background show on hover only. Styled with Tailwind utilities. */
@Component({
  selector: 'or-theme-toggle',
  imports: [IconComponent],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
})
export class ThemeToggleComponent {
  protected readonly theme = inject(ThemeService);
  protected readonly isDark = computed(() => this.theme.theme() === 'dark');
  protected readonly label = computed(() => (this.isDark() ? 'Switch to light theme' : 'Switch to dark theme'));
}
