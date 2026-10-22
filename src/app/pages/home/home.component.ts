import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StatusPanelComponent } from './status-panel/status-panel.component';
import { PracticesComponent } from '../../shared/practices/practices.component';
import { CtaBandComponent } from '../../shared/cta-band/cta-band.component';
import { APPROACH, COMPANY, FEATURED, OUTCOMES, TECH_AREAS, VENDORS } from '../../core/data/site-content';

@Component({
  selector: 'or-home',
  imports: [RouterLink, StatusPanelComponent, PracticesComponent, CtaBandComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly company = COMPANY;
  readonly vendors = VENDORS;
  readonly approach = APPROACH;
  readonly outcomes = OUTCOMES;
  readonly featured = FEATURED;
  readonly areas = TECH_AREAS.slice(0, 6);
  readonly years = new Date().getFullYear() - COMPANY.founded;
}
