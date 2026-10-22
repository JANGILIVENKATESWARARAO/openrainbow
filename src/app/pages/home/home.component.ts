import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SpectrumHeroComponent } from './spectrum-hero/spectrum-hero.component';
import { ServiceLinesComponent } from '../../shared/service-lines/service-lines.component';
import { CtaBandComponent } from '../../shared/cta-band/cta-band.component';
import { OUTCOMES, STAGES } from '../../core/data/site-content';

@Component({
  selector: 'or-home',
  imports: [RouterLink, SpectrumHeroComponent, ServiceLinesComponent, CtaBandComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  /** Each outcome borrows a stage colour for its dot. */
  readonly outcomes = OUTCOMES.map((text, i) => ({ text, color: STAGES[i].color }));
}
