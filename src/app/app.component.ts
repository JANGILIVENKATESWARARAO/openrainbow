import { Component, DOCUMENT, afterNextRender, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ScrollTopComponent } from './shared/scroll-top/scroll-top.component';
import { LoaderComponent } from './shared/loader/loader.component';

@Component({
  selector: 'or-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ScrollTopComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
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
