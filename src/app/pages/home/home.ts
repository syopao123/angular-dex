import { Component, signal } from '@angular/core';
import { Search } from '../../components/search/search';
import { PokemonCard } from '../../components/pokemon-card/pokemon-card';
import { PokemonData } from '../../models/pokemon-data.model';
import { PokemonInfo } from '../../components/pokemon-info/pokemon-info';

@Component({
  imports: [Search, PokemonCard, PokemonInfo],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

  pokemonData = signal<PokemonData | null>(null);

  selectedPokemon = signal<PokemonData | null>(null);

  onSelectPokemon() {
    window.scrollTo({ top: 0, behavior: 'smooth'});
    this.selectedPokemon.set(this.pokemonData());
  }

}
