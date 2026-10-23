import { Component, input } from '@angular/core';
import { Heading } from '../../core/models/site';
import { RevealDirective } from '../reveal/reveal.directive';

/**
 * Section heading from JSON: pill label, title with an emphasised ending, and an optional lead.
 * Anything placed inside (for example an "All solutions" link) is shown on the right.
 * The title stays on one line while it fits; the lead sits beside it when there is room, otherwise below.
 * Slides in when it scrolls into view.
 */
@Component({
  selector: 'or-section-head',
  imports: [RevealDirective],
  template: `
    <div class="section-head" [class.section-head--center]="center()" [class.section-head--dark]="dark()" orReveal>
      <div class="section-head__title">
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
        <p class="section-head__lead">{{ heading().lead }}</p>
      }
      <div class="section-head__aside"><ng-content /></div>
    </div>
  `,
  styles: [
    `
      :host { display: block; }

      /* Flexible row: title at its natural width (one line when it fits), lead and link next to it or wrapped below */
      .section-head {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-end;
        gap: 20px 64px;
      }
      .section-head__title { flex: 0 1 auto; min-width: 0; }
      .section-head__lead { flex: 1 1 340px; margin-left: auto; }
      .section-head__aside { flex: none; margin-left: auto; }
      .section-head__aside:empty { display: none; }

      .section-head--center { flex-direction: column; align-items: center; }
      .section-head--center .section-head__lead { flex: none; margin-inline: auto; }
      .section-head--center .section-head__aside { margin-inline: auto; }

      h2 { text-wrap: pretty; }

      @media (max-width: 860px) {
        .section-head__lead, .section-head__aside { flex-basis: 100%; margin-left: 0; }
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
