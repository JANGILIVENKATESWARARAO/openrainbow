import { Component, computed, inject, signal } from '@angular/core';
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
  /** Pages for the mega menu (services or solutions). */
  items: ContentPage[];
}

@Component({
  selector: 'or-header',
  imports: [RouterLink, RouterLinkActive, LogoComponent, IconComponent, ThemeToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  host: {
    '(window:scroll)': 'onScroll()',
    '(document:keydown.escape)': 'onEscape()',
  },
})
export class HeaderComponent {
  private readonly content = inject(ContentService);
  private readonly site = this.content.site;

  readonly contact = computed(() => this.site().contact);
  readonly header = computed(() => this.site().header);
  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);

  private readonly services = toSignal(this.content.pages('services'), { initialValue: [] });
  private readonly solutions = toSignal(this.content.pages('solutions'), { initialValue: [] });

  /** Navigation from site.json; mega menus are filled from services.json and solutions.json. */
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

  /** Removes focus so a hover/focus mega menu closes after a click. */
  blur(event: Event): void {
    (event.currentTarget as HTMLElement | null)?.blur();
    (document.activeElement as HTMLElement | null)?.blur();
  }

  onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }

  onEscape(): void {
    this.close();
    (document.activeElement as HTMLElement | null)?.blur();
  }
}
