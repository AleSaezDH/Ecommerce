import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <ItemListContainer title='ItemListContainer'/>
          </Route>
          <Route exact path='/item/:id'>
            <ItemDetailContainer title='ItemDetailContainer'/>
          </Route>
          <Route exact path='/cart'>
            <p>Carrito</p>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
