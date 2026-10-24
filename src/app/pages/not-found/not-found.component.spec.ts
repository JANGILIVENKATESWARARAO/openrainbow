import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundComponent } from './not-found.component';
import { loadSite, testProviders, testSite } from '../../../testing/test-helpers';

describe('NotFoundComponent', () => {
  let fixture: ComponentFixture<NotFoundComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [NotFoundComponent], providers: testProviders }).compileComponents();
    await loadSite();

    fixture = TestBed.createComponent(NotFoundComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('shows 404 with the orbit as the zero', () => {
    const code = el.querySelector('.nf__code')!;
    expect(code.textContent?.replace(/\s/g, '')).toBe('44');
    expect(code.querySelector('or-orbit')).toBeTruthy();
  });

  it('offers a link for every menu page', () => {
    expect(el.querySelectorAll('.nf__links a').length).toBe(testSite.navigation.length);
  });
});
