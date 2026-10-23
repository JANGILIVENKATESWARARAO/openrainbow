import { Component, computed, inject } from '@angular/core';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { CtaBandComponent } from '../../shared/cta-band/cta-band.component';
import { SectionHeadComponent } from '../../shared/section-head/section-head.component';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'or-about',
  imports: [PageHeroComponent, CtaBandComponent, SectionHeadComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  private readonly content = inject(ContentService);

  /** Copy from site.json → pages.about. */
  readonly copy = computed(() => this.content.site().pages.about);
  readonly offices = computed(() => this.content.site().contact.offices);
  readonly facts = computed(() => this.copy().facts.map((f) => ({ ...f, value: this.content.fill(f.value) })));
}
