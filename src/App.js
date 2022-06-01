import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import ItemDetailPage from './pages/ItemDetailPage';
import Preguntas from './pages/preguntas';
import Contacto from './pages/Contacto';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './pages/Products';





function App() {
  return (

    <div className='App' >

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/producto/:id' element={<ItemDetailPage />}></Route>
          <Route path='/contacto' element={<Contacto />}></Route>
          <Route path='/preguntas' element={<Preguntas />} ></Route>
          <Route path='/productos' element={<Products />}></Route>
          <Route path='*' element={<h1>404: LA PAGINA SOLICITADA NO EXISTE</h1>}></Route>
        </Routes>
      </BrowserRouter>

    </div>


  );
}

export default App;
