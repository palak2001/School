import React from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar.js';
import Main from './components/main.js';
import Admission from './components/admission.js';
import Faculty from './components/faculty.js';
import Events from './components/events.js';
import Facility from './components/facility.js';
import Contact from './components/contact.js';
import './components/stylesheet.css';
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';

class App extends React.Component
{
  render(){
    return(
      <Router>
      <div>
        <div>

            <Route path="/" exact component={withRouter(Navbar)} />
            <Route path="/admission" component={withRouter(Admission)} />
            <Route path="/faculty" component={withRouter(Faculty)} />
            <Route path="/events" component={withRouter(Events)} />
            <Route path="/facility" component={withRouter(Facility)} />
            <Route path="/contact" component={withRouter(Contact)} />
        
        </div>
        <div class="container" ><Main></Main></div>
      </div>
      </Router>
    )
  }
}

export default App;
