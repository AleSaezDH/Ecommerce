import React, { useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList';

let productos = [{ id: '1', title: 'Nike Air Max', price: '$ 8000', pictureUrl: 'pictureUrl' }, { id: '2', title: 'Supreme', price: '$ 12000', pictureUrl: 'pictureUrl' }];

const promise = new Promise ((res) => {
    res(productos);
});

function List ({title}) {

    const [item, setItem] = useState([]);

    useEffect(() => {
            promise.then(x => {
        setTimeout(() => {
            setItem(x);
        }, 2000);
    });
    }, []);

    return <>
    <h1 style={{backgroundColor:'blue'}}>{title}</h1>
    <ItemList prop={item}/>
    </>
}

export default List;