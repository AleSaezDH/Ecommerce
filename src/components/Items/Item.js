import React, { useState }from 'react';
import './Item.css';
import ItemCount from '../itemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { useClickContext } from '../../context/ClickContext';

    function Items (prop) {

        const [items, setItems] = useState(0);
        const [click, setClick] = useState(false);

        const {add} = useCartContext();
        const {setClicker} = useClickContext();

        let datosItem = {
            id : prop.id,
            title : prop.titulo,
            description : prop.descripcion,
            price : prop.precio,
            stock : prop.stock,
            category : prop.categoria
        }

        function onAdd (cantidad) {
            alert (`Agregaste ${cantidad} ${prop.titulo} al carrito`)
            setClick(true);
            setItems(cantidad);
            add({itemInformation : datosItem, quantity:cantidad});
            setClicker(true);
        }

        return <div className='item-div'>
                <ul className='ul-item'>
                    <img alt='' className='image-item' src={`../../images/${prop.id}.jpg`}></img>
                    <li id='titulo-item' className='font'>{ prop.titulo }</li>
                    <li className='font'>$ { prop.precio }</li>
                    <li className='liDetail'><Link className='a-item' to={`/item/${prop.id}`}>Ver detalle</Link></li>
                    <ItemCount stock={prop.stock} initial={1} onAdd={onAdd}/>
                </ul>
            </div>
    }

export default Items;