import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './bgcontact.jpg';
import './facility.css';

class Facility extends Component
{
    render()
    {
        return(
            <div >
                <img src="./bgcontact.jpg" className="img-responsive apt" />
                <div className="contactjumbo">
                    <h1>Facilities</h1>
                    <h4>one</h4>
                    <h4>two</h4>
                    <h4>three</h4>
                </div>
            </div>
        )
    };
}

export default Facility