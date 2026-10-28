import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import { PokemonSpecies } from '../models/pokemon-species.model';
import { PokemonData } from '../models/pokemon-data.model';
import { PokemonList } from '../models/pokemon-list.model';

@Service()
export class Pokeapi {

    private http = inject(HttpClient);

    private readonly baseUrl: string;

    constructor() {
        this.baseUrl = "https://pokeapi.co/api/v2";
    }

    getPokemonList(): Observable<PokemonList> {
        let response = this.http.get<PokemonList>(`${this.baseUrl}/pokemon?limit=-1`);
        return response;
    }

    getPokemon(url: string | undefined, name: string | undefined): Observable<Pokemon> {
        // let response = this.http.get<Pokemon>(url);
        return url ? this.http.get<Pokemon>(url) : this.http.get<Pokemon>(this.baseUrl + `/pokemon/${name}`);
    }

    getSpecies(pokemon: Pokemon): Observable<PokemonSpecies> {
        let response = this.http.get<PokemonSpecies>(pokemon.species.url);
        return response;
    }

    getPokemonData(url: string | undefined, name: string | undefined): Observable<PokemonData> {
        return this.getPokemon(url, name).pipe(
            switchMap((pokemon) => 
                this.getSpecies(pokemon).pipe(
                    map((species) => ({
                        id: pokemon.id,
                        name: pokemon.name,
                        species_name: pokemon.species.name,
                        sprite: pokemon.sprites.other['official-artwork'].front_default,
                        types: pokemon.types.map(t => t.type.name),
                        description: this.getEnglishDescription(species),
                        genus: this.getEnglishGenus(species),
                        stats: pokemon.stats,
                        height: pokemon.height,
                        weight: pokemon.weight,
                        abilities: pokemon.abilities,
                        generation: species.generation.name
                    }))
                )
            )
        );
    }

    private getEnglishGenus(species: PokemonSpecies): string {
        const genus = species.genera.find(g => g.language.name === 'en');
        return genus ? genus.genus : '';
    }

    private getEnglishDescription(species: PokemonSpecies): string {
        const entry = species.flavor_text_entries.find(e => e.language.name === 'en');
        return entry ? entry.flavor_text.replace(/[\n\f]/g, ' ') : '';
    }

}