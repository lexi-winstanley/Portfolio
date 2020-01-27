import React from 'react';
import './style.css';
import Logo from '../Logo';
import NavigationMenu from '../NavigationMenu';
import IntroStatement from '../IntroStatement';

const Header = props => {
    const introVisible = props.introVisible;
    return (
        <div className="header">
            <div className="menuContainer">
                <Logo/>
                <NavigationMenu/>
            </div>
            {introVisible === false ? <></> : <IntroStatement/>}

        </div>
    )
};

export default Header;