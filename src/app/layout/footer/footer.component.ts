import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../../shared/logo/logo.component';
import { IconComponent } from '../../shared/icon/icon.component';
import { COMPANY, CONTACT } from '../../core/data/site-content';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'or-footer',
  imports: [RouterLink, LogoComponent, IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private readonly content = inject(ContentService);

  readonly company = COMPANY;
  readonly contact = CONTACT;
  readonly year = new Date().getFullYear();
  readonly services = toSignal(this.content.pages('services'), { initialValue: [] });
  readonly solutions = toSignal(this.content.pages('solutions'), { initialValue: [] });
  readonly registered = CONTACT.offices.find((o) => o.label === 'Registered office');
  readonly office = CONTACT.offices.find((o) => o.label === 'Office');
}
