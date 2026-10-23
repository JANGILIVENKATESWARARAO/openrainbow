import { Component, DestroyRef, OnInit, inject, input, signal } from '@angular/core';
import { SiteData } from '../../../core/models/site';

/**
 * Illustrative 24/7 monitoring view shown in the home hero.
 * Rows and labels come from site.json → home.monitoring (example data).
 */
@Component({
  selector: 'or-status-panel',
  templateUrl: './status-panel.component.html',
  styleUrl: './status-panel.component.scss',
})
export class StatusPanelComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  readonly data = input.required<SiteData['home']['monitoring']>();
  readonly time = signal(this.ukTime());

  ngOnInit(): void {
    const timer = setInterval(() => this.time.set(this.ukTime()), 1000);
    this.destroyRef.onDestroy(() => clearInterval(timer));
  }

  private ukTime(): string {
    return new Date().toLocaleTimeString('en-GB', { timeZone: 'Europe/London', hour12: false });
  }
}
