import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartProvider, { cartContext } from './context/CartContext';

function App() {
  return (
    <CartProvider defaultCartValue={[]}>
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
          <Route exact path='/checkout'><Checkout /></Route>
        </Switch>
      </div>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App;
