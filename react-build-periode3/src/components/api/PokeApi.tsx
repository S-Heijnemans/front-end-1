export interface Poke {
    id: string
    name: string;
    height: string;
    weight: string;
    sprites: {
        front_default: string;
      };
}

async function fetchPoke(limit: number = 10000, offset: number): Promise<Poke[]> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await response.json();

    const pokemonPromises = data.results.map(async (poke: { url: string }) => {
        const pokeData = await fetch(poke.url);
        return pokeData.json();
    }); 

    return Promise.all(pokemonPromises);
}

export default fetchPoke