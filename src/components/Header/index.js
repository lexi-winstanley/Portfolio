import React from 'react';
import './style.css';
import NavigationMenu from '../NavigationMenu';

const Header = props => {
    return (
        <div className="header">
            <p>Header</p>
            <NavigationMenu/>
            {props.children}
        </div>
    )
};

export default Header;