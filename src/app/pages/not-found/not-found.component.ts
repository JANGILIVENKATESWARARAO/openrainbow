import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../core/services/content.service';
import { OrbitComponent } from '../../shared/orbit/orbit.component';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

/** 404 page for any unknown address (e.g. /portfolio). The "0" is the OR mark with its orbiting stars. */
@Component({
  selector: 'or-not-found',
  imports: [RouterLink, OrbitComponent, RevealDirective],
  template: `
    @let page = copy();
    <section class="nf">
      <div class="container nf__inner">
        <!-- No chip here: the big 404 already says it ("eyebrow" in site.json is used for the tab title) -->
        <div class="nf__code" role="img" [attr.aria-label]="page.code">
          <span aria-hidden="true">{{ first() }}</span>
          <or-orbit class="nf__orbit" />
          <span aria-hidden="true">{{ last() }}</span>
        </div>

        <h1 orReveal>
          {{ page.title }}
          @if (page.emphasis) {
            <span class="emphasis">{{ page.emphasis }}</span>
          }
        </h1>
        <p class="lead" orReveal [revealDelay]="80">{{ page.lead }}</p>
        <a [routerLink]="page.cta.path" class="btn btn--primary" orReveal [revealDelay]="160">
          {{ page.cta.label }} <span class="btn__arrow" aria-hidden="true">&rarr;</span>
        </a>

        <nav class="nf__links" [attr.aria-label]="page.linksLabel" orReveal="fade" [revealDelay]="240">
          <p>{{ page.linksLabel }}</p>
          <ul>
            @for (link of links(); track link.path) {
              <li><a [routerLink]="link.path">{{ link.label }}</a></li>
            }
          </ul>
        </nav>
      </div>
    </section>
  `,
  styles: [
    `
      .nf {
        position: relative;
        overflow: hidden;
        padding-block: clamp(64px, 9vw, 120px) clamp(96px, 12vw, 160px);
        background: var(--paper);
      }
      /* Faint drafting grid, as on the other page heroes */
      .nf::before {
        content: '';
        position: absolute;
        inset: 0;
        background:
          linear-gradient(var(--line) 1px, transparent 1px) 0 0 / 64px 64px,
          linear-gradient(90deg, var(--line) 1px, transparent 1px) 0 0 / 64px 64px;
        mask-image: radial-gradient(ellipse 50% 60% at 50% 40%, #000 15%, transparent 75%);
        opacity: 0.6;
        pointer-events: none;
      }
      .nf__inner { position: relative; display: grid; justify-items: center; gap: 20px; text-align: center; }

      .nf__code {
        display: flex;
        align-items: center;
        gap: 0.04em;
        margin-block: 8px 4px;
        font-weight: 700;
        font-size: clamp(110px, 19vw, 220px);
        line-height: 1;
        letter-spacing: -0.04em;
        color: var(--ink);
        animation: nf-rise 0.7s var(--ease) both;
      }
      /* The orbit takes the place of the "0" */
      .nf__orbit {
        --orbit: 0.86em;
        --arc-thick: 4px;
        --arc-head: 10px;
        margin-inline: 0.02em;
      }
      @keyframes nf-rise { from { opacity: 0; transform: translateY(14px) scale(0.98); } }

      h1 { font-size: clamp(36px, 4.6vw, 56px); }
      .lead { max-width: 52ch; color: var(--muted); font-size: 19px; margin-bottom: 8px; }

      .nf__links {
        display: grid;
        gap: 14px;
        justify-items: center;
        margin-top: 28px;
        padding-top: 28px;
        border-top: 1px solid var(--line);

        p { font-size: 14px; color: var(--muted); }
        ul { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
        a {
          display: inline-block;
          padding: 8px 16px;
          border: 1px solid var(--line-strong);
          border-radius: 999px;
          background: var(--surface);
          font-weight: 500;
          font-size: 15px;
          color: var(--ink);
          text-decoration: none;
          transition: border-color 0.2s, transform 0.2s var(--ease);
        }
        a:hover { border-color: var(--ink); transform: translateY(-2px); }
      }
    `,
  ],
})
export class NotFoundComponent {
  private readonly content = inject(ContentService);
  readonly copy = computed(() => this.content.site().pages.notFound);

  /** "404" → "4" + orbit + "4". */
  readonly first = computed(() => this.copy().code.slice(0, 1));
  readonly last = computed(() => this.copy().code.slice(-1));

  /** Main menu pages as quick links. */
  readonly links = computed(() => this.content.site().navigation);
}
