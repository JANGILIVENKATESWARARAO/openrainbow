import { Component, input } from '@angular/core';

export type SocialIcon = 'linkedin' | 'x' | 'facebook' | 'instagram' | 'youtube';

/**
 * Social network icons, drawn as line icons to match the Lucide set (Lucide has no brand icons).
 * Colour follows the text colour (currentColor).
 */
@Component({
  selector: 'or-social-icon',
  templateUrl: './social-icon.component.html',
  styleUrl: './social-icon.component.scss',
})
export class SocialIconComponent {
  readonly name = input.required<SocialIcon>();
}
