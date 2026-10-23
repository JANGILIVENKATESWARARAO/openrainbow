import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../icon/icon.component';
import { Heading } from '../../core/models/site';

export interface Crumb {
  label: string;
  path: string;
}

/** Title band used at the top of inner pages. */
@Component({
  selector: 'or-page-hero',
  imports: [RouterLink, IconComponent],
  template: `
    <section class="page-hero">
      <div class="container page-hero__inner">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a routerLink="/">Home</a>
          @if (parent(); as p) {
            <span aria-hidden="true">/</span>
            <a [routerLink]="p.path">{{ p.label }}</a>
          }
          <span aria-hidden="true">/</span>
          <span aria-current="page">{{ crumb() }}</span>
        </nav>
        @if (icon()) {
          <span class="icon-tile heading__icon"><or-icon [name]="icon()" /></span>
        }
        @if (heading().eyebrow) {
          <p class="eyebrow">{{ heading().eyebrow }}</p>
        }
        <h1>
          {{ heading().title }}
          @if (heading().emphasis) {
            <span class="emphasis">{{ heading().emphasis }}</span>
          }
        </h1>
        @if (heading().lead) {
          <p class="lead">{{ heading().lead }}</p>
        }
      </div>
    </section>
  `,
  styles: [
    `
      .page-hero {
        position: relative;
        overflow: hidden;
        padding-block: clamp(40px, 5vw, 64px) clamp(56px, 7vw, 88px);
        border-bottom: 1px solid var(--line);
      }
      /* Same faint drafting grid as the home hero */
      .page-hero::before {
        content: '';
        position: absolute;
        inset: 0;
        background:
          linear-gradient(var(--line) 1px, transparent 1px) 0 0 / 64px 64px,
          linear-gradient(90deg, var(--line) 1px, transparent 1px) 0 0 / 64px 64px;
        mask-image: radial-gradient(ellipse 55% 80% at 50% 40%, #000 15%, transparent 75%);
        opacity: 0.5;
        pointer-events: none;
      }
      .page-hero__inner {
        position: relative;
        display: grid;
        justify-items: center;
        gap: 20px;
        text-align: center;
      }
      .crumbs {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        margin-bottom: 8px;
        font-weight: 500;
        font-size: 14px;
        color: var(--muted);
      }
      .crumbs a { color: var(--muted); text-decoration: none; }
      .crumbs a:hover { color: var(--ink); text-decoration: underline; }
      .crumbs [aria-current] { color: var(--ink); }
      .heading__icon { width: 56px; height: 56px; border-radius: 14px; }
      .heading__icon or-icon { width: 28px; height: 28px; }
      h1 {
        /* One line while it fits; wraps neatly when it does not */
        text-wrap: pretty;
        font-size: clamp(40px, 5vw, 64px);
        line-height: 1.06;
        animation: rise 0.6s var(--ease) both;
      }
      .lead {
        max-width: 60ch;
        font-size: 19px;
        color: var(--muted);
        animation: rise 0.6s 0.08s var(--ease) both;
      }
      @keyframes rise { from { opacity: 0; transform: translateY(10px); } }
    `,
  ],
})
export class PageHeroComponent {
  /** Current page name in the breadcrumb. */
  readonly crumb = input.required<string>();
  /** Pill label, title, emphasised ending and lead, usually straight from site.json. */
  readonly heading = input.required<Heading>();
  /** Optional middle breadcrumb, e.g. Services. */
  readonly parent = input<Crumb | null>(null);
  /** Optional icon name shown above the title. */
  readonly icon = input<string>('');
}
