import { Component, provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CountUpDirective } from './count-up.directive';

@Component({
  imports: [CountUpDirective],
  template: `<span [orCountUp]="'24/7'"></span><span [orCountUp]="'30+'"></span>`,
})
class HostComponent {}

describe('CountUpDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HostComponent], providers: [provideZonelessChangeDetection()] });
  });

  it('shows the value and keeps values like 24/7 as they are', async () => {
    const fixture = TestBed.createComponent(HostComponent);
    await fixture.whenStable();
    const [first, second] = fixture.nativeElement.querySelectorAll('span');
    expect(first.textContent).toBe('24/7');
    expect(second.textContent).toBe('30+');
    expect(first.classList).toContain('count-up');
  });
});
