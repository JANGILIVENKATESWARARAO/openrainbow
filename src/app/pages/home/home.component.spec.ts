import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { flushContent, loadSite, testProviders, testSite } from '../../../testing/test-helpers';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [HomeComponent], providers: testProviders }).compileComponents();
    await loadSite();

    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    flushContent();
    await fixture.whenStable();
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('shows the hero title', () => {
    expect(el.querySelector('h1')?.textContent).toContain(testSite.home.hero.title);
  });

  it('shows every partner logo (twice, for the endless strip)', () => {
    expect(el.querySelectorAll('.marquee img').length).toBe(testSite.partners.length * 2);
  });
});
