import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import Checkout from '../Checkout/Checkout';
import { Link } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import firebase from 'firebase/app';
import '@firebase/firestore';
import './Cart.css';
import { useClickContext } from '../../context/ClickContext';

function Cart () {
    const {cartItems, remove, empty} = useCartContext();
    const [orderId, setOrderId] = useState();
    const {setClicker} = useClickContext();

    let preciosItems = cartItems.map(item => item.itemInformation.price * item.quantity);
    let precioTotal = preciosItems.reduce( (valorAnterior, valorActual) => {
        return valorAnterior + valorActual;
      }, 0);

      async function Order () {

        let inputNombre = document.getElementById('nombre').value;
        let inputApellido = document.getElementById('apellido').value;
        let inputMail = document.getElementById('mail').value;
        let inputCelular = document.getElementById('celular').value;
        let inputDni = document.getElementById('dni').value;
        let inputDomicilio = document.getElementById('domicilio').value;

        let todosLosInput = [inputNombre, inputApellido, inputMail, inputCelular, inputDni, inputDomicilio];

            for (let i = 0; todosLosInput.length; i++) {
                if (todosLosInput[i] !== undefined) {
                    if (todosLosInput[i].length === 0) {
                        return alert('Por favor completá todos los espacios');
                    }
                } break
            }
          
        let newOrder = {
            user : {nombre : inputNombre, apellido : inputApellido, mail : inputMail, celular : inputCelular, dni : inputDni, domicilio : inputDomicilio},
            products : cartItems.map(items => (
                {id : items.itemInformation.id, titulo : items.itemInformation.title, precio : items.itemInformation.price,cantidad : items.quantity}
            )),
            date : firebase.firestore.FieldValue.serverTimestamp(),
            total : precioTotal
        }
        
        const db = getFirestore();
        let orderCollection = db.collection('orders');
        orderCollection.add(newOrder).then(({id}) => {
            setOrderId(id);
        })
        const itemStock = await db.collection('items').where(firebase.firestore.FieldPath.documentId(), 'in', cartItems.map(x => {return x.itemInformation.id})).get();
        const [item] = itemStock.docs;
        await item.ref.update({ stock: item.data().stock - 1 })
        setClicker(false);
    }

    let estilosImagen = {
        height : 250,
        width : 150,
        marginRight : 70
    }

return <> {orderId === undefined ? <>
{cartItems.length !== 0 ? cartItems.map(eachItem => (
    <body>
    <div>
        <div className='divItemCart'>
            <div>
                <img alt='' style={estilosImagen} src={`../../images/${eachItem.itemInformation.id}.jpg`}></img>
            </div>
            <div className='divItemDescription'>
                <div className='onlyFont'>
                    <p>{eachItem.itemInformation.title}</p>
                    <p>Cantidad: {eachItem.quantity}</p>
                    <p>Precio/unidad: $ {eachItem.itemInformation.price}</p>
                </div>
                <div>
                    <button className='buttonDelete' onClick={()=>remove(eachItem)}>Eliminar</button>
                </div>
            </div>
        </div>
    </div>
    <hr className='hr' />
    </body>)) : <div className='divEmpty'>
                    <div className='divEmpty2'>
                        <p className='carritoVacio'>Tu carrito esta vacío</p>
                        <Link style={{color:'black'}} to='/'>Ver productos</Link>
                    </div>
                </div>}
    <div style={cartItems.length !== 0 ? {display:'block'} : {display:'none'}}>
        <div className='divForm'>
        <p className='completaForm'>Completa el formulario</p>
            <form id='formulario'>
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
    </div>
    <p style={cartItems.length !== 0 ? {display:'block', textAlign:"center", marginBottom:50, fontSize:25} : {display:'none'}}>Total: $ { precioTotal }</p>
    <div>
        <button className='finalizarCompra' style={cartItems.length !== 0 ? {display:'block'} : {display:'none'}}><Link onClick={Order} style={{color:"black"}}>Finalizar compra</Link></button>
        <button className='vaciarCart' style={cartItems.length !== 0 ? {display:'block'} : {display:'none'}} onClick={empty}>Vaciar carrito</button>
    </div>
</> : <h1><Checkout orderId = {orderId}/></h1>
}
</>
}

export default Cart;