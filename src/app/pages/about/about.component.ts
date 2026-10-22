import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { CtaBandComponent } from '../../shared/cta-band/cta-band.component';
import { CONTACT, QUALITY_PROMISE } from '../../core/data/site-content';

@Component({
  selector: 'or-about',
  imports: [PageHeroComponent, CtaBandComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  readonly words = QUALITY_PROMISE;
  readonly offices = CONTACT.offices;
  readonly i = signal(0);

  readonly ways = [
    { title: 'Start together', line: 'From the first business case, through design and deployment.' },
    { title: 'Join at any stage', line: 'Already mid-project? We pick up where you are.' },
    { title: 'Stay for the long run', line: 'Managed services that keep everything running and improving.' },
  ];

  ngOnInit(): void {
    const timer = setInterval(() => this.i.update((n) => (n + 1) % this.words.length), 2400);
    this.destroyRef.onDestroy(() => clearInterval(timer));
  }
}
