import React, { useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';

function List ({title}) {

    const [item, setItem] = useState([]);
    const {category} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('items');
        const categorias = category ? itemCollection.where('category', '==', category) : itemCollection; 

        if (category == undefined) {
            itemCollection.get().then((querySnapshot) => {
                if (querySnapshot.size === 0) { 
                }
                setItem(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            });
        } else {
            categorias.get().then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                }
                setItem(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            });
        }
    }, [category]);

    return <>
    <h1 style={{backgroundColor:'blue'}}>{title}</h1>
    <ItemList items={item}/>
    </>
}

export default List;