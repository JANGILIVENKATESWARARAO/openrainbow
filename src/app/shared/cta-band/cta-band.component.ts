import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'or-cta-band',
  imports: [RouterLink],
  template: `
    <section class="cta">
      <div class="container">
        <div class="cta__card">
          <h2>{{ heading() }}</h2>
          <p>{{ cta().text }}</p>
          <div class="cta__actions">
            <a routerLink="/contact" [queryParams]="query()" class="btn btn--light">{{ cta().primary }} <span class="btn__arrow" aria-hidden="true">&rarr;</span></a>
            <a class="btn btn--outline-light" [href]="contact().phoneHref">{{ cta().phonePrefix }} {{ contact().phone }}</a>
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
        border: 1px solid var(--band-line);
        background:
          radial-gradient(70% 120% at 100% 0%, var(--band-glow), transparent 60%),
          linear-gradient(160deg, var(--band-from), var(--band-to));
        color: var(--on-dark-muted);
        text-align: center;
      }
      h2 { color: var(--on-band); font-size: clamp(36px, 4.4vw, 56px); max-width: 20ch; }
      .cta__actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-top: 12px; }
    `,
  ],
})
export class CtaBandComponent {
  private readonly site = inject(ContentService).site;

  /** Overrides the default title from site.json. */
  readonly title = input<string>('');
  /** Pre-selects the enquiry type on the contact form. */
  readonly topic = input<string>('');

  protected readonly cta = computed(() => this.site().cta);
  protected readonly contact = computed(() => this.site().contact);
  protected readonly heading = computed(() => this.title() || this.cta().title);
  protected readonly query = computed(() => (this.topic() ? { topic: this.topic() } : {}));
}
