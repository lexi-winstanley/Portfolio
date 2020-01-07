import React from 'react';
import './style.css';

const FlexContainer = props => {
    return (
        <div className="flexContainer">{props.children}</div>
    )
};

export default FlexContainer;