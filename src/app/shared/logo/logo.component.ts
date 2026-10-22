import { Component, input } from '@angular/core';

/** Six-arc rainbow mark + wordmark. */
@Component({
  selector: 'or-logo',
  template: `
    <svg class="mark" viewBox="0 0 48 28" aria-hidden="true">
      @for (arc of arcs; track arc.r) {
        <path [attr.d]="arc.d" [style.stroke]="arc.color" />
      }
    </svg>
    @if (!compact()) {
      <span class="word"><span class="word__open">Open</span>Rainbow<span class="word__it">IT</span></span>
    }
  `,
  styles: [
    `
      :host { display: inline-flex; align-items: center; gap: 10px; color: inherit; }
      .mark { width: 44px; height: 26px; overflow: visible; }
      .mark path { fill: none; stroke-width: 2.6; stroke-linecap: round; }
      .word {
        font-family: var(--font-display);
        font-weight: 700;
        font-size: 26px;
        line-height: 1;
        letter-spacing: 0.01em;
        display: inline-flex;
        align-items: baseline;
      }
      .word__open { font-weight: 500; opacity: 0.85; }
      .word__it {
        margin-left: 6px;
        padding: 3px 6px 1px;
        border-radius: 5px;
        font-size: 14px;
        letter-spacing: 0.08em;
        background: var(--on-ink);
        color: var(--ink);
      }
    `,
  ],
})
export class LogoComponent {
  compact = input(false);

  private readonly colors = ['#e5484d', '#f0883e', '#f5c84c', '#3dbb78', '#3b8cf6', '#8b5cf6'];

  readonly arcs = this.colors.map((color, i) => {
    const r = 22 - i * 3.2;
    const cx = 24;
    const cy = 26;
    return { r, color, d: `M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}` };
  });
}
