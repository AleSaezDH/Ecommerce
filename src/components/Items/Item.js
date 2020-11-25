import React from 'react';
import './Item.css';
import ItemCount from '../itemCount/ItemCount';
import { Link } from 'react-router-dom';

    function Items (prop) {
        let id = prop.id;

        function onAdd (cantidad) {
            alert ('Agregaste ' + cantidad + ' al carrito');
            }
        return <div className='item-div'>
                <ItemCount stock={10} initial={1} onAdd={onAdd}/>
                <ul>
                    <li>{ prop.titulo }</li>
                    <li>{ prop.descripcion }</li>
                    <li>{ prop.imagen }</li>
                    <li>{ prop.size }</li>
                    <li>{ prop.precio }</li>
                    <li><Link className='a-item' to={`/item/${prop.id}`}>Ver detalle</Link></li>
                </ul>
            </div>
    }

export default Items;