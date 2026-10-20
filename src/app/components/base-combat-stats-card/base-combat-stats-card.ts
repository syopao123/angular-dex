import { Component, input } from '@angular/core';
import { PokemonData } from '../../models/pokemon-data.model';

@Component({
  imports: [],
  selector: 'app-base-combat-stats-card',
  styleUrl: './base-combat-stats-card.css',
  templateUrl: './base-combat-stats-card.html',
})
export class BaseCombatStatsCard {

  pokemon = input<PokemonData | null>();

  getShortenStatName(name: string): string {
    switch (name) {
      case 'attack':
        return 'atk';
      case 'defense':
        return 'def';
      case 'special-attack':
        return 'sp. atk';
      case 'special-defense':
        return 'sp. def';
      case 'speed':
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
