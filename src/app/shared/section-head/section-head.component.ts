import { Component, input } from '@angular/core';
import { Heading } from '../../core/models/site';
import { RevealDirective } from '../reveal/reveal.directive';

/**
 * Section heading from JSON: pill label, title with an emphasised ending, and an optional lead.
 * Anything placed inside (for example an "All solutions" link) is shown on the right.
 * Slides in when it scrolls into view.
 */
@Component({
  selector: 'or-section-head',
  imports: [RevealDirective],
  template: `
    <div class="section-head" [class.section-head--center]="center()" [class.section-head--dark]="dark()" orReveal>
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
  styles: [':host { display: block; }'],
})
export class SectionHeadComponent {
  readonly heading = input.required<Heading>();
  readonly center = input(false);
  /** Use on dark band sections. */
  readonly dark = input(false);
}
