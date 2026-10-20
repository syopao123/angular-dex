import { Component, input } from '@angular/core';
import { PokemonData } from '../../models/pokemon-data.model';

@Component({
  imports: [],
  selector: 'app-abilities-card',
  styleUrl: './abilities-card.css',
  templateUrl: './abilities-card.html',
})
export class AbilitiesCard {

  pokemon = input<PokemonData | null>();
  
}
