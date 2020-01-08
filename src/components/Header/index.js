import React from 'react';
import './style.css';
import NavigationMenu from '../NavigationMenu';

const Header = props => {
    return (
        <div className="header">
            <NavigationMenu/>
        </div>
    )
};

export default Header;