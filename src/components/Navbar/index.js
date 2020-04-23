  
import React from 'react';
import Logo from '../../images/logo.png';

import "./style.css"

export default function Navbar () {
    return(
        <nav>
            <img src={Logo} alt="Logo" id="logo"/>
        </nav>
    )
}