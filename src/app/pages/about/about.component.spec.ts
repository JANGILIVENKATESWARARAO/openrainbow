import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { flushContent, loadSite, testProviders, testSite } from '../../../testing/test-helpers';

describe('AboutComponent', () => {
  let fixture: ComponentFixture<AboutComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AboutComponent], providers: testProviders }).compileComponents();
    await loadSite();

    fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    flushContent();
    await fixture.whenStable();
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('shows the page title from site.json', () => {
    expect(el.querySelector('h1')?.textContent).toContain(testSite.pages.about.title);
  });
});
