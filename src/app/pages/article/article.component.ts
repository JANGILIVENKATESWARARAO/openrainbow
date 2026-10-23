import { Component, DOCUMENT, computed, effect, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { CtaBandComponent } from '../../shared/cta-band/cta-band.component';
import { IconComponent } from '../../shared/icon/icon.component';
import { Post } from '../../core/models/content';
import { ContentService } from '../../core/services/content.service';

/** Blog article. The post comes from the route resolver. */
@Component({
  selector: 'or-article',
  imports: [RouterLink, DatePipe, CtaBandComponent, IconComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly content = inject(ContentService);
  private readonly posts = toSignal(this.content.posts$, { initialValue: [] });

  /** Labels from site.json → pages.article. */
  readonly copy = computed(() => this.content.site().pages.article);
  readonly authorRole = computed(() => this.copy().authorRole || this.content.site().company.name);

  readonly post = input.required<Post>();

  /** Sub-headings, used for the "On this page" list. */
  readonly outline = computed(() => this.post().body.filter((b) => b.type === 'h2' && b.id));
  readonly more = computed(() => this.posts().filter((p) => p.slug !== this.post().slug).slice(0, 3));

  readonly shareLinkedIn = computed(
    () => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(this.url())}`,
  );
  readonly shareEmail = computed(
    () => `mailto:?subject=${encodeURIComponent(this.post().title)}&body=${encodeURIComponent(this.url())}`,
  );

  constructor() {
    effect(() => this.meta.updateTag({ name: 'description', content: this.post().excerpt }));
  }

  private url(): string {
    return this.document.location?.href ?? '';
  }
}
