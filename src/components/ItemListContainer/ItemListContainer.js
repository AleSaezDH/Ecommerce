import React, { useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';

function List () {

    const [item, setItem] = useState([]);
    const {category} = useParams();
    const db = getFirestore();
    const itemCollection = db.collection('items');

    // REMERAS
    const [remerasFirestore, setRemerasFirestore] = useState([]);
    useEffect(() => {
        const remeras = itemCollection.where('category', '==', 'remeras');
        remeras.get().then((querySnapshot) => {
            if (querySnapshot.size == 0) {
            }
            setRemerasFirestore(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()})))
        });
    }, []);

    // BUZOS
    const [buzosFirestore, setBuzosFirestore] = useState([]);
    useEffect(() => {
        const buzos = itemCollection.where('category', '==', 'buzos');
        buzos.get().then((querySnapshot) => {
            if (querySnapshot.size == 0) {
            }
            setBuzosFirestore(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()})))
        });
    }, []);

    // CAMPERAS
    const [camperasFirestore, setCamperasFirestore] = useState([]);
    useEffect(() => {
        const camperas = itemCollection.where('category', '==', 'camperas');
        camperas.get().then((querySnapshot) => {
            if (querySnapshot.size == 0) {
            }
            setCamperasFirestore(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()})))
        });
    }, []);

    // PANTALONES
    const [pantalonesFirestore, setPantalonesFirestore] = useState([]);
    useEffect(() => {
        const pantalones = itemCollection.where('category', '==', 'pantalones');
        pantalones.get().then((querySnapshot) => {
            if (querySnapshot.size == 0) {
            }
            setPantalonesFirestore(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()})))
        });
    }, []);

    // SHORTS
    const [shortsFirestore, setShortsFirestore] = useState([]);
    useEffect(() => {
        const shorts = itemCollection.where('category', '==', 'shorts');
        shorts.get().then((querySnapshot) => {
            if (querySnapshot.size == 0) {
            }
            setShortsFirestore(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()})))
        });
    }, []);

    // ACCESORIOS
    const [accesoriosFirestore, setAccesoriosFirestore] = useState([]);
    useEffect(() => {
        const accesorios = itemCollection.where('category', '==', 'accesorios');
        accesorios.get().then((querySnapshot) => {
            if (querySnapshot.size == 0) {
            }
            setAccesoriosFirestore(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()})))
        });
    }, []);

    // CATEGORIA
        useEffect(() => {
        const categorias = category ? itemCollection.where('category', '==', category) : itemCollection;

        categorias.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
            }
            setItem(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });
    }, [category]);

    return <div>{category ? <>
    <h1>{category == 'remeras' ? 'Remeras' : false}</h1>
    <h1>{category == 'buzos' ? 'Buzos' : false}</h1>
    <h1>{category == 'camperas' ? 'Camperas' : false}</h1>
    <h1>{category == 'pantalones' ? 'Pantalones' : false}</h1>
    <h1>{category == 'shorts' ? 'Shorts' : false}</h1>
    <h1>{category == 'accesorios' ? 'Accesorios' : false}</h1>
    <body>
        <section>
            <article><ItemList items={item}/></article>
        </section>
    </body>
    </>
    :
    <>
    <div className='rellenoNegro1'></div>
    <div className='divBanner'>
        <img className='logoBanner' src='../../unnamed.jpg'></img>
    </div>
    <div className='rellenoNegro2'></div>
    <body className='body-home'>
        <section>
            <h1>Remeras</h1>
            <article><ItemList items={remerasFirestore}/></article>
        </section>
        <section>
            <h1>Buzos</h1>
            <article><ItemList items={buzosFirestore}/></article>
        </section>
        <section>
            <h1>Camperas</h1>
            <article><ItemList items={camperasFirestore}/></article>
        </section>
        <section>
            <h1>Pantalones</h1>
            <article><ItemList items={pantalonesFirestore}/></article>
        </section>
        <section>
            <h1>Shorts</h1>
            <article><ItemList items={shortsFirestore}/></article>
        </section>
        <section>
            <h1>Accesorios</h1>
            <article><ItemList items={accesoriosFirestore}/></article>
        </section>
    </body>
    </>
    }
    </div>
}


export default List;

    /*useEffect(() => {
        const categorias = category ? itemCollection.where('category', '==', category) : itemCollection;

        categorias.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
            }
            setItem(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });
    }, [category]);*/