import React from 'react';
import './Item.css';

    function Items (prop) {
        return <div className='item-div'>
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