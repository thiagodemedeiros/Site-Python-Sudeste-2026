import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import PaginaPalestrantes from "./pages/palestrantes/PaginaPalestrantes"

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="paginapalestrantes" element={<PaginaPalestrantes/>}/>
      </Routes>
    </>
  )
}

export default App
