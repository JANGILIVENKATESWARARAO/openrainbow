import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CtaBandComponent } from './cta-band.component';
import { loadSite, testProviders, testSite } from '../../../testing/test-helpers';

describe('CtaBandComponent', () => {
  let fixture: ComponentFixture<CtaBandComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [CtaBandComponent], providers: testProviders }).compileComponents();
    await loadSite();

    fixture = TestBed.createComponent(CtaBandComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('shows the default title from site.json', () => {
    expect(el.querySelector('h2')?.textContent).toContain(testSite.cta.title);
  });

  it('uses a custom title when one is given', async () => {
    fixture.componentRef.setInput('title', 'Custom title');
    await fixture.whenStable();
    expect(el.querySelector('h2')?.textContent).toContain('Custom title');
  });
});
