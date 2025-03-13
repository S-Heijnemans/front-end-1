import { useEffect, useState } from "react";
import fetchPoke, { Poke } from "./PokeApi";


function PokeApiList() {
    const [pokemon, setPokemon] = useState<Poke[]>([]);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        setLoading(true);
        fetchPoke().then((data) => {
            setPokemon(data);
            setLoading(false);
        });
    }, []);

    return(
        <div>
            {loading ?(
                <p>Loading...</p>
            ) : (
                <>
                {pokemon.map((poke, index) => (
                    <div key={index}>
                        <h1>{poke.name}</h1>
                        <p>{poke.id}</p>
                        <p>Height: {poke.height}</p>
                        <p>Weight: {poke.weight}</p>
                        <img src={poke.sprites.front_default} alt={`${poke.name} image`}/>
                    </div>
                ))}
                </>
            )}
            
        </div>
    )
}

export default PokeApiList


