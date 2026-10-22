import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../../shared/logo/logo.component';
import { COMPANY, CONTACT } from '../../core/data/site-content';

@Component({
  selector: 'or-footer',
  imports: [RouterLink, LogoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly company = COMPANY;
  readonly contact = CONTACT;
  readonly year = new Date().getFullYear();
}
