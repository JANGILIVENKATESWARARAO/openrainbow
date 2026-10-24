import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoComponent } from './logo.component';
import { loadSite, testProviders, testSite } from '../../../testing/test-helpers';

describe('LogoComponent', () => {
  let fixture: ComponentFixture<LogoComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [LogoComponent], providers: testProviders }).compileComponents();
    await loadSite();

    fixture = TestBed.createComponent(LogoComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('uses the company name as alt text', () => {
    expect(el.querySelector('img')?.getAttribute('alt')).toBe(testSite.company.name);
  });

  it('uses the white logo when inverse', async () => {
    fixture.componentRef.setInput('inverse', true);
    await fixture.whenStable();
    expect(el.querySelector('img')?.getAttribute('src')).toContain('logo-dark.svg');
  });
});
