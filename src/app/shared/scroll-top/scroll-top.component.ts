import { Component, DOCUMENT, inject, signal } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

/** Round "back to top" button. Appears after scrolling down. */
@Component({
  selector: 'or-scroll-top',
  imports: [IconComponent],
  templateUrl: './scroll-top.component.html',
  styleUrl: './scroll-top.component.scss',
  host: { '(window:scroll)': 'onScroll()' },
})
export class ScrollTopComponent {
  private readonly window = inject(DOCUMENT).defaultView;
  readonly visible = signal(false);

  onScroll(): void {
    this.visible.set((this.window?.scrollY ?? 0) > 600);
  }

  toTop(): void {
    const reduce = this.window?.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    this.window?.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  }
}
