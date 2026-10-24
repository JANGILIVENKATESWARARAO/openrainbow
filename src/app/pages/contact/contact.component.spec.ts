import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { flushContent, loadSite, testProviders, testSite } from '../../../testing/test-helpers';

describe('ContactComponent', () => {
  let fixture: ComponentFixture<ContactComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ContactComponent], providers: testProviders }).compileComponents();
    await loadSite();

    fixture = TestBed.createComponent(ContactComponent);
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
    expect(el.querySelector('h1')?.textContent).toContain(testSite.pages.contact.title);
  });

  it('starts with an invalid form', () => {
    expect(fixture.componentInstance.form.valid).toBe(false);
  });
});
