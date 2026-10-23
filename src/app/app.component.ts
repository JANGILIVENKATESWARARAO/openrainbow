import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'or-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <a class="skip-link" href="#main">Skip to content</a>
    <or-header />
    <main id="main">
      <router-outlet />
    </main>
    <or-footer />
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
export class AppComponent {}
