import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

let productos = [{ id: '1', category:'zapatillas', title: 'Nike Air Max', price: '$ 8000', pictureUrl: 'pictureUrl', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis repellat itaque pariatur non quidem iste ea, commodi, hic architecto reiciendis sunt est nobis tempora quas earum ipsam quibusdam suscipit libero.' }, { id: '2', category:'buzo', title: 'Supreme', price: '$ 12000', pictureUrl: 'pictureUrl', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis repellat itaque pariatur non quidem iste ea, commodi, hic architecto reiciendis sunt est nobis tempora quas earum ipsam quibusdam suscipit libero.' }, { id: '3', category:'remeras', title: 'Adidas Original', price: '$ 3500', pictureUrl: 'pictureUrl', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis repellat itaque pariatur non quidem iste ea, commodi, hic architecto reiciendis sunt est nobis tempora quas earum ipsam quibusdam suscipit libero.' }];

const getItem = new Promise ((res) => {
    res(productos)
});

    function ItemDetailContainer ({title}) {
        const [producto, setProducto] = useState([]);
        const {id} = useParams();

        useEffect(() => {
            getItem.then(x => {
                    let itemId = x.filter(x => x.id == id);
                    setProducto(itemId[0]);
            });
        }, [])

        return <>
        <h1 style={{backgroundColor:'red'}}>{title}</h1>
        <ItemDetail item = {producto}/>
        </>
    }

export default ItemDetailContainer;