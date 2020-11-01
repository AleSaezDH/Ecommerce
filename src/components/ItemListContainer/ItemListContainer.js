import React, { useState, useEffect } from 'react';
import ItemCount from '../itemCount/ItemCount';
import ItemList from '../itemList/ItemList';

let productos = [{ id: '1', title: 'Nike Air Max', price: '8000', pictureUrl: 'pictureUrl' }, { id: '2', title: 'Supreme', price: '12000', pictureUrl: 'pictureUrl' }];

const promise = new Promise ((res) => {
    res(productos);
});

function List ({title}) {

    const [item, setItem] = useState([]);

    useEffect(() => {
            promise.then(x => {
        setTimeout(() => {
            setItem(x)
        })
    });
    }, []);

    function onAdd (cantidad) {
        alert ('Agregaste ' + cantidad + ' al carrito');
        }

    return <>
    <h1>{title}</h1>
    <ItemCount stock={10} initial={1} onAdd={onAdd}/>
    <ItemList prop={item}/>
    </>
}

export default List;