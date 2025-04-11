import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Poke } from "./PokeApi"; 
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


interface ChartData {
    labels: string[];
    datasets: {
        label: string;
        data: number[]; 
    }[];
}

function PokeChart() {
    const { name } = useParams<{ name: string }>(); 
    const [pokeDetail, setPokeDetail] = useState<Poke | null>(null); 
    const [chartData, setChartData] = useState<ChartData>({
        labels: ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed"],
        datasets: [
            {
                label: "Pokemon Stats",
                data: [] 
            }
        ]
    });

    useEffect(() => {
        const fetchPokeDetail = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await response.json();
            setPokeDetail(data);
        };
        
        fetchPokeDetail();
    }, [name]);

    useEffect(() => {
        if (pokeDetail) {
            const stats = pokeDetail.stats.map((stat) => stat.base_stat);
    
            setChartData((prevChartData) => ({
                ...prevChartData,
                datasets: [
                    {
                        ...prevChartData.datasets[0],
                        data: stats,
                        backgroundColor: [
                            '#00cccc',
                            '#00aa99',
                            '#009977',
                            '#00ffaa',
                            '#33cccc',
                            '#66ffcc'
                        ],
                        borderColor: '#006c6c',
                        borderWidth: 1,
                    },
                ],
            }));
        }
    }, [pokeDetail]);
    

    return (
        <div className="w-full max-w-[400px] h-[300px] bg-white rounded-lg shadow-md p-4">
          <h2 className="text-center text-lg font-bold mb-2">
            {pokeDetail ? pokeDetail.name.toUpperCase() : 'Loading...'}
          </h2>
          <div className="relative w-full h-full">
            <Bar
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </div>
        </div>
      );
      
      
}

export default PokeChart;
