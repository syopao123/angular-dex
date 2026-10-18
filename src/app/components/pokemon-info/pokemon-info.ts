import { Component, input } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  imports: [],
  selector: 'app-pokemon-info',
  styleUrl: './pokemon-info.css',
  templateUrl: './pokemon-info.html',
})
export class PokemonInfo {

  pokemon = input<Pokemon>();

}
