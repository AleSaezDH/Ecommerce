import React, { useEffect } from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

function Cart () {
    const {cartItems, remove, empty} = useCartContext();
    let preciosItems = cartItems.map(item => item.itemInformation.price * item.quantity);
    let precioTotal = preciosItems.reduce( (valorAnterior, valorActual) => {
        return valorAnterior + valorActual;
      }, 0);

return <> <h1>Carrito</h1>
{cartItems.length != 0 ? cartItems.map(eachItem => (
    <div>
        <div style={{border:'red solid 2px'}}>
            <p>Producto: {eachItem.itemInformation.title}</p>
            <p>Cantidad: {eachItem.quantity}</p>
            <p>Precio/unidad: $ {eachItem.itemInformation.price}</p>
            <button onClick={()=>remove(eachItem)}>Eliminar</button>
        </div>
    </div>)) : <div>
                    <p>Tu carrito esta vacío</p>
                    <Link style={{color:'black'}} to='/'>Ver productos</Link>
                </div>}
    <div>
        <button style={cartItems.length != 0 ? {display:'block'} : {display:'none'}}><Link to='/checkout' style={{color:'black'}}>Finalizar compra</Link></button>
        <button style={cartItems.length != 0 ? {display:'block'} : {display:'none'}} onClick={empty}>Vaciar carrito</button>
    </div>
    <div>
        <p style={cartItems.length != 0 ? {display:'block'} : {display:'none'}}>Total: $ { precioTotal }</p>
    </div>

</>
}

export default Cart;