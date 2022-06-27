/* eslint-disable no-unused-vars */
import './App.css';
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer';
import React, { useEffect, useState } from 'react';
import ItemDetailContainer from './Components/ItemDetailContianer';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from './Components/Home'
import Cart from './Components/Cart';
import MyProvider from './Components/CartContext';

function App() {
  return (
    <>
      <MyProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={
              <Cart />
            } />
            {/* <Route path="/cart" element={<div>this is the cart</div>} /> */}
          </Routes>
        </BrowserRouter>
      </MyProvider>
    </>
  );
}

export default App;
