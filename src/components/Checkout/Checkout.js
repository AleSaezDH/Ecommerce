import React from 'react';
import { getFirestore } from '../../firebase';

function Checkout () {
    const db = getFirestore();
    const order = db.collection('orders');

    return <>
    <h1>Tu orden fue recibida correctamente!</h1>
    <h3>Tu número de orden es: {  }</h3>
    <p>Datos de tu pedido:</p>
    <ul>
        <li>Nombre: </li>
        <li>Apellido: </li>
        <li>Mail: </li>
        <li>Celular: </li>
        <li>Dni: </li>
        <li>Domicilio: </li>
    </ul>
    <p>Si algún dato es incorrecto por favor comunicate al 1123456789</p>
    </>
}

export default Checkout;