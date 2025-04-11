import { useState } from "react";

interface SearchbarProps {
  onSearch: (searchTerm: string) => void;
}

function Searchbar({ onSearch }: SearchbarProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); 
  };

  return (
    <div className="searchbar-container p-4">
      <input
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={handleSearchChange}
        className="p-2 border-2 border-gray-300 rounded"
      />
    </div>
  );
}

export default Searchbar;
