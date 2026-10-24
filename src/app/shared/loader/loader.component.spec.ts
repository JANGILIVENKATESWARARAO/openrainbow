import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderComponent } from './loader.component';
import { loadSite, testProviders } from '../../../testing/test-helpers';

describe('LoaderComponent', () => {
  let fixture: ComponentFixture<LoaderComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [LoaderComponent], providers: testProviders }).compileComponents();
    await loadSite();

    fixture = TestBed.createComponent(LoaderComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('is hidden until a slow page change starts', () => {
    expect(el.querySelector('.or-loader')?.classList).toContain('is-hidden');
  });
});
