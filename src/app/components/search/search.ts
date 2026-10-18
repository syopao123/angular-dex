import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Notyf } from 'notyf';
import { Pokeapi } from '../../services/pokeapi';
import { PokemonData } from '../../models/pokemon-data';
import { firstValueFrom } from 'rxjs';

const notyf = new Notyf();

@Component({
  imports: [FormsModule],
  selector: 'app-search',
  styleUrl: './search.css',
  templateUrl: './search.html',
})
export class Search {

  private readonly pokeApi = inject(Pokeapi);
  
  pokemonName = signal('');

  pokemon = output<PokemonData>();
  isSearching = signal(false);

  async onSearch(e: Event) {
    e.preventDefault();

    const query = this.pokemonName().trim();

    if (!query) {
      notyf.error('Invalid query');
      return;
    }

    try {
      
      this.isSearching.set(true);
      let data = await firstValueFrom(this.pokeApi.getPokemonData(query));
      this.pokemon.emit(data);

    } catch {
      notyf.error(`Couldn't find "${query}". Check the spelling and try again`);
    } finally {
      this.isSearching.set(false);
    }
  }

}
