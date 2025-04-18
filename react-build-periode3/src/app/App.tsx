import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokeApiList from '../components/api/PokeApiList';
import ApiDetail from '../components/api/ApiDetail';
import PokeChart from '../components/api/PokeChart';
import Header from '../components/sideParts/Header';
import Footer from '../components/sideParts/Footer';
import OrigenInfoBox from '../components/infoBoxes/OrigenInfoBox';
import ArtInfoBox from '../components/infoBoxes/ArtInfoBox';
import GameInfoBox from '../components/infoBoxes/GameInfoBox';

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
        <div className='p-4'>
          <Header />
        </div>
          <div className='w-fill h-[450px] flex justify-center gap-4 overflow-y-scroll'>
            <PokeApiList />
          </div> 
          <div className='flex flex-col gap-4 p-2 flex-wrap'>
            <OrigenInfoBox />
            <ArtInfoBox />
            <GameInfoBox />
          </div>
          <div className='p-4'>
            <Footer />
          </div>
      </div>
    </Router>
    </div>
  );
}

export default App;
