import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './stylesheet.css';


class Gallery extends Component {
    render() {
        return (
            <Carousel className="adjust">
                <div>
                    <img src="https://image.shutterstock.com/image-photo/little-child-lying-on-childrens-260nw-174608444.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="http://picpulp.com/wp-content/uploads/2013/06/cute-baby-wallpaper-3.jpg?x11708" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}

export default Gallery;