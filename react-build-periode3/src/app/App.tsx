import { BrowserRouter, Routes } from "react-router-dom"
import PokeApiList from "../components/api/PokeApiList"
import Header from "../components/header/Header"

function App() {
  
  return (
    <BrowserRouter> 
      <Routes>
        <body
        style={{
          margin: "0",
          boxSizing: "border-box",
          padding: "0"
        }}>
          
          <div>
            <Header/>
          </div>
          <div className="h-[650px] flex justify-center overflow-y-scroll gap-4 p-4">
            <PokeApiList />
          </div>
            
        </body>
      </Routes>
    </BrowserRouter>
  )
}

export default App
