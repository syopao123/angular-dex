import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbilitiesCard } from './abilities-card';

describe('AbilitiesCard', () => {
  let component: AbilitiesCard;
  let fixture: ComponentFixture<AbilitiesCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbilitiesCard],
    }).compileComponents();

    fixture = TestBed.createComponent(AbilitiesCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
