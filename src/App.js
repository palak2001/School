import React from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar.js';
import Main from './components/main.js';
import Admission from './components/admission.js';
import Faculty from './components/faculty.js';
import Events from './components/events.js';
import Facility from './components/facility.js';
import Contact from './components/contact.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component
{
  render(){
    return(
      <Router>
      <div>
        <div>
          <Navbar>
            <Route path="/" exact component={Navbar} />
            <Route path="/admission" component={Admission} />
            <Route path="/faculty" component={Faculty} />
            <Route path="/events" component={Events} />
            <Route path="/facility" component={Facility} />
            <Route path="/contact" component={Contact} />
          </Navbar>
        </div>
        <div class="container" ><Main></Main></div>
      </div>
      </Router>
    )
  }
}

export default App;
