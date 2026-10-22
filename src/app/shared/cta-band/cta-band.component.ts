import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTACT } from '../../core/data/site-content';

@Component({
  selector: 'or-cta-band',
  imports: [RouterLink],
  template: `
    <section class="cta">
      <div class="container cta__inner">
        <h2>{{ title() }}</h2>
        <div class="cta__actions">
          <a routerLink="/contact" class="btn btn--spectrum">Send an enquiry</a>
          <a class="cta__phone" [href]="contact.phoneHref">or call {{ contact.phone }}</a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .cta {
        background: var(--ink-2);
        color: #fff;
        padding-block: clamp(64px, 9vw, 112px);
      }
      .cta__inner {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-end;
        justify-content: space-between;
        gap: 32px;
      }
      h2 { font-size: clamp(44px, 6.5vw, 88px); max-width: 14ch; }
      .cta__actions { display: grid; gap: 14px; justify-items: start; }
      .cta__phone {
        font-weight: 700;
        color: var(--on-ink-muted);
        text-decoration: none;
      }
      .cta__phone:hover { color: #fff; }
    `,
  ],
})
export class CtaBandComponent {
  readonly contact = CONTACT;
  title = input('Start at any stage.');
}
