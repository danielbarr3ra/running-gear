import './App.css';
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer';
import React from 'react';
import ItemDetailContainer from './Components/ItemDetailContianer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './Components/Cart';
import MyProvider from './Components/CartContext';
import { initializeApp } from "firebase/app";


function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyAoIfKcxV3rp2u-jjXNg-3HDoWJkctnb9s",
    authDomain: "running-gear.firebaseapp.com",
    projectId: "running-gear",
    storageBucket: "running-gear.appspot.com",
    messagingSenderId: "708748387871",
    appId: "1:708748387871:web:b3790e7716f04d1aef972a"
  };

  initializeApp(firebaseConfig);

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
          </Routes>
        </BrowserRouter>
      </MyProvider>
    </>
  );
}

export default App;
