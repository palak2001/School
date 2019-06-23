import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './contact.js';
import Faculty from './faculty.js';
import Facility from './facility.js';
import './stylesheet.css';

class Navbar extends Component{
    render()
    {
        return(
            <div >
                <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark navclass">
                    <a href="#" className="navbar-brand">
                        <img src="images/logo.svg" height="28" alt="Schoolname" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navcontent" aria-controls="navcontent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navcontent">
                        <div className="navbar-nav">
                            <Link to="/">
                                <span className="nav-item nav-link active ">Home</span>
                            </Link>
                            <Link to="/admission">
                                <span className="nav-item nav-link ">Admission</span>
                            </Link>
                            <Link to="/faculty">
                                <span className="nav-item nav-link ">Faculty</span>
                            </Link>
                            <Link to="/events">
                                <span className="nav-item nav-link ">Events</span>
                            </Link>
                            <Link to="/facility">
                                <span className="nav-item nav-link ">Facility</span>
                            </Link>
                            <Link to="/contact">
                                <span className="nav-item nav-link ">Contact Us</span>
                            </Link>
                            <Link to="/results">
                                <span className="nav-item nav-link " tabindex="-1">Results</span>
                            </Link>
                        </div>
                        <div className="navbar-nav ml-auto">
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                                <button className="btn-default my-2 my-sm-0" type="submit">Search</button>
                            </form>
                            <a href="#" className="nav-item nav-link">Login</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
