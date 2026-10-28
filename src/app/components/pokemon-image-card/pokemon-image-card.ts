import { Component, input } from '@angular/core';
import { PokemonData } from '../../models/pokemon-data.model';
import { Notyf } from 'notyf';

const notyf = new Notyf();

@Component({
  imports: [],
  selector: 'app-pokemon-image-card',
  styleUrl: './pokemon-image-card.css',
  templateUrl: './pokemon-image-card.html',
})
export class PokemonImageCard {

  pokemon = input<PokemonData | null>();

  favoritePokemon() {
    let storage = localStorage.getItem('favorites');

    if (storage) {
      let favorites: string[] = JSON.parse(storage);

      const pokemonName: string | undefined = this.pokemon()?.name;

      // Check if pokemon is in favorites
      if (this.isFavorite()) {
        // Remove if yes
        favorites = favorites.filter(name => name !== this.pokemon()?.name);
      } else {
        // Favorite if no
        if (pokemonName) {
          favorites.push(pokemonName);
        }
      }

      localStorage.setItem('favorites', JSON.stringify(favorites));
      notyf.success('Saved');
    }
  }

  isFavorite(): Boolean {

    const pokemonName = this.pokemon()?.name;

    let storage = localStorage.getItem('favorites');

    if (!storage) {
      notyf.error('Failed to add pokemon to favorites');
      return false;
    }

    if (!pokemonName) {
      notyf.error('Pokemon name not found');
      return false;
    }

    let favorites: string[] = JSON.parse(storage);
    return favorites.includes(pokemonName);
  }

  getTypeBadgeColor(type: string): string {
    switch (type) {
      case 'bug':
        return 'bug-type-badge';
      case 'dark':
        return 'dark-type-badge';
      case 'dragon':
        return 'dragon-type-badge';
      case 'electric':
        return 'electric-type-badge';
      case 'fairy':
        return 'fairy-type-badge';
      case 'fighting':
        return 'fighting-type-badge';
      case 'fire':
        return 'fire-type-badge';
      case 'flying':
        return 'flying-type-badge';
      case 'ghost':
        return 'ghost-type-badge';
      case 'grass':
        return 'grass-type-badge';
      case 'ground':
        return 'ground-type-badge';
      case 'ice':
        return 'ice-type-badge';
      case 'normal':
        return 'normal-type-badge';
      case 'poison':
        return 'poison-type-badge';
      case 'psychic':
        return 'psychic-type-badge';
      case 'rock':
        return 'rock-type-badge';
      case 'steel':
        return 'steel-type-badge';
      case 'water':
        return 'water-type-badge';
      default:
        return '';
    }
  }
}
