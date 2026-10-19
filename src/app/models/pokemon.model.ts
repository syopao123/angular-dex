export interface Pokemon {

    id: number;

    name: string;

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