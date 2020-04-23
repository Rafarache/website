import React from 'react';

import "./style.css"



export default function Code (props) {

    return(
        <div id='open_close'>
            <div id='button'>
                <a href="#" onClick={props.handleStatusHide.bind(this)}>⊞</a>
                { props.statusHide? <div id='bar'><div class='minimized'></div></div>:
                    <div id='bar'><div class='function'></div></div>
                }
            </div>
            <div id='code'>
                <p><a class='opacity_low'>function MyPortifilio ( person ) &#123;</a><br/>
                <br/>
                    { props.statusHide? null:
                        <p class='tab'><a class='opacity_low'>this.firstName &#61; person.first;<br/>
                        this.lastName &#61; person.last;<br/>
                        his.age &#61; person .age;<br/><br/><br/></a>
                        <a class='ola'>Olá,<br/>
                        Eu sou o Rafael<br/>
                        prazer conhece-lo</a>
                        <a class='opacity_low ajust'><br/><br/><br/>return ( MyPortifilio )</a>
                        </p>    
                    }
                <a class='opacity_low ajust'>&#125;</a><br/>
                <br/>    
                </p>
            </div>                
        </div>
    )
}