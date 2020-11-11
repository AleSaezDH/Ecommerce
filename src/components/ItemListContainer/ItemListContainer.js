import React, { useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';

let productos = [{ id: '1', category:'zapatillas', title: 'Nike Air Max', price: '$ 8000', pictureUrl: 'pictureUrl', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis repellat itaque pariatur non quidem iste ea, commodi, hic architecto reiciendis sunt est nobis tempora quas earum ipsam quibusdam suscipit libero.' }, { id: '2', category:'buzos', title: 'Supreme', price: '$ 12000', pictureUrl: 'pictureUrl', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis repellat itaque pariatur non quidem iste ea, commodi, hic architecto reiciendis sunt est nobis tempora quas earum ipsam quibusdam suscipit libero.' }, { id: '3', category:'remeras', title: 'Adidas Original', price: '$ 3500', pictureUrl: 'pictureUrl', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis repellat itaque pariatur non quidem iste ea, commodi, hic architecto reiciendis sunt est nobis tempora quas earum ipsam quibusdam suscipit libero.' }];

const promise = new Promise ((res) => {
    res(productos);
});

function List ({title}) {

    const [item, setItem] = useState([]);
    const {category} = useParams();

    useEffect(() => {
        promise.then (x => {
            if (category) {
                let categoria = x.filter(articulo => articulo.category == category);
                setItem(categoria);
            } else {
            setTimeout(() => {
                setItem(x);
            }, 2000);;}
        })
    }, [category]);

    return <>
    <h1 style={{backgroundColor:'blue'}}>{title}</h1>
    <ItemList items={item}/>
    </>
}

export default List;