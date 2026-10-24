import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollTopComponent } from './scroll-top.component';
import { loadSite, testProviders } from '../../../testing/test-helpers';

describe('ScrollTopComponent', () => {
  let fixture: ComponentFixture<ScrollTopComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ScrollTopComponent], providers: testProviders }).compileComponents();
    await loadSite();

    fixture = TestBed.createComponent(ScrollTopComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('is hidden at the top of the page', () => {
    expect(fixture.componentInstance.visible()).toBe(false);
    expect(el.querySelector('button')?.classList).not.toContain('is-visible');
  });
});
