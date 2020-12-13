import React, { useState } from 'react';
import './ItemCount.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons'

    function Contador ({stock, initial, onAdd}) {

        const [cantidad, setCantidad] = useState(initial);

        function aumentar () {
            return setCantidad(cantidad + 1);
        }

        function disminuir () {
            return setCantidad(cantidad - 1);
        }

        return <div className='divItemCount'>
                    <hr></hr>
                    <p className='stock'>Stock disponible {stock > 0 ? <FontAwesomeIcon style={{color:"green"}} icon={faCheckCircle}/> : <FontAwesomeIcon icon={faTimesCircle} />}</p>
                    <div className='divButtons'>
                        <button className='countButtons' disabled={cantidad === 0 ? true : false} onClick={disminuir}>-</button>
                        <p className='pCantidad'>{cantidad}</p>
                        <button className='countButtons' disabled={cantidad === stock ? true : false} onClick={aumentar}>+</button>
                    </div>
                    <button className='addToCart' disabled={cantidad === 0 || stock === 0 ? true : false} onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
                </div>
    }

export default Contador;