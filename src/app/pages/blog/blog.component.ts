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
  selector: 'or-blog',
  imports: [RouterLink, DatePipe, PageHeroComponent, CtaBandComponent, IconComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  private readonly content = inject(ContentService);
  private readonly posts = toSignal(this.content.posts$);

  readonly copy = computed(() => this.content.site().pages.blog);

  readonly loaded = computed(() => this.posts() !== undefined);
  readonly featured = computed(() => this.posts()?.[0]);
  readonly rest = computed(() => this.posts()?.slice(1) ?? []);
}
