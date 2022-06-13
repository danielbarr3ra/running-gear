/* eslint-disable no-unused-vars */
import './App.css';
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer';
import React, { useEffect, useState } from 'react';
import ItemDetailContainer from './Components/ItemDetailContianer';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './Components/Home'
//import Contacto from './Components/Contacto';

function App() {
  const [activeItem, setActiveItem] = useState(135)
  const openDetails = (id) => {
    console.log("hello theere")
    setActiveItem(id)
  }

  useEffect(() => {
    console.log(activeItem)
  }, [activeItem])


  return (
    <>

      <NavBar />
      <ItemListContainer clickDetails={openDetails} />
      <ItemDetailContainer activeID={activeItem} />
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
