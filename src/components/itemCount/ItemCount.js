import React, { useState } from 'react';
import './ItemCount.css';

    function Contador ({stock, initial, onAdd}) {

        const [cantidad, setCantidad] = useState(initial);

        function onAdd () {
            alert ('Agregaste ' + cantidad + ' al carrito');
            }

        function aumentar () {
            return setCantidad(cantidad + 1);
        }

        function disminuir () {
            return setCantidad(cantidad - 1);
        }

        return <div className='divItemCount'>
                    <div className='divButtons'>
                        <button className='buttons' disabled={cantidad === stock ? true : false} onClick={aumentar}>+</button>
                        <p className='pCantidad'>{cantidad}</p>
                        <button className='buttons' disabled={cantidad === 0 ? true : false} onClick={disminuir}>-</button>
                    </div>
                    <button className='addToCart' disabled={cantidad === 0 || stock === 0 ? true : false} onClick={onAdd}>Agregar al carrito</button>
                    <p>Stock disponible: {stock}</p>
                </div>
    }

export default Contador;