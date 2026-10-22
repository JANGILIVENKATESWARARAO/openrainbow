import { Component } from '@angular/core';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { ServiceLinesComponent } from '../../shared/service-lines/service-lines.component';
import { CtaBandComponent } from '../../shared/cta-band/cta-band.component';
import { CAPABILITIES, STAGES } from '../../core/data/site-content';

@Component({
  selector: 'or-services',
  imports: [PageHeroComponent, ServiceLinesComponent, CtaBandComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  readonly stages = STAGES;
  readonly capabilities = CAPABILITIES;
}
