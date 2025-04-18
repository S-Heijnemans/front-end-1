export interface PokeAbility {
    ability: {
      name: string;
      url: string;
    };
  }

  export interface PokemonType {
    type: {
      name: string;
      url: string;   
    };
  }

  interface PokeStats {
    base_stat: number;
    stat: {
      name: string;
    }
  }

export interface Poke {
    id: string
    name: string;
    height: string;
    weight: string;
    sprites: {
        front_default: string;
      };
    abilities: PokeAbility[];
    types: PokemonType[];
    stats: PokeStats[];
}

async function fetchPoke(limit: number = 50, offset: number = 0): Promise<Poke[]> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const data = await response.json();

  const pokemonPromises = data.results.map(async (poke: { url: string }) => {
    const pokeData = await fetch(poke.url);
    return pokeData.json();
  });

  return Promise.all(pokemonPromises);
}


export default fetchPoke