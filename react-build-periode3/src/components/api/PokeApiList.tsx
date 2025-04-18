import { useState, useEffect } from "react";
import fetchPoke, { Poke } from "./PokeApi";
import PokeballImg from "../../assets/PokeBallImg-removebg-preview.png";
import { Link } from "react-router-dom";

function PokeApiList() {
  const [pokemon, setPokemon] = useState<Poke[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [favorites, setFavorites] = useState<Set<string>>(new Set()); 

  useEffect(() => {
    setLoading(true);
    fetchPoke().then((data) => {
      setPokemon(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(new Set(JSON.parse(savedFavorites)));
    }
  }, []);

  const toggleFavorite = (id: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify([...newFavorites]));
  };

  return (
    <div className="pokemon-list-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="pokemon-list">
          {pokemon.slice(0, 100).map((poke) => (
            <div key={poke.id} className="pokemon-item">
              <Link to={`/pokemon/${poke.id}`} className="pokemon-link">
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
              </Link>
              <button
                onClick={() => toggleFavorite(poke.id)}
                className={`favorite-btn ${favorites.has(poke.id) ? 'text-red-500' : 'text-gray-500'}`}
              >
                {favorites.has(poke.id) ? "★ Favorite" : "☆ Add to Favorite"}
              </button>
              <div className="text-center mt-2">
                <Link to={`/pokeChart/${poke.name}`} className="text-sm text-blue-500 underline">
                  View Stats Chart
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PokeApiList;
