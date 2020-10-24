import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import '../NavBar/NavBar.css';

function cart () {
    return <li><a href='/'><FontAwesomeIcon icon={faShoppingCart} /></a></li>
}

export default cart;