import React, { useState } from 'react';

import "./style.css"
import NumberRow from "../Number_row/index"

export default function About () {

    const [hide, setHide] = useState(false);

    const setHiddeHandler = () => {
        setHide(!hide);
    }

    return(
        <div id='background'>
            <NumberRow statusHide={hide} handleStatusHide={setHiddeHandler}/>
            <div class='container'>
                <p class='text'>
                    Meu nome é Rafael Marques Rache, sou estudante de Engenharia da Computação na UFRGS (Universidade Federal do Rio Grande do Sul).<br/>
                    Hoje, atuo como desenvolvedor na IDE jr (empresa júnior de informatica da UFRGS).
                </p>
            </div>
        </div>
    )
}