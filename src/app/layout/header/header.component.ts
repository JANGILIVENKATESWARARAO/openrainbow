import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoComponent } from '../../shared/logo/logo.component';
import { CONTACT } from '../../core/data/site-content';
import { pagesIn } from '../../core/data/detail-pages';

interface NavLink {
  label: string;
  path: string;
  /** Dropdown links (detail pages). */
  children?: { label: string; path: string }[];
}

@Component({
  selector: 'or-header',
  imports: [RouterLink, RouterLinkActive, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly contact = CONTACT;
  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);

  readonly links: NavLink[] = [
    {
      label: 'Services',
      path: '/services',
      children: pagesIn('services').map((p) => ({ label: p.title, path: `/services/${p.slug}` })),
    },
    {
      label: 'Solutions',
      path: '/solutions',
      children: pagesIn('solutions').map((p) => ({ label: p.title, path: `/solutions/${p.slug}` })),
    },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  toggle(): void {
    this.menuOpen.update((open) => !open);
  }

  close(): void {
    this.menuOpen.set(false);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }
}
