import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StatusPanelComponent } from './status-panel/status-panel.component';
import { PracticesComponent } from '../../shared/practices/practices.component';
import { CtaBandComponent } from '../../shared/cta-band/cta-band.component';
import { IconComponent } from '../../shared/icon/icon.component';
import { APPROACH, COMPANY, VENDORS } from '../../core/data/site-content';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'or-home',
  imports: [RouterLink, DatePipe, StatusPanelComponent, PracticesComponent, CtaBandComponent, IconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly content = inject(ContentService);

  readonly company = COMPANY;
  readonly vendors = VENDORS;
  readonly approach = APPROACH;
  readonly years = new Date().getFullYear() - COMPANY.founded;
  readonly checks = ['UK based since 2014', '24/7 monitoring and service desk', 'Independent, multi-vendor advice'];

  readonly services = toSignal(this.content.services$);
  readonly solutions = toSignal(this.content.solutions$);
  private readonly posts = toSignal(this.content.posts$, { initialValue: [] });

  readonly technologies = computed(() => this.solutions()?.technologies.slice(0, 6) ?? []);
  readonly latestPost = computed(() => this.posts()[0]);
}
