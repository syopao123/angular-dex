import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhysicalMetricsCard } from './physical-metrics-card';

describe('PhysicalMetricsCard', () => {
  let component: PhysicalMetricsCard;
  let fixture: ComponentFixture<PhysicalMetricsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhysicalMetricsCard],
    }).compileComponents();

    fixture = TestBed.createComponent(PhysicalMetricsCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
