import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'or-not-found',
  imports: [RouterLink],
  template: `
    <section class="nf">
      <div class="container">
        <p class="eyebrow">404</p>
        <h1>Signal lost.</h1>
        <p class="lead">We couldn't find that page.</p>
        <a routerLink="/" class="btn btn--spectrum">Back to home</a>
      </div>
    </section>
  `,
  styles: [
    `
      .nf { background: var(--ink); color: #fff; padding-block: 120px 160px; }
      .eyebrow { color: var(--on-ink-muted); }
      h1 { font-size: clamp(64px, 10vw, 140px); margin: 12px 0 20px; }
      .lead { color: var(--on-ink-muted); font-size: 20px; margin-bottom: 32px; }
    `,
  ],
})
export class NotFoundComponent {}
