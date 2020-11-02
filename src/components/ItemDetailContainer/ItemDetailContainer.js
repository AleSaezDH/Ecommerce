import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

let productos = [{ id: '1', title: 'Remera Air Sanchez', price: '$ 3000', pictureUrl: 'pictureUrl' }, { id: '2', title: 'Buzo Limited Edition', price: '$ 8000', pictureUrl: 'pictureUrl' }];

const getItem = new Promise ((res) => {
    res(productos)
});

    function ItemDetailContainer ({title}) {
        const [producto, setProducto] = useState([]);

        useEffect(() => {
            getItem.then(x => {
                setTimeout(() => {
                    setProducto(x);
                }, 2000)
            });
        }, [])

        return <>
        <h1 style={{backgroundColor:'red'}}>{title}</h1>
        <ItemDetail prop = {producto}/>
        </>
    }

export default ItemDetailContainer;