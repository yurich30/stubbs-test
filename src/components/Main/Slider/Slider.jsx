import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './Slider.css'
import SliderItem from './SliderItem/SliderItem';

const DemoCarousel = () => {
    
    const getConfigurableProps = () => ({
        showArrows: false,
        showStatus: false,
        showIndicators: true,
        infiniteLoop: false,
        showThumbs: false,
        useKeyboardArrows: true,
        autoPlay: false,
        stopOnHover: false,
        swipeable: true,
        dynamicHeight: false,
        emulateTouch: true
    });

    const CarouselItems = [
        {img: './images/sliderimg.png', description: 'Высокоточное изготовление изделий из металла по чертежам'},
        {img: './images/sliderimg.png', description: 'Высокоточное изготовление изделий из металла по чертежам'},
        {img: './images/sliderimg.png', description: 'Высокоточное изготовление изделий из металла по чертежам'},
        {img: './images/sliderimg.png', description: 'Высокоточное изготовление изделий из металла по чертежам'}
    ];

    const CarouselItem = CarouselItems.map((slide) =>  <SliderItem description={slide.description} image={slide.img}/>)

    

        return (
            <Carousel {...getConfigurableProps()}>
                {CarouselItem}
            </Carousel>
        );
    
};


export default DemoCarousel;