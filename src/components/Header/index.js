import React from 'react';
import './style.css';
import Logo from '../Logo';
import NavigationMenu from '../NavigationMenu';
import Button from '../Button';
import {Link} from 'react-router-dom';

const Header = props => {
    return (
        <div className="header">
            <div className="menuContainer">
                <Logo/>
                <NavigationMenu/>
                <div className="resumeButton">
                    <Button backgroundColor="#0F0F0D" textColor="#f8f7f7">
                        <Link to="/files/LexiWinstanley_Resume.pdf" target="_blank">R&#201;sum&#201;</Link>
                    </Button>.
                </div>
            </div>
        </div>
    )
};

export default Header;