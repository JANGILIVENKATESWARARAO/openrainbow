import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoComponent } from '../../shared/logo/logo.component';
import { CONTACT } from '../../core/data/site-content';

interface NavLink {
  label: string;
  path: string;
  exact: boolean;
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
    { label: 'Home', path: '/', exact: true },
    { label: 'Services', path: '/services', exact: false },
    { label: 'About', path: '/about', exact: false },
    { label: 'Contact', path: '/contact', exact: false },
  ];

  toggle(): void {
    this.menuOpen.update((open) => !open);
  }

  close(): void {
    this.menuOpen.set(false);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }
}
