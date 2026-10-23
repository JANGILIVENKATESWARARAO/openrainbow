import { Component, DestroyRef, OnInit, computed, inject, input, signal } from '@angular/core';
import { Item } from '../../../core/models/content';
import { SiteData, Stat } from '../../../core/models/site';
import { CountUpDirective } from '../../../shared/count-up/count-up.directive';

/**
 * Home hero visual: the OR mark at the centre of the IT life cycle (Design, Deploy, Operate, Improve),
 * with a star travelling round the ring and lighting each step, next to a live monitoring card.
 * All text comes from site.json (home.monitoring and home.approach.steps); the monitoring rows are example data.
 */
@Component({
  selector: 'or-ops-hub',
  imports: [CountUpDirective],
  templateUrl: './ops-hub.component.html',
  styleUrl: './ops-hub.component.scss',
})
export class OpsHubComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  readonly data = input.required<SiteData['home']['monitoring']>();
  /** Life cycle steps placed round the ring. */
  readonly steps = input.required<Item[]>();
  /** Coverage figures, already filled ({vendors}, {years}). */
  readonly stats = input.required<Stat[]>();

  readonly count = computed(() => this.steps().length);
  readonly time = signal(this.ukTime());

  ngOnInit(): void {
    const timer = setInterval(() => this.time.set(this.ukTime()), 1000);
    this.destroyRef.onDestroy(() => clearInterval(timer));
  }

  private ukTime(): string {
    return new Date().toLocaleTimeString('en-GB', { timeZone: 'Europe/London', hour12: false });
  }
}
