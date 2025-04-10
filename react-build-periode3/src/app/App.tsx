import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokeApiList from '../components/api/PokeApiList';
import ApiDetail from '../components/api/ApiDetail';

function App() {
  return (
    <Router>
      <div>
        <div>
          <Routes>
          <Route path="/" element={<PokeApiList />} />
          <Route path="/pokemon/:name" element={<ApiDetail />} />
          </Routes>
        </div>
          <div className='w-fill h-[450px] flex justify-center gap-4 overflow-y-scroll'>
            <PokeApiList />
          </div> 
      </div>
    </Router>
  );
}

export default App;
