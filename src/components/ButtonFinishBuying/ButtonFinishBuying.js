import React from 'react';
import { Link } from 'react-router-dom';

function Button () {
    return <button><Link to='/cart' style={{color:"black"}}>Terminar compra</Link></button>
}

export default Button;