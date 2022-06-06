import './App.css';
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer';
import React from 'react';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Our daily Specials"}>
      </ItemListContainer>
    </>
  );
}

export default App;
