import React from 'react';
import './style.css';
import { Link, useLocation } from 'react-router-dom';


const MenuItem = props => {
    const { pathname } = useLocation();
    let liClass = props.linkPath === pathname ?  'selected' : 'menuItem';
    return (
        <li className={liClass}><Link to={props.linkPath}>{props.linkTitle}</Link></li>
    )
};

export default MenuItem;