import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { flushContent, loadSite, testProviders, testSite } from '../../../testing/test-helpers';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [HeaderComponent], providers: testProviders }).compileComponents();
    await loadSite();

    fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    flushContent();
    await fixture.whenStable();
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('shows every menu item from site.json', () => {
    const text = el.querySelector('.header__links')?.textContent ?? '';
    for (const item of testSite.navigation) expect(text).toContain(item.label);
  });

  it('opens and closes the mobile menu', () => {
    const toggle = el.querySelector<HTMLButtonElement>('.header__toggle')!;
    toggle.click();
    fixture.detectChanges();
    expect(fixture.componentInstance.menuOpen()).toBe(true);
    toggle.click();
    fixture.detectChanges();
    expect(fixture.componentInstance.menuOpen()).toBe(false);
  });

  it('keeps Services and Solutions closed until tapped', () => {
    const path = testSite.navigation.find((n) => n.menu)!.path;
    expect(fixture.componentInstance.expanded()).toBeNull();
    fixture.componentInstance.toggleSection(path);
    expect(fixture.componentInstance.expanded()).toBe(path);
  });
});
