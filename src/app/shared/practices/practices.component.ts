import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../icon/icon.component';
import { Practice } from '../../core/models/content';

/** The three service practices. Compact on Home, full detail on Services. */
@Component({
  selector: 'or-practices',
  imports: [RouterLink, IconComponent],
  templateUrl: './practices.component.html',
  styleUrl: './practices.component.scss',
})
export class PracticesComponent {
  readonly practices = input.required<Practice[]>();
  readonly detailed = input(false);
}
