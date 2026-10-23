import { Component, DOCUMENT, inject, signal } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

/** Round "back to top" button. Appears after scrolling down. */
@Component({
  selector: 'or-scroll-top',
  imports: [IconComponent],
  template: `
    <button
      type="button"
      class="top"
      [class.is-visible]="visible()"
      [attr.tabindex]="visible() ? null : -1"
      aria-label="Back to top"
      title="Back to top"
      (click)="toTop()"
    >
      <or-icon name="arrow-up" />
    </button>
  `,
  host: { '(window:scroll)': 'onScroll()' },
  styles: [
    `
      .top {
        position: fixed;
        right: clamp(16px, 3vw, 32px);
        bottom: clamp(16px, 3vw, 32px);
        z-index: 40;
        display: grid;
        place-items: center;
        width: 48px;
        height: 48px;
        border: 1px solid var(--line);
        border-radius: 50%;
        background: var(--surface);
        color: var(--ink);
        box-shadow: 0 12px 28px -14px var(--shadow);
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transform: translateY(12px);
        transition: opacity 0.2s var(--ease), transform 0.2s var(--ease), visibility 0.2s, background-color 0.2s;
      }
      .top.is-visible { opacity: 1; visibility: visible; transform: none; }
      .top:hover { background: var(--paper); }
      .top:hover or-icon { transform: translateY(-2px); }
      or-icon { width: 20px; height: 20px; transition: transform 0.2s var(--ease); }
    `,
  ],
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
