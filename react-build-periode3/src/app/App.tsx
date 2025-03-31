// import { BrowserRouter, Route, Routes } from "react-router-dom"
import PokeApiList from "../components/api/PokeApiList"
import Header from "../components/header/Header"
// import DetailPage from "../components/detailPage/DetailPage"


// export function AppRoute() {

//   return (
//     <BrowserRouter> 
//       <Routes>
//         <Route path="/" element={<App />}/>
//         <Route path="DetailPage" element={<DetailPage />}/>
//       </Routes>
//     </BrowserRouter>
//   )
// }

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
        <div className="h-[650px] flex justify-center overflow-y-scroll gap-4 p-4">
          <PokeApiList />
        </div>
      </body>
  )
}

export default App
