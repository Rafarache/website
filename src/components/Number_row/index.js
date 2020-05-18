import React, {useState} from 'react';

import "./style.css"

export default function Number_Row (props) {

  const [width,setWidth] = useState(window.innerWidth)

  window.onresize = function(event) {
    setWidth(window.innerWidth)
  };

  var limit_number = Math.ceil(window.innerHeight / 10)
  var list = [];
  var flag = false

  for (var i = 1; i < limit_number +1; i++) {
      if (props.statusHide === true && i >3 && flag === false) {
        limit_number= limit_number+25;
        i=i+25;
        flag = true
      }
      list.push(i.toString());
  }

  if (props.notShow !== true || width>760) {
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
  } else {
    return null
  }
}