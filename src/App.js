import './App.css';
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer';
import React from 'react';
import ItemDetailContainer from './Components/ItemDetailContianer';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './Components/Home'
//import Contacto from './Components/Contacto';

function App() {
  return (
    <>

      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
      {/* <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/inventory" element={<ItemListContainer />} />

        </Routes>
      </BrowserRouter> */}
      {/* <NavBar />
      <ItemListContainer greeting={"Our daily Specials"}>
      </ItemListContainer> */}
    </>
  );
}

export default App;
