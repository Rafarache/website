import React, { useState } from 'react';

import Number_Row from '../Number_row/index'
import AppTarefas from '../Portifolio/appTarefas/index'
import "./style.css"



export default function Portifolio () {

    const [hide, setHide] = useState(false);

    const setHiddeHandler = () => {
        setHide(!hide);
    }

    return(
        <div id='background'>
            <Number_Row statusHide={hide}
                handleStatusHide={setHiddeHandler}
                notShow   
            />
            <div class='portifolio'>
                <AppTarefas />
            </div>
        </div>
    )
}