import React from 'react';
import './Item.css';
import ItemCount from '../itemCount/ItemCount';

    function Items (prop) {

        function onAdd (cantidad) {
            alert ('Agregaste ' + cantidad + ' al carrito');
            }

        return <div className='item-div'>
                <ItemCount stock={10} initial={1} onAdd={onAdd}/>
                <ul>
                    <li><a className='a-item' href='/'>Ver detalle</a></li>
                    <li>{ prop.id }</li>
                    <li>{ prop.titulo }</li>
                    <li>{ prop.precio }</li>
                    <li>{ prop.imagen }</li>
                </ul>
            </div>
    }

export default Items;