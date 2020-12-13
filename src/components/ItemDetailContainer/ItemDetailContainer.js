import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';

    function ItemDetailContainer ({title}) {
        const [producto, setProducto] = useState([]);
        const {id} = useParams();

        useEffect(() => {
            const db = getFirestore();
            const itemCollection = db.collection('items');
            const item = itemCollection.doc(id);
            item.get().then((doc) => {
                if (!doc) {
                    console.log('el item no existe');
                }
                setProducto({ id: doc.id, ...doc.data() })
            });
        });

        return <>
        <ItemDetail item = {producto}/>
        </>
    }

export default ItemDetailContainer;