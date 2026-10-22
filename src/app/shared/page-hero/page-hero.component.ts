import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

/** Title band used at the top of inner pages. */
@Component({
  selector: 'or-page-hero',
  imports: [RouterLink],
  template: `
    <section class="page-hero">
      <div class="container">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a routerLink="/">Home</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{{ crumb() }}</span>
        </nav>
        <h1>{{ title() }}</h1>
        @if (lead()) {
          <p class="lead">{{ lead() }}</p>
        }
      </div>
    </section>
  `,
  styles: [
    `
      .page-hero {
        padding-block: clamp(48px, 6vw, 80px) clamp(56px, 7vw, 96px);
        background: var(--paper);
        border-bottom: 1px solid var(--line);
      }
      .crumbs {
        display: flex;
        gap: 10px;
        margin-bottom: 28px;
        font: 500 14px/1 var(--font-mono);
        color: var(--muted);
      }
      .crumbs a { color: var(--muted); text-decoration: none; }
      .crumbs a:hover { color: var(--ink); text-decoration: underline; }
      .crumbs [aria-current] { color: var(--ink); }
      h1 {
        max-width: 20ch;
        font-size: clamp(40px, 5vw, 64px);
        animation: rise 0.6s var(--ease) both;
      }
      .lead {
        max-width: 60ch;
        margin-top: 20px;
        font-size: 19px;
        color: var(--muted);
        animation: rise 0.6s 0.08s var(--ease) both;
      }
      @keyframes rise { from { opacity: 0; transform: translateY(10px); } }
    `,
  ],
})
export class PageHeroComponent {
  crumb = input.required<string>();
  title = input.required<string>();
  lead = input<string>('');
}
