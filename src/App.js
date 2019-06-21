import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js';
import Main from './components/main.js';
import Facility from './components/facility.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component
{
  render(){
    return(
      <Router>
      <div>
        <div>
          <Navbar>
          <Route path="/facility" component={Facility} />
          </Navbar>
        </div>
        <div class="container" ><Main></Main></div>
      </div>
      </Router>
    )
  }
}

export default App;
