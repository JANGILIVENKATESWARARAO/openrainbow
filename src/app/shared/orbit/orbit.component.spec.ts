import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrbitComponent } from './orbit.component';
import { loadSite, testProviders } from '../../../testing/test-helpers';

describe('OrbitComponent', () => {
  let fixture: ComponentFixture<OrbitComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [OrbitComponent], providers: testProviders }).compileComponents();
    await loadSite();

    fixture = TestBed.createComponent(OrbitComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('draws two arcs around the logo', () => {
    expect(el.querySelectorAll('.or-loader__arc').length).toBe(2);
    expect(el.querySelector('img')?.getAttribute('aria-hidden')).toBe('true');
  });

  it('uses the label as alt text', async () => {
    fixture.componentRef.setInput('label', 'Loading');
    await fixture.whenStable();
    expect(el.querySelector('img')?.getAttribute('alt')).toBe('Loading');
  });
});
