import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialIconComponent } from './social-icon.component';
import { loadSite, testProviders } from '../../../testing/test-helpers';

describe('SocialIconComponent', () => {
  let fixture: ComponentFixture<SocialIconComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [SocialIconComponent], providers: testProviders }).compileComponents();
    await loadSite();

    fixture = TestBed.createComponent(SocialIconComponent);
    fixture.componentRef.setInput('name', 'linkedin');
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('draws the LinkedIn icon', () => {
    expect(el.querySelector('svg rect')).toBeTruthy();
    expect(el.querySelector('svg circle')).toBeTruthy();
  });
});
