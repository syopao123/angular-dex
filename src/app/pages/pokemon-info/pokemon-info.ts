import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PokemonData } from '../../models/pokemon-data.model';
import { Pokeapi } from '../../services/pokeapi';
import { PokemonImageCard } from '../../components/pokemon-image-card/pokemon-image-card';
import { BaseCombatStatsCard } from '../../components/base-combat-stats-card/base-combat-stats-card';
import { PhysicalMetricsCard } from '../../components/physical-metrics-card/physical-metrics-card';
import { AbilitiesCard } from '../../components/abilities-card/abilities-card';
import { EntryLogCard } from '../../components/entry-log-card/entry-log-card';
import { firstValueFrom } from 'rxjs';

@Component({
  imports: [
    RouterLink,
    PokemonImageCard,
    BaseCombatStatsCard,
    PhysicalMetricsCard,
    AbilitiesCard,
    EntryLogCard,
  ],
  selector: 'app-pokemon-info',
  styleUrl: './pokemon-info.css',
  templateUrl: './pokemon-info.html',
})
export class PokemonInfo implements OnInit {
  pokeApi = inject(Pokeapi);
  private activatedRoute = inject(ActivatedRoute);

  redirectUrl = signal<string>('');
  name = signal<string>('');
  pokemon = signal<PokemonData | null>(null);
  isFromFavorites = signal(false);

  constructor() {

    this.activatedRoute.params.subscribe((params) => {

      this.redirectUrl.set(params['redirectUrl']);

      this.name.set(params['name']);

      this.isFromFavorites.set(this.redirectUrl() === '/favorites' ? true : false);

    });
  }

  async ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    let data = await firstValueFrom(this.pokeApi.getPokemonData(undefined, this.name()));
    this.pokemon.set(data);
  }
}
