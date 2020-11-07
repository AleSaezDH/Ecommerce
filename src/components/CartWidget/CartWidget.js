import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import '../NavBar/NavBar.css';
import { Link } from 'react-router-dom';

function cart () {
    return <li><Link to='/cart'><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
}

export default cart;