import React from 'react';

import "./style.css"
import Welcome from './components/Welcome/index'
import Navbar from './components/Navbar/index'


export default function App() {
  return (
    <div id='main'>
      <Welcome />
      <Navbar />
    </div>
  );
}
