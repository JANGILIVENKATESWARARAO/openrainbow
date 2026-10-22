import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICE_LINES } from '../../core/data/site-content';

/** The three service lines, each tied to the life-cycle stages it covers. */
@Component({
  selector: 'or-service-lines',
  imports: [RouterLink],
  templateUrl: './service-lines.component.html',
  styleUrl: './service-lines.component.scss',
})
export class ServiceLinesComponent {
  /** When true, links each line to its section on the Services page. */
  linkToDetail = input(false);
  readonly lines = SERVICE_LINES;
}
