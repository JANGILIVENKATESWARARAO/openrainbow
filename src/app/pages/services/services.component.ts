import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { PracticesComponent } from '../../shared/practices/practices.component';
import { CtaBandComponent } from '../../shared/cta-band/cta-band.component';
import { IconComponent } from '../../shared/icon/icon.component';
import { SectionHeadComponent } from '../../shared/section-head/section-head.component';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'or-services',
  imports: [RouterLink, PageHeroComponent, PracticesComponent, CtaBandComponent, IconComponent, SectionHeadComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  private readonly content = inject(ContentService);
  readonly copy = computed(() => this.content.site().pages.services);
  readonly data = toSignal(this.content.services$);
}
