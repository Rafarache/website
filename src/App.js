import React, {useState} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import "./style.css"

import Welcome from './components/Welcome/index'
import Portifolio from './components/Portifolio/index'
import Navbar from './components/Navbar/index'
import About from './components/About/index'


export default function App() {

  const [page, setPage] = useState(0);

  const setPageHandler = (num) => {
    setPage(num)
  }

  if (page === 0)
  return (
    <div class='main'>
        <Welcome />
        <Navbar setPage={setPageHandler} />
    </div>
  );

  if (page === 1)
  return (
    <div class='main'>
        <Portifolio />
        <Navbar setPage={setPageHandler}/>
    </div>
  );

  if (page === 2)
  return (
    <div class='main'>
        <About />
        <Navbar setPage={setPageHandler}/>
    </div>
  );
}
