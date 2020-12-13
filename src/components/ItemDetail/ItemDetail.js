import React, { useState } from 'react';
import ItemCount from '../itemCount/ItemCount';
import Button from '../ButtonFinishBuying/ButtonFinishBuying';
import './ItemDetail.css';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

function ItemDetail ({item}) {

    const [click, setClick] = useState(false);
    const [items, setItems] = useState(0);

    const {add} = useCartContext();

    function onAdd (cantidad) {
        alert (`Agregaste ${cantidad} ${item.title} al carrito`)
        setClick(true);
        setItems(cantidad);
        add({itemInformation:item, quantity:cantidad});
        }

        let estilosImagen = {
            borderRadius : 0,
            height : 650,
            width : 400,
            paddingTop: 0,
            marginBottom : 0
        }

        let estilosLink = {
            color : '#609'
        }

        let estilosArticulo = {
            marginTop : 15
        }

        let estilosPrecio = {
            display : 'flex',
            justifyContent : 'center',
            marginTop : 160
        }

    return <div className='divItemDetail'>
            <h1 className='h1-detail'>{ item.title }</h1>
            <div className='divFlexDetail'>
                <div>
                    <img alt='' style={estilosImagen} className='image-item' src={`../../images/${item.id}.jpg`}></img>
                </div>
                <div>
                    <ul>
                        <li className='font'>{ item.description }</li><br />
                        <li className='font'>Talle único</li><br />
                        <li className='font'>Para conocer los detalles del envío, haga click en el siguiente enlace <Link style={estilosLink} to='/envios'>Envíos</Link></li>
                        <div style={estilosPrecio}>
                        <li className='font'>$ { item.price }</li>
                        </div>
                        <li>{ item.pictureUrl }</li>
                    </ul>
                    <article style={estilosArticulo} className='articleItem'>
                        {click === false ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd} /> : <Button />}
                    </article>
                </div>
            </div>
    </div>
}

export default ItemDetail;