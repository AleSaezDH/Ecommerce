import React from 'react';
import './CartWidget.css';
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
    return <div className='divCount'>
    <Link to='/cart'><FontAwesomeIcon icon={faShoppingCart}/></Link>
    {cantidadTotalProductos ? <p className='count'> {cantidadTotalProductos} </p> : false}
    </div>
}

export default Cart;