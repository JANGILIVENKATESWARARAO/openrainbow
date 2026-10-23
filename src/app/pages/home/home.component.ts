import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StatusPanelComponent } from './status-panel/status-panel.component';
import { PracticesComponent } from '../../shared/practices/practices.component';
import { CtaBandComponent } from '../../shared/cta-band/cta-band.component';
import { IconComponent } from '../../shared/icon/icon.component';
import { SectionHeadComponent } from '../../shared/section-head/section-head.component';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'or-home',
  imports: [RouterLink, DatePipe, StatusPanelComponent, PracticesComponent, CtaBandComponent, IconComponent, SectionHeadComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected readonly content = inject(ContentService);
  protected readonly site = this.content.site;

  /** All copy for this page comes from site.json → home. */
  readonly home = computed(() => this.site().home);
  readonly vendors = computed(() => this.site().vendors);
  readonly hero = computed(() => {
    const hero = this.home().hero;
    return { ...hero, eyebrow: this.content.fill(hero.eyebrow ?? ''), checks: hero.checks.map((c) => this.content.fill(c)) };
  });
  readonly stats = computed(() =>
    this.home().monitoring.coverage.stats.map((s) => ({ ...s, value: this.content.fill(s.value) })),
  );

  readonly services = toSignal(this.content.services$);
  readonly solutions = toSignal(this.content.solutions$);
  private readonly posts = toSignal(this.content.posts$, { initialValue: [] });

  readonly technologies = computed(() => this.solutions()?.technologies.slice(0, this.home().technologies.count) ?? []);
  readonly latestPost = computed(() => this.posts()[0]);
}
