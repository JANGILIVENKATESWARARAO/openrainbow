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
  template: `
    <div class="section-head" [class.section-head--center]="center()" [class.section-head--dark]="dark()" orReveal>
      <div class="section-head__main">
        @if (heading().eyebrow) {
          <p class="eyebrow" [class.eyebrow--dark]="dark()">{{ heading().eyebrow }}</p>
        }
        <h2>
          {{ heading().title }}
          @if (heading().emphasis) {
            <span class="emphasis">{{ heading().emphasis }}</span>
          }
        </h2>
        @if (heading().lead) {
          <p class="section-head__lead">{{ heading().lead }}</p>
        }
      </div>
      <div class="section-head__aside"><ng-content /></div>
    </div>
  `,
  styles: [
    `
      :host { display: block; }

      .section-head {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-end;
        justify-content: space-between;
        gap: 20px 48px;
      }

      /* Label, title and lead in one column */
      .section-head__main {
        display: grid;
        justify-items: start;
        flex: 1 1 auto;
        min-width: 0;
      }
      .section-head__main h2 { text-wrap: pretty; }
      .section-head__lead { max-width: 64ch; margin-top: 16px; font-size: 18px; }

      .section-head__aside { flex: none; }
      .section-head__aside:empty { display: none; }

      .section-head--center { flex-direction: column; align-items: center; }
      .section-head--center .section-head__main { justify-items: center; text-align: center; }
      .section-head--center .section-head__lead { margin-inline: auto; }
    `,
  ],
})
export class SectionHeadComponent {
  readonly heading = input.required<Heading>();
  readonly center = input(false);
  /** Use on dark band sections. */
  readonly dark = input(false);
}
