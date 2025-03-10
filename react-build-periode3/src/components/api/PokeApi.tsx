export interface Poke {
    id: string
    name: string;
    height: string;
    weight: string;
    // abilities: [
    //     name: string
    // ];
    sprites: {
        front_default: string;
      };
}

async function fetchPoke(): Promise<Poke[]> {
    const response = await fetch(' https://pokeapi.co/api/v2/pokemon');
    const data = await response.json();

    const pokemonPromises = data.results.map(async (poke: { url: string }) => {
        const pokeData = await fetch(poke.url);
        return pokeData.json();
    });

    return Promise.all(pokemonPromises);
}

export default fetchPoke