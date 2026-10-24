import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageHeroComponent } from './page-hero.component';
import { loadSite, testProviders } from '../../../testing/test-helpers';

describe('PageHeroComponent', () => {
  let fixture: ComponentFixture<PageHeroComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [PageHeroComponent], providers: testProviders }).compileComponents();
    await loadSite();

    fixture = TestBed.createComponent(PageHeroComponent);
    fixture.componentRef.setInput('crumb', 'Services');
    fixture.componentRef.setInput('heading', { title: 'Our', emphasis: 'services', lead: 'Lead text' });
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('shows the breadcrumb, title and lead', () => {
    expect(el.querySelector('[aria-current]')?.textContent).toContain('Services');
    expect(el.querySelector('h1')?.textContent).toContain('Our');
    expect(el.querySelector('.lead')?.textContent).toContain('Lead text');
  });
});
