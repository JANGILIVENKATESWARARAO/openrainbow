import { Component, DestroyRef, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { STAGES } from '../../../core/data/site-content';

interface Fibre {
  no: string;
  name: string;
  line: string;
  color: string;
  d: string;
  labelY: number;
}

/**
 * Home hero. White light enters a prism and splits into six fibres:
 * one per stage of the IT life cycle. The active stage cycles on its own
 * and can be picked by click, tap or keyboard.
 */
@Component({
  selector: 'or-spectrum-hero',
  imports: [RouterLink],
  templateUrl: './spectrum-hero.component.html',
  styleUrl: './spectrum-hero.component.scss',
})
export class SpectrumHeroComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  readonly index = signal(0);
  readonly paused = signal(false);
  readonly active = computed(() => STAGES[this.index()]);

  readonly fibres: Fibre[] = STAGES.map((stage, i) => {
    const startY = 252 + i * 7;
    const endY = 48 + i * 84;
    return {
      no: stage.no,
      name: stage.name,
      line: stage.line,
      color: stage.color,
      labelY: endY + 7,
      d: `M 236 ${startY} C 360 ${startY}, 380 ${endY}, 500 ${endY} L 540 ${endY}`,
    };
  });

  ngOnInit(): void {
    const reduceMotion = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const timer = setInterval(() => {
      if (!this.paused()) this.index.update((i) => (i + 1) % STAGES.length);
    }, 3200);
    this.destroyRef.onDestroy(() => clearInterval(timer));
  }

  select(i: number): void {
    this.index.set(i);
    this.paused.set(true);
  }
}
