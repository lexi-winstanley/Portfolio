import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const MenuItem = props => {
    return (
        <li className="menuItem"><Link to={props.linkPath}>{props.linkTitle}</Link></li>
    )
};

export default MenuItem;