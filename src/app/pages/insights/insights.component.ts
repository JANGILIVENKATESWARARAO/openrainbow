import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { CtaBandComponent } from '../../shared/cta-band/cta-band.component';
import { IconComponent } from '../../shared/icon/icon.component';
import { ContentService } from '../../core/services/content.service';

/** Blog listing. Posts come from /public/data/blog.json. */
@Component({
  selector: 'or-insights',
  imports: [RouterLink, DatePipe, PageHeroComponent, CtaBandComponent, IconComponent],
  templateUrl: './insights.component.html',
  styleUrl: './insights.component.scss',
})
export class InsightsComponent {
  private readonly posts = toSignal(inject(ContentService).posts$);

  readonly loaded = computed(() => this.posts() !== undefined);
  readonly featured = computed(() => this.posts()?.[0]);
  readonly rest = computed(() => this.posts()?.slice(1) ?? []);
}
