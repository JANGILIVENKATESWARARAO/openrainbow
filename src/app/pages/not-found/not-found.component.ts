import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'or-not-found',
  imports: [RouterLink],
  template: `
    <section class="nf">
      <div class="container">
        <p class="eyebrow">Error 404</p>
        <h1>Page not found.</h1>
        <p class="lead">The page you are looking for has moved or no longer exists.</p>
        <a routerLink="/" class="btn btn--primary">Back to home</a>
      </div>
    </section>
  `,
  styles: [
    `
      .nf { padding-block: 120px 160px; background: var(--paper); }
      h1 { font-size: clamp(40px, 5vw, 64px); margin: 20px 0 16px; }
      .lead { color: var(--muted); font-size: 19px; margin-bottom: 32px; }
    `,
  ],
})
export class NotFoundComponent {}
