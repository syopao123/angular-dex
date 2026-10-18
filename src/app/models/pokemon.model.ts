export interface Pokemon {

    id: number;

    name: string;

    genus?: string;

    flavor_text: string;

    sprites: {
        other: {
            home: {
                front_default: string | null
            }
        }
    };

    types: {
        slot: number;
        type: { name: string }
    }[];

}