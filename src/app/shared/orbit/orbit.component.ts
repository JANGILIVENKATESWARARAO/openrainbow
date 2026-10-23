import { Component, input } from '@angular/core';

/**
 * The OR mark with two "falling star" arcs chasing each other around it (same look as the loader).
 * Size: set the CSS variable --orbit on the element, e.g. `or-orbit { --orbit: 180px; }` (default 128px).
 * Optional: --arc-thick (ring width) and --arc-head (star size).
 */
@Component({
  selector: 'or-orbit',
  template: `
    <span class="or-loader__orbit">
      <span class="or-loader__arc"></span>
      <span class="or-loader__arc or-loader__arc--inner"></span>
      <img class="or-loader__mark" src="images/logo-mark.svg" [attr.alt]="label() || null" [attr.aria-hidden]="label() ? null : 'true'" />
    </span>
  `,
  styles: [':host { display: inline-grid; place-items: center; }'],
})
export class OrbitComponent {
  /** Text for screen readers. Leave empty when the orbit is only decoration. */
  readonly label = input('');
}
