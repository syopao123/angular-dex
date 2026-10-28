import { Component, computed, inject, OnInit, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Notyf } from 'notyf';
import { Pokeapi } from '../../services/pokeapi';
import { PokemonData } from '../../models/pokemon-data.model';
import { PokemonList, PokemonListItem} from '../../models/pokemon-list.model';
import { firstValueFrom } from 'rxjs';

const notyf = new Notyf();

@Component({
  imports: [FormsModule],
  selector: 'app-search',
  styleUrl: './search.css',
  templateUrl: './search.html',
})
export class Search implements OnInit {
  private readonly pokeApi = inject(Pokeapi);
  
  // Pokemon list for helping with search
  pokemonList = signal<PokemonListItem[]>([]);

  // Searched name
  searchName = signal('');

  // Filtered search results
  filteredPokemon = computed(() => {
    let term = this.searchName().trim().toLowerCase();
    if (!term) return [];
    return this.pokemonList().filter(p => p.name.includes(term));
  })

  pokemon = output<PokemonData | null>();
  isSearching = signal(false);

  async ngOnInit() {
    await this.loadPokemonList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private async loadPokemonList(): Promise<void> {
    try {

      let data = await firstValueFrom(this.pokeApi.getPokemonList());
      this.pokemonList.set(data.results);

    } catch {
      notyf.error('There was an error while fetching pokemon list.');
    }
  }

  async searchPokemon(name: string, url: string) {
    try {

      this.pokemon.emit(null);

      this.isSearching.set(true);
      let data = await firstValueFrom(this.pokeApi.getPokemonData(url, undefined));
      this.pokemon.emit(data);
      this.searchName.set('');

    } catch {
      notyf.error(`Couldn't find ${name}.`);
    } finally {
      this.isSearching.set(false);
    }
  }
}
