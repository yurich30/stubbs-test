import React from 'react'
import BackgroundSliderImage from '../../../../images/sliderimg.png'
import '../Slider.css'

const SliderItem = (props) => {
    return(
        <div>
            <img src={props.img} className='carousel-image'/>
            <div className="container">
                <div className="carousel__inner">
                    <p className="carousel__text">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default SliderItem