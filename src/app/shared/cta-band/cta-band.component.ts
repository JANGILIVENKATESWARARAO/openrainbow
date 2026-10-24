import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../core/services/content.service';
import { RevealDirective } from '../reveal/reveal.directive';

@Component({
  selector: 'or-cta-band',
  imports: [RouterLink, RevealDirective],
  templateUrl: './cta-band.component.html',
  styleUrl: './cta-band.component.scss',
})
export class CtaBandComponent {
  private readonly site = inject(ContentService).site;

  /** Overrides the default title from site.json. */
  readonly title = input<string>('');
  /** Pre-selects the enquiry type on the contact form. */
  readonly topic = input<string>('');

  protected readonly cta = computed(() => this.site().cta);
  protected readonly contact = computed(() => this.site().contact);
  protected readonly heading = computed(() => this.title() || this.cta().title);
  protected readonly query = computed(() => (this.topic() ? { topic: this.topic() } : {}));
}
