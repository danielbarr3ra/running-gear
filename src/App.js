import './App.css';
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer';
import React from 'react';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Welcome to our running catalog" shoe="vaporflyX 2%" description="this is a great shoe">
      </ItemListContainer>
    </>
  );
}

export default App;
