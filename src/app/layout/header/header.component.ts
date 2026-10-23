import { Component, DOCUMENT, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { LogoComponent } from '../../shared/logo/logo.component';
import { IconComponent } from '../../shared/icon/icon.component';
import { ThemeToggleComponent } from '../../shared/theme-toggle/theme-toggle.component';
import { ContentService } from '../../core/services/content.service';
import { ContentPage } from '../../core/models/content';
import { NavItem } from '../../core/models/site';

interface NavLink extends NavItem {
  /** Pages for the dropdown (services or solutions). */
  items: ContentPage[];
}

@Component({
  selector: 'or-header',
  imports: [RouterLink, RouterLinkActive, LogoComponent, IconComponent, ThemeToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  host: {
    '[class.is-hidden]': 'hidden()',
    '(window:scroll)': 'onScroll()',
    '(focusin)': 'show()',
    '(document:keydown.escape)': 'onEscape()',
  },
})
export class HeaderComponent {
  private readonly content = inject(ContentService);
  private readonly site = this.content.site;

  readonly header = computed(() => this.site().header);
  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);
  /** True while scrolling down: the bar slides up out of view. Scrolling up brings it back. */
  readonly hidden = signal(false);

  private readonly document = inject(DOCUMENT);
  private lastY = 0;

  private readonly services = toSignal(this.content.pages('services'), { initialValue: [] });
  private readonly solutions = toSignal(this.content.pages('solutions'), { initialValue: [] });

  /** Navigation from site.json; dropdowns are filled from services.json and solutions.json. */
  readonly links = computed<NavLink[]>(() =>
    this.site().navigation.map((item) => ({
      ...item,
      items: item.menu === 'services' ? this.services() : item.menu === 'solutions' ? this.solutions() : [],
    })),
  );

  constructor() {
    // Close the mobile menu after every navigation.
    inject(Router)
      .events.pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.close());
  }

  toggle(): void {
    this.menuOpen.update((open) => !open);
  }

  close(): void {
    this.menuOpen.set(false);
  }

  /** Removes focus so a hover/focus dropdown closes after a click. */
  blur(event: Event): void {
    (event.currentTarget as HTMLElement | null)?.blur();
    (document.activeElement as HTMLElement | null)?.blur();
  }

  onScroll(): void {
    const y = Math.max(window.scrollY, 0);
    this.scrolled.set(y > 40);

    const delta = y - this.lastY;
    if (y < 120 || this.menuOpen()) {
      this.setHidden(false); // always show near the top and while the mobile menu is open
    } else if (delta > 6) {
      this.setHidden(true); // scrolling down
    } else if (delta < -6) {
      this.setHidden(false); // scrolling up
    }
    if (Math.abs(delta) > 6 || y < 120) this.lastY = y;
  }

  /** Brings the bar back, e.g. when keyboard focus moves into it. */
  show(): void {
    this.setHidden(false);
  }

  /** Also flags <html> so other parts (e.g. the blog reading bar) can follow the bar. */
  private setHidden(hidden: boolean): void {
    if (hidden === this.hidden()) return;
    this.hidden.set(hidden);
    this.document.documentElement.classList.toggle('header-hidden', hidden);
  }

  onEscape(): void {
    this.close();
    (document.activeElement as HTMLElement | null)?.blur();
  }
}
