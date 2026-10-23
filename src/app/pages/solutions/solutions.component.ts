import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { CtaBandComponent } from '../../shared/cta-band/cta-band.component';
import { IconComponent } from '../../shared/icon/icon.component';
import { SectionHeadComponent } from '../../shared/section-head/section-head.component';
import { ContentService } from '../../core/services/content.service';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

@Component({
  selector: 'or-solutions',
  imports: [RouterLink, PageHeroComponent, CtaBandComponent, IconComponent, SectionHeadComponent, RevealDirective],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss',
})
export class SolutionsComponent {
  private readonly content = inject(ContentService);
  readonly copy = computed(() => this.content.site().pages.solutions);
  readonly data = toSignal(this.content.solutions$);
}
