  
import React from 'react';

import Logo from '../../images/logo.png';

import Github from '../../images/github.png';
import Linkedin from '../../images/linkedin.png';


import IconHome from '../../images/home.png';
import IconDirOpen from '../../images/opened_folder.png';
import IconDirClosed from '../../images/closed_folder.png';
import IconDirMail from '../../images/mail.png';

import "./style.css"

export default function Navbar () {
    return(
        <nav>
            <img src={Logo} alt="Logo" id="logo"/>
            <div id='icon_bar'>
                <img src={IconHome} alt="Github" class='icon'/>
                <img src={IconDirClosed} alt="IconDirClosed" class='icon'/>
                <img src={IconDirMail} alt="IconDirMail" class='icon'/>
            </div>
            <div id='links_bar'>
                <img src={Github} alt="Github" class='links'/>
                <img src={Linkedin} alt="Linkedin" class='links'/>
            </div>
        </nav>
    )
}