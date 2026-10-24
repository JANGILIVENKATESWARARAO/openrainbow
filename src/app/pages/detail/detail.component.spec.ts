import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailComponent } from './detail.component';
import { flushContent, loadSite, testProviders, testServices } from '../../../testing/test-helpers';

describe('DetailComponent', () => {
  let fixture: ComponentFixture<DetailComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [DetailComponent], providers: testProviders }).compileComponents();
    await loadSite();

    fixture = TestBed.createComponent(DetailComponent);
    fixture.componentRef.setInput('page', testServices.items[0]);
    fixture.componentRef.setInput('category', 'services');
    fixture.detectChanges();
    flushContent();
    await fixture.whenStable();
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('shows the page title', () => {
    expect(el.querySelector('h1')?.textContent).toContain(testServices.items[0].title);
  });
});
