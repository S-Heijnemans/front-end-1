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
        <PokeApiList />
    </body>
  )
}

export default App
