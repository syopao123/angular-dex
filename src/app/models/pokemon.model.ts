export interface Pokemon {

    id: number;

    name: string;

    height: number;
    
    weight: number;

    abilities: PokemonAbility[];

    stats: BaseStat[];

    species: {
        name: string,
        url: string
    }

    sprites: {
        other: {
            'official-artwork': {
                front_default: string | null
            }
        }
    };

    types: {
        slot: number;
        type: { name: string }
    }[];

}

export interface PokemonAbility {
    is_hidden: boolean,
    slot: number,
    ability: {
        name: string
    }
}

export interface BaseStat {

    base_stat: number;

    stat: {
        name: string,
    }

}