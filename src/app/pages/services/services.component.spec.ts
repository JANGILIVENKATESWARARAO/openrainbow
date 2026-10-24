import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesComponent } from './services.component';
import { flushContent, loadSite, testProviders, testSite } from '../../../testing/test-helpers';

describe('ServicesComponent', () => {
  let fixture: ComponentFixture<ServicesComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ServicesComponent], providers: testProviders }).compileComponents();
    await loadSite();

    fixture = TestBed.createComponent(ServicesComponent);
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
    expect(el.querySelector('h1')?.textContent).toContain(testSite.pages.services.title);
  });
});
