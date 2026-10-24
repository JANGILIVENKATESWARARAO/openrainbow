import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionHeadComponent } from './section-head.component';
import { loadSite, testProviders } from '../../../testing/test-helpers';

describe('SectionHeadComponent', () => {
  let fixture: ComponentFixture<SectionHeadComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [SectionHeadComponent], providers: testProviders }).compileComponents();
    await loadSite();

    fixture = TestBed.createComponent(SectionHeadComponent);
    fixture.componentRef.setInput('heading', { eyebrow: 'Label', title: 'Title', emphasis: 'end', lead: 'Lead text' });
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('shows the label, title and lead', () => {
    expect(el.querySelector('.eyebrow')?.textContent).toContain('Label');
    expect(el.querySelector('h2')?.textContent).toContain('Title');
    expect(el.querySelector('.section-head__lead')?.textContent).toContain('Lead text');
  });
});
