import React from 'react';

import "./style.css"



export default function Code (props) {
    return(
        <div id='open_close'>
            <div id='name_func'>
                <div onClick={props.handleStatusHide.bind(this)} class='button opacity_low' >⊞</div>
                <div class='opacity_low'>function MyPortifilio ( person ) &#123;</div><br/>
            </div> 
            <div id='code'>
                { props.statusHide? 
                    <div id='bar'><div class='minimized'></div></div>
                    :
                    <>
                        <div id='bar'><div class='function'></div></div>
                        <div class='tab'><div class='opacity_low'>this.firstName &#61; person.first;<br/>
                        this.lastName &#61; person.last;<br/>
                        his.age &#61; person .age;<br/><br/><br/></div>
                        <div class='ola'>Olá,<br/>
                        Eu sou o Rafael<br/>
                        prazer em conhece-lo</div>
                        <div class='opacity_low ajust'><br/><br/>return ( MyPortifilio )</div>
                        <div class='opacity_low ajust'><br/>&#125;</div>
                        </div> 
                    </>
                }
            </div>                
        </div>
    )
}