import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fetchPoke, { Poke } from "../api/PokeApi";

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
      setFilteredPokemon([]);
    } else {
      setFilteredPokemon(
        pokemon.filter((poke) =>
          poke.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, pokemon]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 m-4 border-2 border-gray-300 rounded"
      />

      {searchTerm && filteredPokemon.length > 0 && (
        <div className="search-results mt-4">
          <ul className="list-none p-0">
            {filteredPokemon.map((poke) => (
              <li key={poke.id} className="search-item">
                <Link
                  to={`/pokemon/${poke.id}`}
                  className="block p-2 hover:bg-gray-200 rounded"
                >
                  {poke.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {searchTerm && filteredPokemon.length === 0 && (
        <p>No Pokémon found</p>
      )}

      {loading ? (
        <></>
      ) : (
        <div>
        </div>
      )}
    </div>
  );
}

export default PokeApiList;
