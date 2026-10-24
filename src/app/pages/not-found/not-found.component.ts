import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../core/services/content.service';
import { OrbitComponent } from '../../shared/orbit/orbit.component';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

/** 404 page for any unknown address (e.g. /portfolio). The "0" is the OR mark with its orbiting stars. */
@Component({
  selector: 'or-not-found',
  imports: [RouterLink, OrbitComponent, RevealDirective],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  private readonly content = inject(ContentService);
  readonly copy = computed(() => this.content.site().pages.notFound);

  /** "404" → "4" + orbit + "4". */
  readonly first = computed(() => this.copy().code.slice(0, 1));
  readonly last = computed(() => this.copy().code.slice(-1));

  /** Main menu pages as quick links. */
  readonly links = computed(() => this.content.site().navigation);
}
