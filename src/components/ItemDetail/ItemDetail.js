import React from 'react';
import ItemCount from '../itemCount/ItemCount';
import '../Items/Item.css';

function itemDetail ({prop}) {
    function onAdd (cantidad) {
        alert ('Agregaste ' + cantidad + ' al carrito');
        }
    return prop.map(x => <div className='item-div'>
                    <ItemCount stock={100} initial={1} onAdd={onAdd}/>
                    <ul>
                        <li>{ x.id }</li>
                        <li>{ x.title }</li>
                        <li>{ x.price }</li>
                        <li>{ x.pictureUrl }</li>
                    </ul>
    </div>);
}

export default itemDetail;