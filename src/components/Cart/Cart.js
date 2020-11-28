import React, { useEffect, useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import Checkout from '../Checkout/Checkout';
import { Link } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import firebase from 'firebase/app';
import '@firebase/firestore';

function Cart () {
    const {cartItems, remove, empty} = useCartContext();
    const [orderId, setOrderId] = useState();

    let preciosItems = cartItems.map(item => item.itemInformation.price * item.quantity);
    let precioTotal = preciosItems.reduce( (valorAnterior, valorActual) => {
        return valorAnterior + valorActual;
      }, 0);

      function Order () {

        let inputNombre = document.getElementById('nombre').value;
        let inputApellido = document.getElementById('apellido').value;
        let inputMail = document.getElementById('mail').value;
        let inputCelular = document.getElementById('celular').value;
        let inputDni = document.getElementById('dni').value;
        let inputDomicilio = document.getElementById('domicilio').value;
          
        let newOrder = {
            user : {nombre : inputNombre, apellido : inputApellido, mail : inputMail, celular : inputCelular, dni : inputDni, domicilio : inputDomicilio},
            products : cartItems.map(items => (
                {id : items.itemInformation.id, titulo : items.itemInformation.title, precio : items.itemInformation.price,cantidad : items.quantity}
            )),
            date : firebase.firestore.FieldValue.serverTimestamp(),
            total : precioTotal
        }
        
        let db = getFirestore();
        let orderCollection = db.collection('orders');
        orderCollection.add(newOrder).then(({id}) => {
            setOrderId(id);
        });
    }
    console.log(orderId);

return <> {orderId == undefined ? <>
<h1>Carrito</h1>
    <div style={cartItems.length != 0 ? {display:'block'} : {display:'none'}}>
        <form>
            <label>Nombre</label>
            <input id='nombre' name='nombre'></input>
            <label>Apellido</label>
            <input id='apellido' name='apellido'></input>
            <label>Mail</label>
            <input id='mail' name='mail'></input>
            <label>Celular</label>
            <input id='celular' name='celular'></input>
            <label>Dni</label>
            <input id='dni' name='dni'></input>
            <label>Domicilio</label>
            <input id='domicilio' name='domicilio'></input>
        </form>
    </div>
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
        <button style={cartItems.length != 0 ? {display:'block'} : {display:'none'}}><Link onClick={Order} style={{color:'black'}}>Finalizar compra</Link></button>
        <button style={cartItems.length != 0 ? {display:'block'} : {display:'none'}} onClick={empty}>Vaciar carrito</button>
    </div>
    <div>
        <p style={cartItems.length != 0 ? {display:'block'} : {display:'none'}}>Total: $ { precioTotal }</p>
    </div>
</> : <h1><Checkout orderId = {orderId}/></h1>
}
</>
}

export default Cart;