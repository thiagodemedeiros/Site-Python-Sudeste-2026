import { BrowserRouter , Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/home/Home"
import PaginaPalestrantes from "./pages/palestrantes/PaginaPalestrantes"
import Carregamento from "./components/Carregamento"
import { useEffect, useState } from "react"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (<>
    <BrowserRouter basename="/Site-Python-Sudeste-2026">
      {loading ? (
          <Carregamento/>
        ) : (
            <Routes>
              <Route path="" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="paginapalestrantes" element={<PaginaPalestrantes/>}/>
              </Route>
            </Routes>
      )}
    </BrowserRouter>
  </>)
}

export default App
