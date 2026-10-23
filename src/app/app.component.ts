import { Component, DOCUMENT, afterNextRender, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ScrollTopComponent } from './shared/scroll-top/scroll-top.component';
import { LoaderComponent } from './shared/loader/loader.component';

@Component({
  selector: 'or-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ScrollTopComponent, LoaderComponent],
  template: `
    <a class="skip-link" href="#main">Skip to content</a>
    <or-header />
    <main id="main">
      <router-outlet />
    </main>
    <or-footer />
    <or-scroll-top />
    <or-loader />
  `,
  styles: [
    `
      :host { display: flex; flex-direction: column; min-height: 100vh; }
      main { flex: 1; }
      .skip-link {
        position: absolute; left: 16px; top: -60px; z-index: 100;
        padding: 10px 16px; border-radius: 8px;
        background: var(--surface); color: var(--ink); font-weight: 600; box-shadow: 0 0 0 2px var(--accent);
        transition: top 0.2s;
      }
      .skip-link:focus { top: 12px; }
    `,
  ],
})
export class AppComponent {
  constructor() {
    // Fade out the start-up loader from index.html once the first page has rendered.
    const document = inject(DOCUMENT);
    afterNextRender(() => {
      const boot = document.getElementById('or-boot');
      if (!boot) return;
      boot.classList.add('is-hidden');
      setTimeout(() => boot.remove(), 600);
    });
  }
}
