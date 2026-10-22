import { Component, input } from '@angular/core';

/** Navy title band used at the top of inner pages. */
@Component({
  selector: 'or-page-hero',
  template: `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">{{ eyebrow() }}</p>
        <h1>{{ title() }}</h1>
        @if (lead()) {
          <p class="lead">{{ lead() }}</p>
        }
      </div>
      <div class="thread" aria-hidden="true"></div>
    </section>
  `,
  styles: [
    `
      .page-hero {
        position: relative;
        padding-block: clamp(56px, 8vw, 104px) clamp(64px, 9vw, 112px);
        background: var(--ink);
        color: #fff;
        overflow: hidden;
      }
      .eyebrow { color: var(--on-ink-muted); margin-bottom: 18px; }
      h1 {
        max-width: 16ch;
        font-size: clamp(52px, 8vw, 112px);
        font-weight: 600;
        animation: rise 0.8s var(--ease) both;
      }
      .lead {
        max-width: 52ch;
        margin-top: 24px;
        font-size: 19px;
        color: var(--on-ink-muted);
        animation: rise 0.8s 0.1s var(--ease) both;
      }
      .thread {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 4px;
        background: var(--spectrum);
        transform-origin: left;
        animation: draw 1.2s 0.2s var(--ease) both;
      }
      @keyframes rise { from { opacity: 0; transform: translateY(16px); } }
      @keyframes draw { from { transform: scaleX(0); } }
    `,
  ],
})
export class PageHeroComponent {
  eyebrow = input.required<string>();
  title = input.required<string>();
  lead = input<string>('');
}
