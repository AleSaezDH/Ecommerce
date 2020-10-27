import React, { useState } from 'react';
import './ItemCount.css';
import '../ItemListContainer/ItemListContainer';

    function Contador ({stock, initial, onAdd}) {

        const [cantidad, setCantidad] = useState(initial);

        function aumentar () {
            return setCantidad(cantidad + 1);
        }

        function disminuir () {
            return setCantidad(cantidad - 1);
        }

        return <div className='divItemCount'>
                    <div className='divButtons'>
                        <button className='buttons' disabled={cantidad === 0 ? true : false} onClick={disminuir}>-</button>
                        <p className='pCantidad'>{cantidad}</p>
                        <button className='buttons' disabled={cantidad === stock ? true : false} onClick={aumentar}>+</button>
                    </div>
                    <button className='addToCart' disabled={cantidad === 0 || stock === 0 ? true : false} onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
                    <p>Stock disponible: {stock}</p>
                </div>
    }

export default Contador;