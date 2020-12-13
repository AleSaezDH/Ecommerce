import React from 'react';
import { useCartContext } from '../../context/CartContext';

function Checkout ({orderId}) {

    const {empty} = useCartContext();

    setTimeout(() => {
        empty()
    }, 100);
    
    return <div>
        <p style={{textAlign:'center', fontFamily:'Inter', fontSize:40, marginTop:70}}>Gracias por elegirnos!</p>
        <p style={{minHeight:465, textAlign:'center', fontFamily:'Inter', fontSize:30, marginTop:30}}>Tu id de compra es: {orderId}</p>
    </div>
}

export default Checkout;