import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js';
import Main from './components/main.js';
import Contact from './components/contact.js';

class App extends React.Component
{
  render(){
    return(
      <div>
        <div><Navbar></Navbar></div>
        <div class="container" ><Main></Main></div>
      </div>
    )
  }
}

export default App;
