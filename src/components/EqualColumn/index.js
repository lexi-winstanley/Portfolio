import React from 'react';
import './style.css';

const EqualColumn = props => {
    return (
        <div className="equalColumn">{props.children}</div>
    )
};

export default EqualColumn;