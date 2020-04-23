import React from 'react';

import Number_Row from '../Number_row/index'
import "./style.css"

export default function Welcome () {
    return(
        <div>
            <Number_Row />
            <div id='open_close'>
                <div id='button'>
                    <a href="#">⊞</a>
                    <div id='bar'><div></div></div>
                </div>
                <div id='code'>
                    <p><a class='opacity_low'>function MyPortifilio ( person ) &#123;</a><br/>
                    <br/>
                        <p class='tab'><a class='opacity_low'>this.firstName &#61; person.first;<br/>
                        this.lastName &#61; person.last;<br/>
                        his.age &#61; person .age;<br/><br/><br/></a>
                        <a class='ola'>Olá,<br/>
                        Eu sou o Rafael<br/>
                        prazer conhece-lo</a>
                        <a class='opacity_low ajust'><br/><br/><br/>return ( MyPortifilio )</a>
                        </p>
                    <a class='opacity_low'>&#125;</a><br/>
                    <br/>    
                    </p>
                </div>                
            </div>
        </div>
    )
}