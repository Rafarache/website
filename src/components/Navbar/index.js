  
import React from 'react';

import Logo from '../../images/logo.png';

import Github from '../../images/github.png';
import Linkedin from '../../images/linkedin.png';


import IconHome from '../../images/home.png';
import IconDirOpen from '../../images/opened_folder.png';
import IconDirClosed from '../../images/closed_folder.png';
import IconDirMail from '../../images/mail.png';
import IconProfile from '../../images/profile.png'

import "./style.css"

export default function Navbar (props) {
    return(
        <nav>
            <a onClick={props.setPage.bind(this, 0)} ><img src={Logo} alt="Logo" id="logo"/></a>
            <div id='icon_bar'>
                <a onClick={props.setPage.bind(this, 1)} ><img src={IconDirClosed} alt="IconDirClosed" class='icon'/></a>
                <a onClick={props.setPage.bind(this, 2)} ><img src={IconProfile} alt="IconProfile" class='icon'/></a>
            </div>
            <div id='links_bar'>
                <a href='https://github.com/Rafarache' target="_blank"><img src={Github} alt="Github" class='links'/></a>
                <a href='https://www.linkedin.com/in/rafael-marques-rache-838360122/' target="_blank"><img src={Linkedin} alt="Linkedin" class='links'/></a>
            </div>
        </nav>
    )
}