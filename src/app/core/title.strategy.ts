import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { ContentService } from './services/content.service';

/** Page titles: "<route title> | <company name>", using the name from site.json. */
@Injectable()
export class SiteTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly content = inject(ContentService);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const { name, tagline } = this.content.site().company;
    const page = this.buildTitle(snapshot);
    this.title.setTitle(page ? `${page} | ${name}` : `${name} | ${tagline}`);
  }
}
