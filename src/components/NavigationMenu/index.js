import React from 'react';
import './style.css';
import MenuItem from '../MenuItem';
import Logo from '../Logo';

const NavigationMenu = props => {
    return (
        <ul className="navigationMenu">
            <Logo/>
            <MenuItem linkTitle='Home' linkPath='/'/>
            <MenuItem linkTitle='About' linkPath='/about'/>
            <MenuItem linkTitle='Work' linkPath='/work'/>
            <MenuItem linkTitle='Contact' linkPath='/contact'/>
            {props.children}
        </ul>
    )
};

export default NavigationMenu;