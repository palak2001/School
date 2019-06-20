import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './contact.js';
import Faculty from './faculty.js';
import Facility from './facility.js';

class Navbar extends Component{
    render()
    {
        return(
            <Router>
            <div >
                <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
                    <a href="#" class="navbar-brand">
                        <img src="images/logo.svg" height="28" alt="Schoolname" />
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navcontent" aria-controls="navcontent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navcontent">
                        <div class="navbar-nav">
                            <a href="../..App.js" class="nav-item nav-link active">Home</a>
                            <a href="#" class="nav-item nav-link">Admission</a>
                            <a href="./faculty.js" class="nav-item nav-link">Faculty</a>
                            <a href="#" class="nav-item nav-link">Events</a>
                            <Route path="/facility" component={Facility} />
                            <a href="./facility.js" class="nav-item nav-link">Facilities</a>
                            <a href="./contact.js" class="nav-item nav-link">Contact Us</a>
                            <a href="#" class="nav-item nav-link disabled" tabindex="-1">Results</a>
                        </div>
                        <div class="navbar-nav ml-auto">
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" />
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                            <a href="#" class="nav-item nav-link">Login</a>
                        </div>
                    </div>
                </nav>
            </div>
            </Router>
        )
    }
}

export default Navbar