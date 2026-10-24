import { Component, input } from '@angular/core';
import { Heading } from '../../core/models/site';
import { RevealDirective } from '../reveal/reveal.directive';

/**
 * Section heading from JSON: pill label, title with an emphasised ending, and an optional lead.
 * Layout: label, title and lead are stacked on the left (title on one line while it fits, lead right under it).
 * Anything placed inside (for example an "All solutions" link) sits on the right, level with the bottom.
 * Slides in when it scrolls into view.
 */
@Component({
  selector: 'or-section-head',
  imports: [RevealDirective],
  templateUrl: './section-head.component.html',
  styleUrl: './section-head.component.scss',
})
export class SectionHeadComponent {
  readonly heading = input.required<Heading>();
  readonly center = input(false);
  /** Use on dark band sections. */
  readonly dark = input(false);
}
