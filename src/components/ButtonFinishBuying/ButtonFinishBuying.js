import React from 'react';
import { Link } from 'react-router-dom';

function Button () {
    return <button style={{padding : 5, fontFamily : 'Inter'}}><Link to='/cart' style={{color:"black"}}>Terminar compra</Link></button>
}

export default Button;