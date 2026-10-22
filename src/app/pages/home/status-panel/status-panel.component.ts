import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';

interface StatusRow {
  system: string;
  detail: string;
  state: string;
}

/**
 * Illustrative 24/7 monitoring view shown in the home hero.
 * It shows what a managed customer sees; the data is example data.
 */
@Component({
  selector: 'or-status-panel',
  templateUrl: './status-panel.component.html',
  styleUrl: './status-panel.component.scss',
})
export class StatusPanelComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  readonly time = signal(this.ukTime());

  readonly rows: StatusRow[] = [
    { system: 'Core switching', detail: 'Data centre A', state: 'Operational' },
    { system: 'Storage array', detail: 'Primary cluster', state: 'Operational' },
    { system: 'Virtual hosts', detail: '24 of 24 online', state: 'Operational' },
    { system: 'Nightly backup', detail: 'Completed 02:00', state: 'Verified' },
    { system: 'DR replication', detail: 'Secondary site', state: 'In sync' },
  ];

  ngOnInit(): void {
    const timer = setInterval(() => this.time.set(this.ukTime()), 1000);
    this.destroyRef.onDestroy(() => clearInterval(timer));
  }

  private ukTime(): string {
    return new Date().toLocaleTimeString('en-GB', { timeZone: 'Europe/London', hour12: false });
  }
}
