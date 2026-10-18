import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { forkJoin, map, Observable } from 'rxjs';
import { PokemonSpecies } from '../models/pokemon-species.model';
import { PokemonData } from '../models/pokemon-data';

@Service()
export class Pokeapi {

    private http = inject(HttpClient);

    private readonly baseUrl: string;

    constructor() {
        this.baseUrl = "https://pokeapi.co/api/v2";
    }

    getPokemon(name: string): Observable<Pokemon> {
        let response = this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${name}`);
        return response;
    }

    getSpecies(name: string): Observable<PokemonSpecies> {
        let response = this.http.get<PokemonSpecies>(`${this.baseUrl}/pokemon-species/${this.clean(name)}`);
        return response;
    }

    getPokemonData(name: string): Observable<PokemonData> {
        return forkJoin({
            pokemon: this.getPokemon(name),
            species: this.getSpecies(name),
        }).pipe(
            map(({ pokemon, species }) => ({
                id: pokemon.id,
                name: pokemon.name,
                sprite: pokemon.sprites.other.home.front_default,
                types: pokemon.types.map((t) => t.type.name),
                description: this.getEnglishDescription(species)
            })),
        );
    }

    private getEnglishDescription(species: PokemonSpecies): string {
        const entry = species.flavor_text_entries.find(e => e.language.name === 'en');
        return entry ? entry.flavor_text.replace(/[\n\f]/g, ' ') : '';
    }

    private clean(name: string): string {
        return name.trim().toLowerCase();
    }

}