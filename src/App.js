/* eslint-disable no-unused-vars */
import './App.css';
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer';
import React, { useEffect, useState } from 'react';
import ItemDetailContainer from './Components/ItemDetailContianer';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from './Components/Home'

function App() {
  const [activeItem, setActiveItem] = useState(135)
  let { detailsID } = useParams()
  const openDetails = (id) => {
    console.log("hello theere")
    setActiveItem(id)
  }

  useEffect(() => {
    console.log(activeItem)
  }, [activeItem])


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer clickDetails={openDetails} />} />
          <Route path="/category/:id" element={<ItemDetailContainer activeID={activeItem} />} />
          <Route path="/item/:id" element={<ItemDetailContainer activeID={activeItem} />} />
        </Routes>
      </BrowserRouter>
      <ItemDetailContainer activeID={activeItem} />
    </>
  );
}

export default App;
