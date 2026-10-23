import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'or-not-found',
  imports: [RouterLink],
  template: `
    @let page = copy();
    <section class="nf">
      <div class="container nf__inner">
        <p class="eyebrow">{{ page.eyebrow }}</p>
        <h1>
          {{ page.title }}
          @if (page.emphasis) {
            <span class="emphasis">{{ page.emphasis }}</span>
          }
        </h1>
        <p class="lead">{{ page.lead }}</p>
        <a [routerLink]="page.cta.path" class="btn btn--primary">{{ page.cta.label }}</a>
      </div>
    </section>
  `,
  styles: [
    `
      .nf { padding-block: 120px 160px; background: var(--paper); }
      .nf__inner { display: grid; justify-items: center; gap: 20px; text-align: center; }
      h1 { font-size: clamp(48px, 6vw, 80px); }
      .lead { color: var(--muted); font-size: 19px; margin-bottom: 12px; }
    `,
  ],
})
export class NotFoundComponent {
  private readonly content = inject(ContentService);
  readonly copy = computed(() => this.content.site().pages.notFound);
}
