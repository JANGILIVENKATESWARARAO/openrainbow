import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconComponent } from './icon.component';
import { loadSite, testProviders } from '../../../testing/test-helpers';

describe('IconComponent', () => {
  let fixture: ComponentFixture<IconComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [IconComponent], providers: testProviders }).compileComponents();
    await loadSite();

    fixture = TestBed.createComponent(IconComponent);
    fixture.componentRef.setInput('name', 'shield');
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders an svg icon', () => {
    expect(el.querySelector('svg')).toBeTruthy();
  });
});
