import React from 'react';
import './style.css';

const ButtonContainer = props => {
    return (
        <div className="buttonContainer">{props.children}</div>
    )
};

export default ButtonContainer;