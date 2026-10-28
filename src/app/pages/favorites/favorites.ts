import { Component, inject, OnInit, signal } from '@angular/core';
import { Notyf } from 'notyf';
import { firstValueFrom } from 'rxjs';
import { Pokeapi } from '../../services/pokeapi';
import { PokemonListItem } from '../../models/pokemon-list.model';
import { PokemonData } from '../../models/pokemon-data.model';
import { FavoritePokemonCard } from '../../components/favorite-pokemon-card/favorite-pokemon-card';

const notyf = new Notyf();

@Component({
  imports: [FavoritePokemonCard],
  selector: 'app-favorites',
  styleUrl: './favorites.css',
  templateUrl: './favorites.html',
})
export class Favorites implements OnInit {
  pokeApi = inject(Pokeapi);

  favoritePokemon = signal<PokemonData[]>([]);
  favoritePokemonUrls = signal<string[]>([]);

  async ngOnInit() {
    let storage = localStorage.getItem('favorites');

    if (storage) {
      let favorites: string[] = JSON.parse(storage);
      let favoritesSet = new Set(favorites);

      let pokemonList = await this.loadPokemonList();

      if (pokemonList) {
        pokemonList = pokemonList?.filter((p) => favoritesSet.has(p.name));

        pokemonList.forEach((p) => {
          this.favoritePokemonUrls.update((current) => [...current, p.url]);
        });
      }
    }

    if (this.favoritePokemonUrls().length > 0) {
      await this.fetchPokemonCards();
    }
  }

  private async fetchPokemonCards() {
    this.favoritePokemonUrls().forEach(async (url) => {
      let data = await firstValueFrom(this.pokeApi.getPokemonData(url, undefined));
      this.favoritePokemon.update((current) => [...current, data]);
    });
  }

  private async loadPokemonList(): Promise<PokemonListItem[] | null> {
    try {
      let data = await firstValueFrom(this.pokeApi.getPokemonList());
      return data.results;
    } catch {
      notyf.error('There was an error while fetching pokemon list.');
      return [];
    }
  }

}
