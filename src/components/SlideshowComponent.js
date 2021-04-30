import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Slider extends Component {
    render() {
        return (
            <Carousel className="slider-body">
                <div>
                    <img src="assets/Dominion.jpg" />
                    <p className="legend">Top Games</p>
                </div>
                <div>
                    <img src="assets/michal-parzuchowski-geNNFqfvw48-unsplash.jpg" />
                    <p className="legend">New Releases</p>
                </div>
                <div>
                    <img src="assets/chess.jpg" />
                    <p className="legend">Check out our community</p>
                </div>
            </Carousel>
        );
    }
};



export default Slider;