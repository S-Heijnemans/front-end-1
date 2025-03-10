import { useState } from "react";

type PokeSearchProps = {
    onSearch: (pokemonName: string) => void;
}

function PokeSearch({onSearch}: PokeSearchProps) {
  const [searchItem, setSearchTerm] = useState<string>('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(searchItem)
    if (searchItem.trim()) {
      onSearch(searchItem.toLowerCase());
    }
  };

    return(
     <form onSubmit={handleSearch}>
        <input
            type="text"
            placeholder="Zoek Pokémon"
            value={searchItem}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Zoek</button>
     </form>
    )
}

export default PokeSearch