import { useCallback, useEffect, useState } from "react";
import fetchPoke, { Poke } from "./PokeApi";


function PokeApiList() {
    const [pokemon, setPokemon] = useState<Poke[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [offset, setOffset] = useState<number>(0);

    const loadPokemon = useCallback(async () => {
        setLoading(true);
        const newPokemon = await fetchPoke(offset, 20);
        setPokemon((prev) => [...prev, ...newPokemon]);
        setOffset((prev) => prev + 20); 

        setLoading(false);
    }, [offset, loading]);

    useEffect(() => {
        setLoading(true)
        fetchPoke(10000, offset).then((data) => {
            setPokemon(data);
            setLoading(false)
        });
    }, []);

    return(
        <div>
            {loading ?(
                <p>Loading...</p>
            ) : (
                <>
                {pokemon.map((poke, index) => (
                    <div key={index} className="w-[90%] h-[450px] border-2 border-black border-solid">
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


