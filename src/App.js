import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (<div>
      <NavBar />
      <ItemListContainer title='ItemListContainer'/>
      <ItemDetailContainer title='ItemDetailContainer'/>
    </div>
  );
}

export default App;
