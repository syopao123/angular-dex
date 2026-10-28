import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritePokemonCard } from './favorite-pokemon-card';

describe('FavoritePokemonCard', () => {
  let component: FavoritePokemonCard;
  let fixture: ComponentFixture<FavoritePokemonCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritePokemonCard],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritePokemonCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
