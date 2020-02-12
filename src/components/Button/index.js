import React from 'react';
import './style.css';

const Button = props => {
    return (
        <button className="button">{props.buttonName}</button>
    )
};

export default Button;