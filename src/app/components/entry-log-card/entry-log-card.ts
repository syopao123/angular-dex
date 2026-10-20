import { Component, input } from '@angular/core';
import { PokemonData } from '../../models/pokemon-data.model';

@Component({
  imports: [],
  selector: 'app-entry-log-card',
  styleUrl: './entry-log-card.css',
  templateUrl: './entry-log-card.html',
})
export class EntryLogCard {

  pokemon = input<PokemonData | null>();
  
}
