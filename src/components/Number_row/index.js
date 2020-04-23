import React from 'react';

import "./style.css"

export default function Number_Row () {

    var limit_number = Math.ceil(window.innerHeight / 10)
    var list = [];
    for (var i = 1; i < limit_number +1; i++) {
        list.push(i.toString());
    }

    return(
        <div id='number_row'>
          <ul>
            {list.map((num) => (
              <li key={num}>
                <a>{num}</a>
              </li>
            ))}
          </ul>
        </div>
    )
}