import React from 'react';
import './style.css';

const MenuItem = props => {
    return (
        <li className="menuItem">{props.linkTitle}</li>
    )
};

export default MenuItem;