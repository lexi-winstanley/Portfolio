import React from 'react';
import './style.css';

const EqualColumn = props => {
    return (
        <div className="equalColumn" style={props.importStyle}>{props.children}</div>
    )
};

export default EqualColumn;