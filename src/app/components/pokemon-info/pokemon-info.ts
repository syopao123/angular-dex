import { Component, computed, input, output } from '@angular/core';
import { PokemonData } from '../../models/pokemon-data.model';

@Component({
  imports: [],
  selector: 'app-pokemon-info',
  styleUrl: './pokemon-info.css',
  templateUrl: './pokemon-info.html',
})
export class PokemonInfo {

  pokemon = input<PokemonData | null>();

  resetSearch = output<PokemonData | null>();

  onBackToSearch() {
    this.resetSearch.emit(null);
  }

  getShortenStatName(name: string): string {
    switch(name) {
      case ('attack'):
        return 'atk';
      case ('defense'):
        return 'def';
      case ('special-attack'):
        return 'sp. atk';
      case ('special-defense'):
        return 'sp. def';
      case ('speed'):
        return 'spd';
      default:
        return name;
    }
  }

  getComputedStat(stat: number): number {
    const maxStatValue = 255;
    return Math.min((stat / maxStatValue) * 100, 100);
  }

}
