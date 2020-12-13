import React from 'react';
import { Link } from 'react-router-dom';

    function Click () {
        return <button style={{position:'fixed', top:155, left:5, padding:5, display:'flex', justifyContent:'center'}}><Link style={{color:"black"}} to='/cart'>Terminar <br />compra</Link></button>
    }

export default Click;