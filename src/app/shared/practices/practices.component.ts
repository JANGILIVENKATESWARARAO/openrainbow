import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PRACTICES } from '../../core/data/site-content';

/** The three service practices. Compact on Home, full detail on Services. */
@Component({
  selector: 'or-practices',
  imports: [RouterLink],
  templateUrl: './practices.component.html',
  styleUrl: './practices.component.scss',
})
export class PracticesComponent {
  detailed = input(false);
  readonly practices = PRACTICES;
}
