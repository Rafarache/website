import React from 'react';
import "./style.css"

import AppInit from '../../../images/app_Init.png';
import AppOpened from '../../../images/app_Opened.png';
import AppLogo from '../../../images/app_Logo_Horizontal.png';
import Logo_React from '../../../images/react.png';


export default function AppTarefas () {

    return(
        <div id='container'>
            <div id='descricao'>
               <img src={AppLogo} class='logo' alt="AppLogo" />
                 <a class='low_opacity' href=' '><img src={Logo_React} class='ferramentas' alt="React"/></a>
                <p class='text'>Aplicatico de tarefas feito com React Native e Expo.<br/>&#9;O objetivo desse aplicativo é organizar as
                suas tarefas diárias e trazer um calendário que possibilita a vizualição do comprimeto dessas tarefas no decorrer do mês.</p>
                <a href='https://github.com/Rafarache/ReactNativeApp' class='code'>&#60; Code /&#62;</a>
            </div>
            <div id='images'>
                <img src={AppOpened} class='phone' alt="AppOpened" />
                <img src={AppInit} class='phone' alt="AppInit" />
            </div>   
        </div>
    )
}