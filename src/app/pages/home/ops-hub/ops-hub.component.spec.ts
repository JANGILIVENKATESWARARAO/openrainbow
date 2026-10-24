import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpsHubComponent } from './ops-hub.component';
import { loadSite, testProviders, testSite } from '../../../../testing/test-helpers';

describe('OpsHubComponent', () => {
  let fixture: ComponentFixture<OpsHubComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [OpsHubComponent], providers: testProviders }).compileComponents();
    await loadSite();

    fixture = TestBed.createComponent(OpsHubComponent);
    fixture.componentRef.setInput('data', testSite.home.monitoring);
    fixture.componentRef.setInput('steps', testSite.home.approach.steps);
    fixture.componentRef.setInput('stats', [{ value: '24/7', label: 'Monitoring' }]);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('places every life cycle step on the ring', () => {
    expect(el.querySelectorAll('.cycle__node').length).toBe(testSite.home.approach.steps.length);
  });

  it('lists every monitored system', () => {
    expect(el.querySelectorAll('.row').length).toBe(testSite.home.monitoring.rows.length);
  });
});
