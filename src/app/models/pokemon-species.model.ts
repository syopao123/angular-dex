export interface PokemonSpecies {

    id: number;

    name: string;

    generation: {
        name: string;
    };

    genera: PokemonGenera[];

    flavor_text_entries: {

        flavor_text: string;

        language: { name: string }

    }[];
}

export interface PokemonGenera {

    genus: string,

    language: {
        name: string,
    }
    
}