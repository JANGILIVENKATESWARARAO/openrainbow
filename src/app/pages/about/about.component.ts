import { Component } from '@angular/core';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { CtaBandComponent } from '../../shared/cta-band/cta-band.component';
import { COMPANY, CONTACT, ENGAGEMENT } from '../../core/data/site-content';

@Component({
  selector: 'or-about',
  imports: [PageHeroComponent, CtaBandComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly company = COMPANY;
  readonly contact = CONTACT;
  readonly engagement = ENGAGEMENT;
}
