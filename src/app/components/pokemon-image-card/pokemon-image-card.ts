import { Component, input } from '@angular/core';
import { PokemonData } from '../../models/pokemon-data.model';

@Component({
  imports: [],
  selector: 'app-pokemon-image-card',
  styleUrl: './pokemon-image-card.css',
  templateUrl: './pokemon-image-card.html',
})
export class PokemonImageCard {

  pokemon = input<PokemonData | null>();
  
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
