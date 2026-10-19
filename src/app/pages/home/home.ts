import { Component, signal } from '@angular/core';
import { Search } from '../../components/search/search';
import { PokemonCard } from '../../components/pokemon-card/pokemon-card';
import { PokemonData } from '../../models/pokemon-data.model';

@Component({
  imports: [Search, PokemonCard],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

  pokemonData = signal<PokemonData | null>(null);

}
