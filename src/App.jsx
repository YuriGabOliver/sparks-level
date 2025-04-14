import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './Pages/Inicio'
import Categorias from './Pages/Categorias'
import Stream from './Pages/Streaming'
import Jogos from './Pages/Jogos'
import { useEffect, useRef } from 'react'


function App() {

  const jaExecutou = useRef(false);
  useEffect(() => {
    if (!jaExecutou.current){
      alert("Seja bem-vindo!");
      jaExecutou.current = true;
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/Categorias" element={<Categorias />}></Route>
          <Route path="/Streaming" element={<Stream />}></Route>
          <Route path="/jogos" element={<Jogos />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
