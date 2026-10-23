import { DestroyRef, Directive, ElementRef, afterNextRender, inject, input, signal } from '@angular/core';

/** How the element enters the screen. Empty means the default, "up". */
export type RevealEffect = '' | 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade';

/** Longest stagger delay, so items low in a long list never wait too long. */
const MAX_DELAY = 480;

/* One shared observer for every revealed element on the page. */
const handlers = new WeakMap<Element, () => void>();
let observer: IntersectionObserver | null = null;

function watch(el: Element, onShow: () => void): () => void {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) handlers.get(entry.target)?.();
      }
    },
    // Start a little before the element is fully in view.
    { rootMargin: '0px 0px -8% 0px', threshold: 0 },
  );
  handlers.set(el, onShow);
  observer.observe(el);
  return () => {
    observer?.unobserve(el);
    handlers.delete(el);
  };
}

/**
 * Content reveal. The element fades and slides in the first time it scrolls into view.
 *
 * Usage:
 *   <div orReveal>...</div>                          slide up (default)
 *   <div orReveal="left">...</div>                   up | down | left | right | zoom | fade
 *   <li orReveal [revealDelay]="$index * 80">...</li> stagger items in a list
 *
 * The animation styles live in styles.scss (".reveal"). Users who ask for reduced motion see the content at once.
 */
@Directive({
  selector: '[orReveal]',
  host: {
    class: 'reveal',
    '[attr.data-reveal]': 'effect() || "up"',
    '[style.--reveal-delay]': 'delay()',
    '[class.is-revealed]': 'shown()',
  },
})
export class RevealDirective {
  readonly effect = input<RevealEffect>('', { alias: 'orReveal' });
  /** Wait this many milliseconds before the animation starts. */
  readonly revealDelay = input(0);

  protected readonly shown = signal(false);
  protected delay(): string {
    return Math.min(Math.max(this.revealDelay(), 0), MAX_DELAY) + 'ms';
  }

  constructor() {
    const el: HTMLElement = inject(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const view = el.ownerDocument.defaultView;
      const reduce = view?.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
      if (reduce || typeof IntersectionObserver === 'undefined') {
        this.shown.set(true);
        return;
      }
      const stop = watch(el, () => {
        this.shown.set(true);
        stop();
      });
      destroyRef.onDestroy(stop);
    });
  }
}
