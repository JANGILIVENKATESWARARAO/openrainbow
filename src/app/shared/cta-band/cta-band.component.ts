import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../core/services/content.service';
import { RevealDirective } from '../reveal/reveal.directive';

@Component({
  selector: 'or-cta-band',
  imports: [RouterLink, RevealDirective],
  template: `
    <section class="cta">
      <div class="container" orReveal="zoom">
        <div class="cta__card">
          <h2 orReveal [revealDelay]="120">{{ heading() }}</h2>
          <p orReveal [revealDelay]="200">{{ cta().text }}</p>
          <div class="cta__actions" orReveal [revealDelay]="280">
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
        background-size: 160% 160%, auto;
        animation: glow-drift 14s ease-in-out infinite alternate;
      }
      /* Slow drift of the corner glow, so the band feels alive */
      @keyframes glow-drift { from { background-position: 100% 0%, 0 0; } to { background-position: 60% 40%, 0 0; } }
      h2 { color: var(--on-band); font-size: clamp(36px, 4.4vw, 56px); text-wrap: balance; }
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
