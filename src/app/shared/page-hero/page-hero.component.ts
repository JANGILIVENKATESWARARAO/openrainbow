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
  templateUrl: './page-hero.component.html',
  styleUrl: './page-hero.component.scss',
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
