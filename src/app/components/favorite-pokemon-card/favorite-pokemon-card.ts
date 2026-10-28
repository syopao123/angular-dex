import { Component, input } from '@angular/core';
import { PokemonData } from '../../models/pokemon-data.model';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-favorite-pokemon-card',
  styleUrl: './favorite-pokemon-card.css',
  templateUrl: './favorite-pokemon-card.html',
})
export class FavoritePokemonCard {

  pokemon = input<PokemonData>();

}
