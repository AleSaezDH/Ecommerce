import React from 'react';
import Items from '../Items/Item';

    export default function itemList ({prop}) {
        let items = prop;
    return items.map((x) => (<Items id = {x.id} titulo = {x.title} precio = {x.price} imagen = {x.pictureUrl} />));

    }