import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { flushContent, loadSite, testProviders, testSite } from '../../../testing/test-helpers';

describe('FooterComponent', () => {
  let fixture: ComponentFixture<FooterComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [FooterComponent], providers: testProviders }).compileComponents();
    await loadSite();

    fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    flushContent();
    await fixture.whenStable();
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('links to LinkedIn', () => {
    const linkedIn = testSite.footer.social.find((s) => s.icon === 'linkedin')!;
    expect(el.querySelector(`a[href="${linkedIn.url}"]`)).toBeTruthy();
  });

  it('shows the contact email', () => {
    expect(el.textContent).toContain(testSite.contact.email);
  });
});
