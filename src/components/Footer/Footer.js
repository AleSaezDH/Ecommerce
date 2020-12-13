import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';

    function Footer () {

        return <ul style={{backgroundColor : 'gray', marginTop : 50}} className='productos'>
                        <li><a style={{color:'white', fontSize:16}} target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/robertosanchezstyle/'><FontAwesomeIcon icon={faInstagram} /> /robertosanchezstyle</a></li>
                        <li><Link id='robertoSanchez' to='/robertosanchez'>Roberto Sánchez</Link></li>
                        <li><Link to='/envios'>Envíos</Link></li>
                        <li><Link to='/contacto'>Contacto</Link></li>
                    </ul>
    }

export default Footer;