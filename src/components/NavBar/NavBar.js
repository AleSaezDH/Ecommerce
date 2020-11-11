import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function NavBar () {
    return (
        <header>
            <nav>
                <ul className='productos'>
                    <li><Link to='/'>Home</Link></li>
                    <li className='li-productos'><Link to='/'>Productos <FontAwesomeIcon icon={faAngleDown} /></Link>
                        <ul className='ul-productos'>
                            <li><Link to='/categoria/remeras'>Remeras</Link></li>
                            <li><Link to='/categoria/buzos'>Buzos</Link></li>
                            <li><Link to='/categoria/camperas'>Camperas</Link></li>
                            <li><Link to='/categoria/pantalones'>Pantalones</Link></li>
                            <li><Link to='/categoria/shorts'>Shorts</Link></li>
                            <li id='accesorios'><Link to='/categoria/accesorios'>Accesorios</Link></li>
                        </ul>
                    </li>
                    <li><Link id='robertoSanchez' to='/about'>Roberto Sanchez</Link></li>
                    <li><Link to='/envios'>Envíos</Link></li>
                    <li><Link to='/contacto'>Contacto</Link></li>
                    <li><CartWidget /></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;