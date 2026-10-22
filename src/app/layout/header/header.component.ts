import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { LogoComponent } from '../../shared/logo/logo.component';
import { IconComponent } from '../../shared/icon/icon.component';
import { CONTACT } from '../../core/data/site-content';
import { ContentService } from '../../core/services/content.service';
import { ContentPage } from '../../core/models/content';

interface NavLink {
  label: string;
  path: string;
  /** Mega menu content (services and solutions). */
  menu?: { intro: string; items: ContentPage[] };
}

@Component({
  selector: 'or-header',
  imports: [RouterLink, RouterLinkActive, LogoComponent, IconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly content = inject(ContentService);

  readonly contact = CONTACT;
  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);

  private readonly services = toSignal(this.content.pages('services'), { initialValue: [] });
  private readonly solutions = toSignal(this.content.pages('solutions'), { initialValue: [] });

  readonly links = computed<NavLink[]>(() => [
    {
      label: 'Services',
      path: '/services',
      menu: { intro: 'Infrastructure, managed and professional services across the full IT life cycle.', items: this.services() },
    },
    {
      label: 'Solutions',
      path: '/solutions',
      menu: { intro: 'Technology from leading vendors, designed around the outcomes your business needs.', items: this.solutions() },
    },
    { label: 'Insights', path: '/insights' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ]);

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

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
    (document.activeElement as HTMLElement | null)?.blur();
  }
}
