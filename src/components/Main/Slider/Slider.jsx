import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import BackgroundSliderImage from '../../../images/sliderimg.png'
import './Slider.css'

const DemoCarousel = () => {
    
        return (
            <Carousel>
                <div>
                    <img src={BackgroundSliderImage} className='carousel-image'/>
                    <div className="carousel__inner">
                        <p className="carousel__text">Высокоточное изготовление изделий из металла по чертежам</p>
                    </div>
                </div>
                <div>
                    <img src={BackgroundSliderImage} />
                    <div className="carousel__inner">
                        <p className="carousel__text">Высокоточное изготовление изделий из металла по чертежам</p>
                    </div>
                </div>
                <div>
                    <img src={BackgroundSliderImage} />
                    <div className="carousel__inner">
                        <p className="carousel__text">Высокоточное изготовление изделий из металла по чертежам</p>
                    </div>
                </div>
            </Carousel>
        );
    
};


export default DemoCarousel;