import { BaseStat, PokemonAbility } from "./pokemon.model";

export interface PokemonData {
    
    id: number;

    name: string;

    species_name: string;

    sprite: string | null;

    types: string[];

    description: string;

    genus: string;

    stats: BaseStat[];

    height: number;
    
    weight: number;

    abilities: PokemonAbility[];

    generation: string;

}