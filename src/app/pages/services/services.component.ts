import { Component } from '@angular/core';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { PracticesComponent } from '../../shared/practices/practices.component';
import { CtaBandComponent } from '../../shared/cta-band/cta-band.component';
import { SPECIALIST_SERVICES } from '../../core/data/site-content';

@Component({
  selector: 'or-services',
  imports: [PageHeroComponent, PracticesComponent, CtaBandComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  readonly specialist = SPECIALIST_SERVICES;
}
