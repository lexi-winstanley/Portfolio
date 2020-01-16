import React from 'react';
import './style.css';
import MenuItem from '../MenuItem';

const NavigationMenu = props => {
    return (
        <ul className="navigationMenu">
            <MenuItem linkTitle='Home' linkPath='/'/>
            <MenuItem linkTitle='About' linkPath='/about'/>
            <MenuItem linkTitle='Projects' linkPath='/projects'/>
            <MenuItem linkTitle='Contact' linkPath='/contact'/>
            {props.children}
        </ul>
    )
};

export default NavigationMenu;