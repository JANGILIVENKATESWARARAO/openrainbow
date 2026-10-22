import { Component, computed, effect, inject, input } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { CtaBandComponent } from '../../shared/cta-band/cta-band.component';
import { CATEGORY_LABEL, DetailCategory, findDetailPage, pagesIn } from '../../core/data/detail-pages';

/** One template for every service and solution detail page. */
@Component({
  selector: 'or-detail',
  imports: [RouterLink, PageHeroComponent, CtaBandComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  /** Bound from the route (withComponentInputBinding). */
  readonly slug = input.required<string>();
  readonly category = input.required<DetailCategory>();

  readonly page = computed(() => findDetailPage(this.category(), this.slug()));
  readonly categoryLabel = computed(() => CATEGORY_LABEL[this.category()]);
  readonly related = computed(() => pagesIn(this.category()).filter((p) => p.slug !== this.slug()));

  constructor() {
    effect(() => {
      const page = this.page();
      this.title.setTitle(page ? `${page.title} | Open Rainbow` : 'Page not found | Open Rainbow');
      if (page) this.meta.updateTag({ name: 'description', content: page.lead });
    });
  }

  pad(n: number): string {
    return String(n).padStart(2, '0');
  }
}
