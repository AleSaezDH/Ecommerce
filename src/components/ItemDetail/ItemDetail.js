import React from 'react';
import ItemCount from '../itemCount/ItemCount';
import '../Items/Item.css';

function itemDetail ({item}) {

    function onAdd (cantidad) {
        alert ('Agregaste ' + cantidad + ' al carrito');
        }
        console.log(item);
    return <div>
                <ItemCount stock={100} initial={1} onAdd={onAdd}/>
                <ul>
                    <li>{ item.title }</li>
                    <li>{ item.price }</li>
                    <li>{ item.description }</li>
                    <li>{ item.pictureUrl }</li>
                </ul>
    </div>
}

export default itemDetail;