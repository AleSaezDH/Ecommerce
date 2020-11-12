import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/cart'>
          <Cart />
          </Route>
          <Route exact path='/'>
            <ItemListContainer title='ItemListContainer'/>
          </Route>
          <Route exact path='/categoria/:category'>
            <ItemListContainer title='ItemListContainer'/>
          </Route>
          <Route exact path='/item/:id'>
            <ItemDetailContainer title='ItemDetailContainer'/>
          </Route>
          <Route exact path='/cart'></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
