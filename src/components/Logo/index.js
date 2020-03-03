import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

const Logo = props => {
    return (
        <Link to='/' className="imageLink">
            <div className="logoContainer">
                <img className="navigationLogo" src="images/logoThin.svg" alt="logo showing black capital 'L' and 'W' inside square with thin black border"/>
            </div>
        </Link>

    )
};

export default Logo;