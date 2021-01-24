import React from 'react'
import Logo from '../../images/logo.png'
import Search from '../../images/search.png'
import Russia from '../../images/russia.png'
import iconSet from "../../images/icomoon-v1.0/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import './Header.css';

const Header = () => {
    return(
        <div className="container">
            <div className="header__wrapper">
                <div className="header__logo">
                    <img src={Logo} alt=""/>
                </div>
                <div className="header__menu">
                    <div className="header__menu-item">
                        <div className="link">
                        Главная
                        </div>
                    </div>
                    <div className="header__menu-item">
                        <div className="link">
                            Услуги
                            <IcomoonReact iconSet={iconSet} color="#E4B56B" size={18} icon="chevron-down" className="chevron-down"/>
                        </div>
                    </div>
                    <div className="header__menu-item">
                        <div className="link">
                            Наши работы
                        </div>
                    </div>
                    <div className="header__menu-item">
                        <div className="link">
                            О нас
                        </div>
                    </div>
                    <div className="header__menu-item">
                        <div className="link">
                            Контакты
                        </div>
                    </div>
                </div>
                <div className="header__search">
                    <div className="search-item">
                        <IcomoonReact iconSet={iconSet} color="#444" size={18} icon="search" />
                    </div>
                    <div className="language-item">
                        <img src={Russia} alt=""/>
                        <IcomoonReact iconSet={iconSet} color="#E4B56B" size={18} icon="chevron-down" className="chevron-down"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

iconList(iconSet)

export default Header