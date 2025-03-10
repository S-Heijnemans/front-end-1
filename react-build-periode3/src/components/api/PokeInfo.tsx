export type PokemonData = {
    name: string;
    id: number;
    height: number;
    weight: number;
    sprites: {
      front_default: string;
    };
};

interface pokemonDataProps {
    pokemon: PokemonData | null;
}

function PokeInfo({pokemon}: pokemonDataProps) {
    if (!pokemon) {
        return
    }
   return(
    <div>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
        <p>ID: {pokemon.id}</p>
        <p>Height: {pokemon.height}</p>
        <p>weight: {pokemon.weight}</p>
    </div>
   )
}

export default PokeInfo