import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { CtaBandComponent } from '../../shared/cta-band/cta-band.component';
import { IconComponent } from '../../shared/icon/icon.component';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'or-solutions',
  imports: [RouterLink, PageHeroComponent, CtaBandComponent, IconComponent],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss',
})
export class SolutionsComponent {
  readonly data = toSignal(inject(ContentService).solutions$);
}
