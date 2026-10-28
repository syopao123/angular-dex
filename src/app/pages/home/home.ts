import { Component, signal } from '@angular/core';
import { Search } from '../../components/search-bar/search';
import { PokemonCard } from '../../components/search-pokemon-card/pokemon-card';
import { PokemonData } from '../../models/pokemon-data.model';

@Component({
  imports: [Search, PokemonCard],
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
