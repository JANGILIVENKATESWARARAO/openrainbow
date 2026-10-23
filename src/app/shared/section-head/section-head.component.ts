import { Component, input } from '@angular/core';
import { Heading } from '../../core/models/site';
import { RevealDirective } from '../reveal/reveal.directive';

/**
 * Section heading from JSON: pill label, title with an emphasised ending, and an optional lead.
 * Anything placed inside (for example an "All solutions" link) is shown on the right.
 * Without a lead the title uses the full width, so there is no empty space beside it.
 * Slides in when it scrolls into view.
 */
@Component({
  selector: 'or-section-head',
  imports: [RevealDirective],
  template: `
    <div
      class="section-head"
      [class.section-head--center]="center()"
      [class.section-head--dark]="dark()"
      [class.section-head--wide]="!center() && !heading().lead"
      orReveal
    >
      <div>
        @if (heading().eyebrow) {
          <p class="eyebrow" [class.eyebrow--dark]="dark()">{{ heading().eyebrow }}</p>
        }
        <h2>
          {{ heading().title }}
          @if (heading().emphasis) {
            <span class="emphasis">{{ heading().emphasis }}</span>
          }
        </h2>
      </div>
      @if (heading().lead) {
        <p>{{ heading().lead }}</p>
      }
      <ng-content />
    </div>
  `,
  styles: [
    `
      :host { display: block; }
      /* No lead text: the title takes the full width (no empty column next to it), the link sits on the right */
      .section-head--wide { grid-template-columns: minmax(0, 1fr) auto; }
      .section-head--wide h2 { max-width: 24ch; text-wrap: balance; }
      @media (max-width: 860px) {
        .section-head--wide { grid-template-columns: 1fr; }
      }
    `,
  ],
})
export class SectionHeadComponent {
  readonly heading = input.required<Heading>();
  readonly center = input(false);
  /** Use on dark band sections. */
  readonly dark = input(false);
}
