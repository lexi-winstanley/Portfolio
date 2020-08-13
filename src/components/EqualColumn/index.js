import React from 'react';
import './style.css';

const EqualColumn = props => {
    let extraClass = props.columnClass ?  props.columnClass + ' equalColumn ' : 'equalColumn' ;
    return (
        <div className={extraClass} style={props.importStyle}>{props.children}</div>
    )
};

export default EqualColumn;