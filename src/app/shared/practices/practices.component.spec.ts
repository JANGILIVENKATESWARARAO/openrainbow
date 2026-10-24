import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PracticesComponent } from './practices.component';
import { loadSite, testProviders, testServices } from '../../../testing/test-helpers';

describe('PracticesComponent', () => {
  let fixture: ComponentFixture<PracticesComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [PracticesComponent], providers: testProviders }).compileComponents();
    await loadSite();

    fixture = TestBed.createComponent(PracticesComponent);
    fixture.componentRef.setInput('practices', testServices.practices);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('shows every practice', () => {
    for (const practice of testServices.practices) expect(el.textContent).toContain(practice.title);
  });
});
