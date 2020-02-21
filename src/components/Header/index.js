import React from 'react';
import './style.css';
import Logo from '../Logo';
import NavigationMenu from '../NavigationMenu';
import Button from '../Button';
import {Link} from 'react-router-dom';

const Header = props => {
    const introVisible = props.introVisible;
    return (
        <div className="header">
            <div className="menuContainer">
                <Logo/>
                <NavigationMenu/>
                <div className="resumeButton">
                    <Button buttonName="Resume" backgroundColor="#0F0F0D" textColor="#f8f7f7">
                        <Link to="/files/LexiWinstanley_Resume.pdf" target="_blank">Resume</Link>
                    </Button>.
                </div>
            </div>
            {introVisible === false ? <></> : <div className="introContainer">
                <h2 className="textTitle">Lexi Winstanley: detail-oriented Front End Web Developer known for delivering responsive, cross browser compatible applications that balance performance and design with overall user experience. Certificate in Full Stack Web Development from the University of Washington and strong skills in HTML, CSS and JavaScript.</h2>
            </div>}

        </div>
    )
};

export default Header;