import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTACT } from '../../core/data/site-content';

@Component({
  selector: 'or-cta-band',
  imports: [RouterLink],
  template: `
    <section class="cta">
      <div class="container cta__inner">
        <div>
          <h2>{{ title() }}</h2>
          <p>A member of our team will respond to your enquiry.</p>
        </div>
        <div class="cta__actions">
          <a routerLink="/contact" [queryParams]="query()" class="btn btn--light">Request a consultation</a>
          <a class="btn btn--outline-light" [href]="contact.phoneHref">Call {{ contact.phone }}</a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .cta {
        background: var(--navy-800);
        color: var(--on-dark-muted);
        padding-block: clamp(64px, 8vw, 104px);
      }
      .cta__inner {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 32px 48px;
      }
      h2 { color: #fff; font-size: clamp(30px, 3.4vw, 44px); max-width: 22ch; margin-bottom: 12px; }
      .cta__actions { display: flex; flex-wrap: wrap; gap: 12px; }
    `,
  ],
})
export class CtaBandComponent {
  readonly contact = CONTACT;
  title = input('Discuss your requirements with our team.');
  /** Pre-selects the enquiry type on the contact form. */
  topic = input<string>('');
  readonly query = computed(() => (this.topic() ? { topic: this.topic() } : {}));
}
