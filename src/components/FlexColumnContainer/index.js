import React from 'react';
import './style.css';

const FlexColumnContainer = props => {
    return (
        <div className="flexColumnContainer">{props.children}</div>
    )
};

export default FlexColumnContainer;