import React from 'react';
import ItemCount from '../itemCount/ItemCount';

function list ({title}) {

    function onAdd (cantidad) {
        alert ('Agregaste ' + cantidad + ' al carrito');
        }
    
    return <>
    <h1>{title}</h1>
    <ItemCount stock={10} initial={1} onAdd={onAdd}/>
    </>
}

export default list;