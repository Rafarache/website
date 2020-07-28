import React, {useState} from 'react';

import "./style.css"

export default function Number_Row (props) {

  const [width,setWidth] = useState(window.innerWidth)
  const [height,setHeight] = useState(window.innerHeight)

  window.onresize = function(event) {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    console.log(Math.ceil(height / 14))
  };

  var limit_number = Math.ceil(height / 14)
  let list = [];
  var flag = false

  for (var i = 1; i < limit_number +1; i++) {
      if (props.statusHide === true && flag === false) {
        limit_number= limit_number + 25;
        i=i+25;
        flag = true
        console.log(i,limit_number)
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