/* eslint-disable no-unused-vars */
import './App.css';
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer';
import React, { useEffect, useState } from 'react';
import ItemDetailContainer from './Components/ItemDetailContianer';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from './Components/Home'

function App() {
  const [catalog, setCatalog] = useState([])
  useEffect(() => {
    const getDetail = () => {
      fetch(`inventory.json`)
        .then(response => response.json())
        .then((data) => {
          console.log(JSON.stringify(data))
          setCatalog(data)
        })
        .catch(error => {
          console.error("Error somethign happened in fetch", error)
        })
    }

    setTimeout(() => {
      getDetail()
      console.log("setData" + JSON.stringify(catalog))
    }, 500)
  }, [])
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item" element={<ItemDetailContainer inventory={catalog} />} />
        </Routes>
      </BrowserRouter>
      <ItemDetailContainer inventory={catalog} />
    </>
  );
}

export default App;
