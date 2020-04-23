import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import "./style.css"
import Welcome from './components/Welcome/index'
import Navbar from './components/Navbar/index'


export default function App() {
  return (
    <div id='main'>
      <BrowserRouter>
        <Route exact path="/" component={Welcome}/>
      </BrowserRouter>
      <Navbar />
    </div>
  );
}
