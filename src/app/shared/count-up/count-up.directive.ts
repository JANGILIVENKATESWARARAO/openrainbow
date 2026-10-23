import { Directive, ElementRef, effect, inject, input } from '@angular/core';

/**
 * Counts a number up from zero when it scrolls into view, e.g. "30+" or "25 yrs".
 * Text without a number, years (e.g. 1993) and values like "24/7" are shown as they are.
 *
 * Usage: <dt [orCountUp]="stat.value"></dt>   (leave the element empty)
 */
@Directive({
  selector: '[orCountUp]',
  host: { class: 'count-up' },
})
export class CountUpDirective {
  readonly value = input.required<string>({ alias: 'orCountUp' });
  /** Length of the count in milliseconds. */
  readonly duration = input(1400);

  private readonly el: HTMLElement = inject(ElementRef).nativeElement;

  constructor() {
    effect((onCleanup) => {
      const text = this.value() ?? '';
      const duration = this.duration();
      const el = this.el;
      el.textContent = text;

      const view = el.ownerDocument.defaultView;
      const match = /^(\D*)(\d+)(.*)$/.exec(text);
      if (!view || !match || typeof IntersectionObserver === 'undefined') return;
      if (view.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

      const [, before, digits, after] = match;
      const target = Number(digits);
      const isYear = target >= 1900 && target <= 2100;
      if (target < 2 || isYear || after.startsWith('/')) return;

      let frame = 0;
      const io = new IntersectionObserver(([entry]) => {
        if (!entry?.isIntersecting) return;
        io.disconnect();
        const start = view.performance.now();
        const step = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = `${before}${Math.round(target * eased)}${after}`;
          if (t < 1) frame = view.requestAnimationFrame(step);
        };
        el.textContent = `${before}0${after}`;
        frame = view.requestAnimationFrame(step);
      });
      io.observe(el);

      onCleanup(() => {
        io.disconnect();
        view.cancelAnimationFrame(frame);
      });
    });
  }
}
