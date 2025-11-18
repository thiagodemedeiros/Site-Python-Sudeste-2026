import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/home/Home"
import PaginaPalestrantes from "./pages/palestrantes/PaginaPalestrantes"

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="paginapalestrantes" element={<PaginaPalestrantes/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
