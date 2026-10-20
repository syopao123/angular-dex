import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonImageCard } from './pokemon-image-card';

describe('PokemonImageCard', () => {
  let component: PokemonImageCard;
  let fixture: ComponentFixture<PokemonImageCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonImageCard],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonImageCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
