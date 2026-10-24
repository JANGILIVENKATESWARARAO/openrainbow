import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { flushContent, loadSite, testProviders } from '../testing/test-helpers';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AppComponent], providers: testProviders }).compileComponents();
    await loadSite();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    flushContent();
    await fixture.whenStable();
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders the header, main area and footer', () => {
    expect(el.querySelector('or-header')).toBeTruthy();
    expect(el.querySelector('main#main')).toBeTruthy();
    expect(el.querySelector('or-footer')).toBeTruthy();
  });
});
