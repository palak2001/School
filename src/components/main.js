import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gallery from './carousel';

class Main extends Component
{
    render()
    {
        return(
            <div>
                <div class="container">
                    <div class="jumbotron">
                        <Gallery></Gallery>
                </div>
                </div>
                <div class="container">
                    <div class="jumbotron">
                    <h1>Message from Principal's Desk</h1>
                    <p>Bla Bla bla....smthing write here....Kids are the future of society and its important to give them best education thus we here present uh...</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;