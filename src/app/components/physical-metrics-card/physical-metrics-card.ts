import { Component, input } from '@angular/core';
import { PokemonData } from '../../models/pokemon-data.model';

@Component({
  imports: [],
  selector: 'app-physical-metrics-card',
  styleUrl: './physical-metrics-card.css',
  templateUrl: './physical-metrics-card.html',
})
export class PhysicalMetricsCard {

  pokemon = input<PokemonData | null>();

  getComputedMetric(value: number | undefined): number | undefined {
    if (!value) return undefined;
    return value / 10;
  }

}
