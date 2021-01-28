import React from 'react'
import './Services.css'
import ServiceItem1 from '../../../images/service-item-1.png'

const Services = () => {
    return(
        <div className="services">
            <div className="services__wrapper">
                <div className="services__inner">
                    <div className="container">
                        <div className="services__title">
                            <h2>Услуги</h2>
                        </div>
                        <div className="services__list">
                            <div className="services__item">
                                <img src={ServiceItem1} alt=""/>
                            </div>
                            <div className="services__item"></div>
                            <div className="services__item"></div>
                            <div className="services__item"></div>
                            <div className="services__item"></div>
                            <div className="services__item"></div>
                            <div className="services__item"></div>
                            <div className="services__item"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services