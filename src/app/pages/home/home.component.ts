import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { StatusPanelComponent } from './status-panel/status-panel.component';
import { PracticesComponent } from '../../shared/practices/practices.component';
import { CtaBandComponent } from '../../shared/cta-band/cta-band.component';
import { IconComponent } from '../../shared/icon/icon.component';
import { SectionHeadComponent } from '../../shared/section-head/section-head.component';
import { RevealDirective } from '../../shared/reveal/reveal.directive';
import { CountUpDirective } from '../../shared/count-up/count-up.directive';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'or-home',
  imports: [
    RouterLink,
    StatusPanelComponent,
    PracticesComponent,
    CtaBandComponent,
    IconComponent,
    SectionHeadComponent,
    RevealDirective,
    CountUpDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected readonly content = inject(ContentService);
  protected readonly site = this.content.site;

  /** All copy for this page comes from site.json → home. */
  readonly home = computed(() => this.site().home);
  readonly partners = computed(() => this.site().partners);
  readonly hero = computed(() => {
    const hero = this.home().hero;
    return { ...hero, eyebrow: this.content.fill(hero.eyebrow ?? ''), checks: hero.checks.map((c) => this.content.fill(c)) };
  });
  readonly stats = computed(() =>
    this.home().monitoring.coverage.stats.map((s) => ({ ...s, value: this.content.fill(s.value) })),
  );

  readonly services = toSignal(this.content.services$);
  readonly solutions = toSignal(this.content.solutions$);

  readonly technologies = computed(() => this.solutions()?.technologies.slice(0, this.home().technologies.count) ?? []);
}
