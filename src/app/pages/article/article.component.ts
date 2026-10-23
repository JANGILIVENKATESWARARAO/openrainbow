import { Component, DOCUMENT, ElementRef, Injector, afterNextRender, computed, effect, inject, input, signal, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { CtaBandComponent } from '../../shared/cta-band/cta-band.component';
import { IconComponent } from '../../shared/icon/icon.component';
import { Post } from '../../core/models/content';
import { ContentService } from '../../core/services/content.service';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

/** Blog article. The post comes from the route resolver. */
@Component({
  selector: 'or-article',
  imports: [RouterLink, DatePipe, CtaBandComponent, IconComponent, RevealDirective],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
  host: {
    '(window:scroll)': 'track()',
    '(window:resize)': 'track()',
  },
})
export class ArticleComponent {
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly injector = inject(Injector);
  private readonly content = inject(ContentService);
  private readonly posts = toSignal(this.content.posts$, { initialValue: [] });

  /** Labels from site.json → pages.article. */
  readonly copy = computed(() => this.content.site().pages.article);
  readonly authorRole = computed(() => this.copy().authorRole || this.content.site().company.name);

  readonly post = input.required<Post>();

  private readonly prose = viewChild<ElementRef<HTMLElement>>('prose');

  /** Reading progress, 0 to 1. Shown as a bar under the navbar. */
  readonly progress = signal(0);
  /** Id of the section currently on screen, highlighted in "On this page". */
  readonly activeId = signal('');

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
    // Recalculate after each post renders (also when moving from one post to another).
    effect(() => {
      this.post();
      afterNextRender(() => this.track(), { injector: this.injector });
    });
  }

  /** Updates the reading bar and the highlighted section from the scroll position. */
  track(): void {
    const article = this.prose()?.nativeElement;
    const view = this.document.defaultView;
    if (!article || !view) return;

    const headerHeight = 72;
    const rect = article.getBoundingClientRect();
    const readable = rect.height - (view.innerHeight - headerHeight);
    const read = headerHeight - rect.top;
    this.progress.set(readable > 0 ? Math.min(1, Math.max(0, read / readable)) : 1);

    // The active section is the last heading that has passed the top third of the screen.
    const line = headerHeight + view.innerHeight * 0.3;
    let current = '';
    for (const heading of Array.from(article.querySelectorAll<HTMLElement>('h2[id]'))) {
      if (heading.getBoundingClientRect().top <= line) current = heading.id;
      else break;
    }
    this.activeId.set(current);
  }

  private url(): string {
    return this.document.location?.href ?? '';
  }
}
