import React from 'react';
import './style.css';
import Logo from '../Logo';
import NavigationMenu from '../NavigationMenu';

const Header = props => {
    const introVisible = props.introVisible;
    return (
        <div className="header">
            <div className="menuContainer">
                <Logo/>
                <NavigationMenu/>
            </div>
            {introVisible === false ? <></> : <div className="introContainer">
                <h2 className="textTitle">Lexi Winstanley: detail-oriented Front End Web Developer known for delivering responsive, cross browser compatible applications that balance performance and design with overall user experience. Certificate in Full Stack Web Development from the University of Washington and strong skills in HTML, CSS and JavaScript.</h2>
            </div>}

        </div>
    )
};

export default Header;