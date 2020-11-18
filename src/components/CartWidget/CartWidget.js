import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import '../NavBar/NavBar.css';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

function Cart () {
    const {cartItems} = useCartContext();
        let cantidadProductos = cartItems.map(item => item.quantity);
        let cantidadTotalProductos = cantidadProductos.reduce( (valorAnterior, valorActual) => {
            return valorAnterior + valorActual;
        }, 0);
    return <li><Link to='/cart'><FontAwesomeIcon icon={faShoppingCart}/></Link>{cantidadTotalProductos ? cantidadTotalProductos : ''}</li>
}

export default Cart;