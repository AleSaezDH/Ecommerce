import React, { useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import { useClickContext } from '../../context/ClickContext';
import Click from '../Click/Click';

function List () {

    const [item, setItem] = useState([]);
    const {category} = useParams();
    const db = getFirestore();
    const itemCollection = db.collection('items');
    const {clicker} = useClickContext();

    // REMERAS
    const [remerasFirestore, setRemerasFirestore] = useState([]);
    useEffect(() => {
        const remeras = itemCollection.where('category', '==', 'remeras');
        remeras.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
            }
            setRemerasFirestore(querySnapshot.docs.map(doc=> ({id: doc.id, ...doc.data()})))
        });
    });

    // BUZOS
    const [buzosFirestore, setBuzosFirestore] = useState([]);
    useEffect(() => {
        const buzos = itemCollection.where('category', '==', 'buzos');
        buzos.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
            }
            setBuzosFirestore(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()})))
        });
    });

    // PANTALONES
    const [pantalonesFirestore, setPantalonesFirestore] = useState([]);
    useEffect(() => {
        const pantalones = itemCollection.where('category', '==', 'pantalones');
        pantalones.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
            }
            setPantalonesFirestore(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()})))
        });
    });

    // SHORTS
    const [shortsFirestore, setShortsFirestore] = useState([]);
    useEffect(() => {
        const shorts = itemCollection.where('category', '==', 'shorts');
        shorts.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
            }
            setShortsFirestore(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()})))
        });
    });

    // ACCESORIOS
    const [accesoriosFirestore, setAccesoriosFirestore] = useState([]);
    useEffect(() => {
        const accesorios = itemCollection.where('category', '==', 'accesorios');
        accesorios.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
            }
            setAccesoriosFirestore(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()})))
        });
    });

    // CATEGORIA
        useEffect(() => {
        const categorias = category ? itemCollection.where('category', '==', category) : itemCollection;

        categorias.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
            }
            setItem(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });
    }, [category]);

    return <>{category ? <>
    <body className='body-home'>{clicker === true ? <Click /> : false}
        <section className='seccionItemList'>
            <h1 className='titulosItemList'>{category}</h1>
            <article className='articleItem'>
                <ItemList items={item}/>
            </article>
        </section>
    </body>
    </>
    :
    <>
    <div className='rellenoNegro1'></div>
    <div className='divBanner'>
        <img alt='' className='logoBanner' src='../../unnamed.jpg'></img>
    </div>
    <div className='rellenoNegro2'></div>
    <body className='body-home'>{clicker === true ? <Click /> : false}
        <section className='seccionItemList'>
            <h1 className='titulosItemList'>Remeras</h1>
            <article className='articleItem'>
                <ItemList items={remerasFirestore}/>
            </article>
        </section>
        <section className='seccionItemList'>
            <h1 className='titulosItemList'>Buzos</h1>
            <article className='articleItem'>
                <ItemList items={buzosFirestore}/>
            </article>
        </section>
        <section className='seccionItemList'>
            <h1 className='titulosItemList'>Pantalones</h1>
            <article className='articleItem'>
                <ItemList items={pantalonesFirestore}/>
            </article>
        </section>
        <section className='seccionItemList'>
            <h1 className='titulosItemList'>Shorts</h1>
            <article className='articleItem'>
                <ItemList items={shortsFirestore}/>
            </article>
        </section>
        <section className='seccionItemList'>
            <h1 className='titulosItemList'>Accesorios</h1>
            <article className='articleItem'>
                <ItemList items={accesoriosFirestore}/>
            </article>
        </section>
        
    </body>
    </>
    }
    </>
}


export default List;