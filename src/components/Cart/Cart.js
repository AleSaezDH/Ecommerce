import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

function Cart () {
    const {cartItems, remove, empty} = useCartContext();


return <> {cartItems.map(eachItem => (
    <div>
        <div style={{border:'red solid 2px'}}>
            <p>Producto: {eachItem.itemInformation.title}</p>
            <p>Cantidad: {eachItem.quantity}</p>
            <button onClick={()=>remove(eachItem)}>Eliminar</button>
        </div>
    </div>))}
    <div>
        <button style={cartItems.length != 0 ? {display:'block'} : {display:'none'}}><Link to='/checkout' style={{color:'black'}}>Finalizar compra</Link></button>
        <button style={cartItems.length != 0 ? {display:'block'} : {display:'none'}} onClick={empty}>Vaciar carrito</button>
    </div>
</>
}

export default Cart;