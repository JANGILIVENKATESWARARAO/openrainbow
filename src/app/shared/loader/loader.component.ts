import { Component, DestroyRef, inject, signal } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

/** Only show the loader when a page takes longer than this (ms), so fast page changes never flash. */
const SHOW_AFTER = 250;

/**
 * Page loader: the OR mark with two "falling star" arcs orbiting it.
 * Shown while a page change is waiting for its content (route resolvers).
 * The same look is used for the start-up loader in index.html (styles: ".or-loader" in styles.scss).
 */
@Component({
  selector: 'or-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  protected readonly visible = signal(false);

  constructor() {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const sub = inject(Router).events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        clearTimeout(timer);
        timer = setTimeout(() => this.visible.set(true), SHOW_AFTER);
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        clearTimeout(timer);
        this.visible.set(false);
      }
    });
    inject(DestroyRef).onDestroy(() => {
      clearTimeout(timer);
      sub.unsubscribe();
    });
  }
}
