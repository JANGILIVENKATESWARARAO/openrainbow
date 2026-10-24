import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeToggleComponent } from './theme-toggle.component';
import { loadSite, testProviders } from '../../../testing/test-helpers';
import { ThemeService } from '../../core/services/theme.service';

describe('ThemeToggleComponent', () => {
  let fixture: ComponentFixture<ThemeToggleComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ThemeToggleComponent], providers: testProviders }).compileComponents();
    await loadSite();

    fixture = TestBed.createComponent(ThemeToggleComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('switches the theme when clicked', () => {
    const theme = TestBed.inject(ThemeService);
    const before = theme.theme();
    el.querySelector<HTMLButtonElement>('button')!.click();
    expect(theme.theme()).not.toBe(before);
  });
});
