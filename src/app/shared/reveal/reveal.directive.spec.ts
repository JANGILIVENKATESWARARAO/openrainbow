import { Component, provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RevealDirective } from './reveal.directive';

@Component({
  imports: [RevealDirective],
  template: `<div orReveal="left" [revealDelay]="900">Content</div>`,
})
class HostComponent {}

describe('RevealDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HostComponent], providers: [provideZonelessChangeDetection()] });
  });

  it('adds the reveal class, effect and a capped delay', async () => {
    const fixture = TestBed.createComponent(HostComponent);
    await fixture.whenStable();
    const el: HTMLElement = fixture.nativeElement.querySelector('div');
    expect(el.classList).toContain('reveal');
    expect(el.dataset['reveal']).toBe('left');
    expect(el.style.getPropertyValue('--reveal-delay')).toBe('480ms');
  });
});
