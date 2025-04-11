import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokeApiList from '../components/api/PokeApiList';
import ApiDetail from '../components/api/ApiDetail';
import PokeChart from '../components/api/PokeChart';

function App() {
  return (
    <div
    style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ffffff 0%, #00b38d 100%)', 
    }}
  >
    <Router>
      <div>
        <div>
          <Routes>
          <Route path="/" element={<PokeApiList />} />
          <Route path="/pokemon/:name" element={<ApiDetail />} />
          <Route path="pokeChart/:name" element={<PokeChart />}/>
          </Routes>
        </div>
          <div className='w-fill h-[450px] flex justify-center gap-4 overflow-y-scroll'>
            <PokeApiList />
          </div> 
      </div>
    </Router>
    </div>
  );
}

export default App;
