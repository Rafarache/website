import React, { useState } from 'react';

import NumberRow from '../Number_row/index'
import Code from '../Code/index'
import "./style.css"



export default function Welcome () {

    const [hide, setHide] = useState(false);

    const setHiddeHandler = () => {
        setHide(!hide);
    }

    return(
        <div id='background'>
            <NumberRow statusHide={hide} handleStatusHide={setHiddeHandler}/>
            <Code statusHide={hide} handleStatusHide={setHiddeHandler}/>
        </div>
    )
}