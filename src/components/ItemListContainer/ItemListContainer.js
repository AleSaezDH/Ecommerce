import React from 'react';
import ItemCount from '../itemCount/ItemCount';

function list ({title}) {
    
    return <>
    <h1>{title}</h1>
    <ItemCount stock={10} initial={1}/>
    </>
}

export default list;