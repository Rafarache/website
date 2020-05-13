import React, { useState } from 'react';

import Number_Row from '../Number_row/index'
import Code from '../Code/index'
import "./style.css"



export default function Welcome () {

    const [hide, setHide] = useState(false);

    const setHiddeHandler = () => {
        setHide(!hide);
    }

    return(
        <div id='background'>
            <Number_Row statusHide={hide} handleStatusHide={setHiddeHandler}/>
            <Code statusHide={hide} handleStatusHide={setHiddeHandler}/>
        </div>
    )
}