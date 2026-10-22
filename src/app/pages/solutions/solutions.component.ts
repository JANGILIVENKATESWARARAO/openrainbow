import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { CtaBandComponent } from '../../shared/cta-band/cta-band.component';
import { FEATURED, OUTCOMES, TECH_AREAS, VENDORS } from '../../core/data/site-content';

@Component({
  selector: 'or-solutions',
  imports: [RouterLink, PageHeroComponent, CtaBandComponent],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss',
})
export class SolutionsComponent {
  readonly areas = TECH_AREAS;
  readonly outcomes = OUTCOMES;
  readonly featured = FEATURED;
  readonly vendors = VENDORS;
}
