import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTACT } from '../../core/data/site-content';

@Component({
  selector: 'or-cta-band',
  imports: [RouterLink],
  template: `
    <section class="cta">
      <div class="container">
        <div class="cta__card">
          <h2>{{ title() }}</h2>
          <p>A member of our team will respond to your enquiry.</p>
          <div class="cta__actions">
            <a routerLink="/contact" [queryParams]="query()" class="btn btn--light">Request a consultation <span class="btn__arrow" aria-hidden="true">&rarr;</span></a>
            <a class="btn btn--outline-light" [href]="contact.phoneHref">Call {{ contact.phone }}</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .cta { padding-block: clamp(56px, 7vw, 96px); }
      .cta__card {
        display: grid;
        justify-items: center;
        gap: 16px;
        padding: clamp(40px, 6vw, 72px) clamp(24px, 5vw, 64px);
        border-radius: 20px;
        background:
          radial-gradient(70% 120% at 100% 0%, rgba(138, 98, 32, 0.4), transparent 60%),
          linear-gradient(160deg, var(--navy-700), var(--navy-900));
        color: var(--on-dark-muted);
        text-align: center;
      }
      h2 { color: #fff; font-size: clamp(36px, 4.4vw, 56px); max-width: 20ch; }
      .cta__actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-top: 12px; }
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
