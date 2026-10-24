import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolutionsComponent } from './solutions.component';
import { flushContent, loadSite, testProviders, testSite } from '../../../testing/test-helpers';

describe('SolutionsComponent', () => {
  let fixture: ComponentFixture<SolutionsComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [SolutionsComponent], providers: testProviders }).compileComponents();
    await loadSite();

    fixture = TestBed.createComponent(SolutionsComponent);
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
    expect(el.querySelector('h1')?.textContent).toContain(testSite.pages.solutions.title);
  });
});
