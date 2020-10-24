import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'

function NavBar () {
    return (
        <header>
            <nav>
                <ul className='productos'>
                    <li><a href='/'>Home</a></li>
                    <li className='li-productos'><a href='/'>Productos <FontAwesomeIcon icon={faAngleDown} /></a>
                        <ul className='ul-productos'>
                            <li><a href='/'>Remeras</a></li>
                            <li><a href='/'>Buzos</a></li>
                            <li><a href='/'>Camperas</a></li>
                            <li><a href='/'>Pantalones</a></li>
                            <li><a href='/'>Shorts</a></li>
                            <li id='accesorios'><a href='/'>Accesorios</a></li>
                        </ul>
                    </li>
                    <li><a id='robertoSanchez' href='/'>Roberto Sanchez</a></li>
                    <li><a href='/'>Envíos</a></li>
                    <li><a href='/'>Contacto</a></li>
                    <li><CartWidget /></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;