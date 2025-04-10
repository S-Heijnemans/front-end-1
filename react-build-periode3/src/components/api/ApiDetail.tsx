import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Poke } from "./PokeApi"; 
import clsx from "clsx";
     
function PokeDetail() {
  const { name } = useParams<{ name: string }>(); 
  const [pokeDetail, setPokeDetail] = useState<Poke | null>(null); 

  useEffect(() => {
    const fetchPokeDetail = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setPokeDetail(data);
    };

    fetchPokeDetail();
  }, [name]); 

  if (!pokeDetail) {
    return; 
  }

  return (
    <div className="p-4 flex flex-row gap-4 items-center">
     <div>
        <h1 className="text-3xl font-bold">{pokeDetail.name}</h1>
        <div className="my-4">
            <img
            src={pokeDetail.sprites.front_default}
            alt={`${pokeDetail.name} sprite`}
            className="w-48 h-48"
            />
        </div>
      </div>
      {pokeDetail && (
        <div className="flex flex-col gap-2 items-center p-2 border-size-[1px] border-solid border-2 border-[#000000]">
            <div className="flex flex-row gap-2">
                {pokeDetail.types?.map((type, index) => {
                    return (
                        <div key={index} className={clsx(`p-1 pl-3 pr-3 text-white rounded-[8px] border-[2px] border-solid`, 
                            {'bg-[#A8A878]  border-[#6E6E4F]': type.type.name === "normal"}, {'bg-[#F08030] border-[#C0581C]': type.type.name === "fire"},
                            {'bg-[#6890F0] border-[#4F6DB9]': type.type.name === "water"}, {'bg-[#F8D030] border-[#C7A92D]': type.type.name === "electric"}, 
                            {'bg-[#78C850] border-[#5A8B3A]': type.type.name === "grass"}, {'bg-[#98D8D8] border-[#6F9D9D]': type.type.name === "ice"}, 
                            {'bg-[#C03028] border-[#8C2120]': type.type.name === "fighting"}, {'bg-[#A040A0] border-[#762C77]': type.type.name === "poison"}, 
                            {"bg-[#E0C068] border-[#C0A35E]": type.type.name === "ground"}, {"bg-[#A890F0] border-[#7E6BC9]": type.type.name === "flying"}, 
                            {"bg-[#F85888] border-[#D43F6F]": type.type.name === "psychic"}, {"bg-[#A8B820] border-[#788F17]": type.type.name === "bug"}, 
                            {"bg-[#B8A038] border-[#8F7C2C]": type.type.name === "rock"}, {"bg-[#705898] border-[#4F3F68]": type.type.name === "ghost"}, 
                            {"bg-[#7038F8] border-[#5A2BC0]": type.type.name === "dragon"}, {"bg-[#705848] border-[#4E3B34]": type.type.name === "dark"}, 
                            {"bg-[#B8B8D0] border-[#8D8DA8]": type.type.name === "steel"}, {"bg-[#EE99AC] border-[#D57A8F]": type.type.name === "fairy"}
                         )}>
                            {type.type.name}
                        </div>
                    )
                })}
            </div>
            <p>Height: {pokeDetail.height}</p>
            <p>Weight: {pokeDetail.weight}</p>

            <p className="font-semibold">Abilities:</p>
            <ul className="list-disc pl-6">
                {pokeDetail.abilities.map((ability, index) => (
                <li key={index} className="text-lg">
                    <p key={index}>{ability.ability.name}</p>
                </li>
                ))}
            </ul>
        </div>
      )}
    </div>
    
  );
}

export default PokeDetail;