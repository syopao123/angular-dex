import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseCombatStatsCard } from './base-combat-stats-card';

describe('BaseCombatStatsCard', () => {
  let component: BaseCombatStatsCard;
  let fixture: ComponentFixture<BaseCombatStatsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseCombatStatsCard],
    }).compileComponents();

    fixture = TestBed.createComponent(BaseCombatStatsCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
