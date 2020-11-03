import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

let productos = [{ id: '1', title: 'Nike Air Max', price: '$ 8000', pictureUrl: 'pictureUrl', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis repellat itaque pariatur non quidem iste ea, commodi, hic architecto reiciendis sunt est nobis tempora quas earum ipsam quibusdam suscipit libero.' }, { id: '2', title: 'Supreme', price: '$ 12000', pictureUrl: 'pictureUrl', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis repellat itaque pariatur non quidem iste ea, commodi, hic architecto reiciendis sunt est nobis tempora quas earum ipsam quibusdam suscipit libero.' }];

const getItem = new Promise ((res) => {
    res(productos)
});

    function ItemDetailContainer ({title}) {
        const [producto, setProducto] = useState([]);

        useEffect(() => {
            getItem.then(x => {
                setTimeout(() => {
                    let itemId = x.filter(x => x.id == 1);
                    setProducto(itemId[0]);
                }, 2000)
            });
        }, [])

        return <>
        <h1 style={{backgroundColor:'red'}}>{title}</h1>
        <ItemDetail item = {producto}/>
        </>
    }

export default ItemDetailContainer;