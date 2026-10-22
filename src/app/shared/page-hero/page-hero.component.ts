import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../icon/icon.component';

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
      <div class="container">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a routerLink="/">Home</a>
          @if (parent(); as p) {
            <span aria-hidden="true">/</span>
            <a [routerLink]="p.path">{{ p.label }}</a>
          }
          <span aria-hidden="true">/</span>
          <span aria-current="page">{{ crumb() }}</span>
        </nav>
        @if (eyebrow()) {
          <p class="eyebrow tagline">{{ eyebrow() }}</p>
        }
        <div class="heading">
          @if (icon()) {
            <span class="icon-tile heading__icon"><or-icon [name]="icon()" /></span>
          }
          <h1>{{ title() }}</h1>
        </div>
        @if (lead()) {
          <p class="lead">{{ lead() }}</p>
        }
      </div>
    </section>
  `,
  styles: [
    `
      .page-hero {
        padding-block: clamp(48px, 6vw, 80px) clamp(56px, 7vw, 96px);
        background: var(--paper);
        border-bottom: 1px solid var(--line);
      }
      .crumbs {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 28px;
        font-weight: 500;
        font-size: 14px;
        color: var(--muted);
      }
      .crumbs a { color: var(--muted); text-decoration: none; }
      .crumbs a:hover { color: var(--ink); text-decoration: underline; }
      .crumbs [aria-current] { color: var(--ink); }
      .tagline { margin-bottom: 18px; }
      .heading { display: flex; gap: 24px; align-items: center; }
      .heading__icon { width: 64px; height: 64px; border-radius: 10px; background: #fff; flex: none; }
      .heading__icon or-icon { width: 30px; height: 30px; }
      @media (max-width: 640px) { .heading { flex-direction: column; align-items: flex-start; gap: 16px; } .heading__icon { width: 52px; height: 52px; } }
      h1 {
        max-width: 20ch;
        font-size: clamp(40px, 5vw, 64px);
        animation: rise 0.6s var(--ease) both;
      }
      .lead {
        max-width: 60ch;
        margin-top: 20px;
        font-size: 19px;
        color: var(--muted);
        animation: rise 0.6s 0.08s var(--ease) both;
      }
      @keyframes rise { from { opacity: 0; transform: translateY(10px); } }
    `,
  ],
})
export class PageHeroComponent {
  crumb = input.required<string>();
  title = input.required<string>();
  lead = input<string>('');
  eyebrow = input<string>('');
  /** Optional middle breadcrumb, e.g. Services. */
  parent = input<Crumb | null>(null);
  /** Optional icon name shown beside the title. */
  icon = input<string>('');
}
