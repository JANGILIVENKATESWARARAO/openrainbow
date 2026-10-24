import { Component, input } from '@angular/core';

/**
 * The OR mark with two "falling star" arcs chasing each other around it (same look as the loader).
 * Size: set the CSS variable --orbit on the element, e.g. `or-orbit { --orbit: 180px; }` (default 128px).
 * Optional: --arc-thick (ring width) and --arc-head (star size).
 */
@Component({
  selector: 'or-orbit',
  templateUrl: './orbit.component.html',
  styleUrl: './orbit.component.scss',
})
export class OrbitComponent {
  /** Text for screen readers. Leave empty when the orbit is only decoration. */
  readonly label = input('');
}
