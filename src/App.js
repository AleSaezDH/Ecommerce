import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import Soon from './components/Soon/Soon';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';
import ClickContext from './context/ClickContext';


function App() {

  return (
    <ClickContext defaultClickValue={false}>
    <CartProvider defaultCartValue={[]}>
    <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/robertosanchez'> <Soon /> </Route>
          <Route exact path='/envios'> <Soon /> </Route>
          <Route exact path='/contacto'> <Soon /> </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
          <Route exact path='/'>
            <ItemListContainer/>
          </Route>
          <Route exact path='/:category'>
            <ItemListContainer/>
          </Route>
          <Route exact path='/item/:id'>
            <ItemDetailContainer />
          </Route>
        </Switch>
        <Footer />
    </BrowserRouter>
    </CartProvider>
    </ClickContext>
  )
}

export default App;
