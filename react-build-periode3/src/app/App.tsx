import PokeApiList from "../components/api/PokeApiList"
import Header from "../components/header/Header"

function App() {
  return ( 
    <body
    style={{
      margin: "0",
      boxSizing: "border-box",
      padding: "0"
    }}>
      
      <div>
        <Header/>
      </div>
      <div className="w-[800px] h-[650px] flex justify-center overflow-y-scroll gap-4 p-4">
        <PokeApiList />
      </div>
        
    </body>
  )
}

export default App
