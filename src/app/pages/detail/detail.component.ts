import { Component, computed, effect, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { CtaBandComponent } from '../../shared/cta-band/cta-band.component';
import { IconComponent } from '../../shared/icon/icon.component';
import { CONTACT } from '../../core/data/site-content';
import { Category, ContentPage } from '../../core/models/content';
import { ContentService } from '../../core/services/content.service';

const LABELS: Record<Category, string> = { services: 'Services', solutions: 'Solutions' };

/** One template for every service and solution page. Content comes from the route resolver. */
@Component({
  selector: 'or-detail',
  imports: [RouterLink, PageHeroComponent, CtaBandComponent, IconComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  private readonly meta = inject(Meta);
  private readonly content = inject(ContentService);

  /** Bound from the route: `page` from the resolver, `category` from route data. */
  readonly page = input.required<ContentPage>();
  readonly category = input.required<Category>();

  readonly contact = CONTACT;
  readonly label = computed(() => LABELS[this.category()]);

  private readonly siblings = toSignal(toObservable(this.category).pipe(switchMap((c) => this.content.pages(c))), { initialValue: [] });
  readonly related = computed(() => this.siblings().filter((p) => p.slug !== this.page().slug));

  /** Benefit titles for the overview: the benefits band if there is one, otherwise the first section. */
  readonly keyPoints = computed(() => {
    const sections = this.page().sections;
    const source = sections.find((s) => s.layout === 'dark') ?? sections[0];
    return source ? source.items.slice(0, 3).map((i) => i.title) : [];
  });

  constructor() {
    effect(() => this.meta.updateTag({ name: 'description', content: this.page().lead }));
  }

  pad(n: number): string {
    return String(n).padStart(2, '0');
  }
}
