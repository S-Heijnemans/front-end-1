import { useEffect, useState } from "react";
import fetchPoke, { Poke } from "./PokeApi";

function PokeApiList() {
    const [pokemon, setPokemon] = useState<Poke[]>([]);

    useEffect(() => {
        fetchPoke().then((data) => setPokemon(data));
    }, []);

    return(
        <>
            {pokemon.map((poke) => (
                <div key={poke.id}>
                    <h1>{poke.name}</h1>
                    <p>Height: {poke.height}</p>
                    <p>Weight: {poke.weight}</p>
                    <img src={poke.sprites.front_default} alt={`${poke.name} image`}/>
                </div>
            ))}
        </>
    )
}

export default PokeApiList


