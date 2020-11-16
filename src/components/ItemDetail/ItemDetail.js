import React, { useState } from 'react';
import ItemCount from '../itemCount/ItemCount';
import Button from '../ButtonFinishBuying/ButtonFinishBuying';
import '../Items/Item.css';
import { useCartContext } from '../../context/CartContext';
import cart from '../CartWidget/CartWidget';

function ItemDetail ({item}) {

    const [click, setClick] = useState(false);
    const [items, setItems] = useState(0);

    const {add} = useCartContext();

    function onAdd (cantidad) {
        alert ('Agregaste ' + cantidad + ' al carrito');
        setClick(true);
        setItems(cantidad);
        add({itemInformation:item, quantity:cantidad});
        }

    return <div> {click == false ? <ItemCount stock={100} initial={1} onAdd={onAdd} /> : <Button />}
                <ul>
                    <li>{ item.title }</li>
                    <li>{ item.price }</li>
                    <li>{ item.description }</li>
                    <li>{ item.pictureUrl }</li>
                </ul>
    </div>
}

export default ItemDetail;