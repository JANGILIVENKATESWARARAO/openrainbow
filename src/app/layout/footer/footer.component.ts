import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../../shared/logo/logo.component';
import { IconComponent } from '../../shared/icon/icon.component';
import { ContentService } from '../../core/services/content.service';
import { RevealDirective } from '../../shared/reveal/reveal.directive';
import { SocialIconComponent } from '../../shared/social-icon/social-icon.component';

@Component({
  selector: 'or-footer',
  imports: [RouterLink, LogoComponent, IconComponent, RevealDirective, SocialIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private readonly content = inject(ContentService);
  private readonly site = this.content.site;

  readonly year = new Date().getFullYear();
  readonly company = computed(() => this.site().company);
  readonly contact = computed(() => this.site().contact);
  readonly footer = computed(() => this.site().footer);
  readonly summary = computed(() => this.content.fill(this.company().summary));
  readonly office = computed(() => this.contact().offices[0]);
  readonly registered = computed(() => this.contact().offices[1]);

  readonly services = toSignal(this.content.pages('services'), { initialValue: [] });
  readonly solutions = toSignal(this.content.pages('solutions'), { initialValue: [] });
}
