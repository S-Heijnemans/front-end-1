import { useState, useEffect } from "react";
import fetchPoke, { Poke } from "./PokeApi";
import PokeballImg from "../../assets/PokeBallImg-removebg-preview.png";
import { Link } from "react-router-dom";

function Searchbar({ setSearchTerm }: { setSearchTerm: (term: string) => void }) {
    return (
        <div className="searchbar-container">
            <input
                type="text"
                placeholder="Search Pokémon"
                onChange={(e) => setSearchTerm(e.target.value)}
                className="searchbar-input"
            />
        </div>
    );
}

function PokeApiList() {
    const [pokemon, setPokemon] = useState<Poke[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filteredPokemon, setFilteredPokemon] = useState<Poke[]>([]);

    useEffect(() => {
        setLoading(true);
        fetchPoke().then((data) => {
            setPokemon(data);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        if (searchTerm === "") {
            setFilteredPokemon(pokemon);
        } else {
            setFilteredPokemon(
                pokemon.filter((poke) =>
                    poke.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }
    }, [searchTerm, pokemon]);

    return (
        <div className="pokemon-list-container">
            <Searchbar setSearchTerm={setSearchTerm} />

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="pokemon-list">
                    {filteredPokemon.slice(0, 100).map((poke, index) => (
                        <Link key={index} to={`/pokemon/${poke.id}`} className="pokemon-link">
                            <div className="w-full h-[90px] flex flex-row items-center overflow-hidden justify-start p-[45px] gap-[120px] m-4 rounded-[10px] bg-[#003333] text-white border-size-[1px] border-solid border-4 border-[#006c6c]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, rgba(255,255,255,0.2) 1px, rgba(255,255,255,0.2) 2px)' }}>
                                <div className="w-[150px] h-[150px] flex items-center justify-center rotate-[45deg] border-[20px] border-solid border-[#006D33] ">
                                    <img className="rotate-[-45deg]" src={poke.sprites.front_default} alt={`${poke.name} image`} />
                                </div>
                                <div className="flex flex-row items-center justify-start text-center font-extrabold gap-6">
                                    <img className="w-[35px] h-[35]" src={PokeballImg} alt="" />
                                    <p className="font-semibold text-[18px] ">{poke.id}</p>
                                    <h1 className="font-semibold text-[18px]">{poke.name}</h1>
                                </div>
                            </div>
                            <div className="text-center mt-2">
                                <Link to={`/pokeChart/${poke.name}`} className="text-sm text-blue-500 underline">
                                    View Stats Chart
                                </Link>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default PokeApiList;
