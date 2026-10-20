import { Component, computed, input, output } from '@angular/core';
import { PokemonData } from '../../models/pokemon-data.model';
import { BaseCombatStatsCard } from '../base-combat-stats-card/base-combat-stats-card';
import { PhysicalMetricsCard } from '../physical-metrics-card/physical-metrics-card';
import { AbilitiesCard } from '../abilities-card/abilities-card';
import { PokemonImageCard } from '../pokemon-image-card/pokemon-image-card';
import { EntryLogCard } from '../entry-log-card/entry-log-card';

@Component({
  imports: [BaseCombatStatsCard, PhysicalMetricsCard, AbilitiesCard, PokemonImageCard, EntryLogCard],
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

}
