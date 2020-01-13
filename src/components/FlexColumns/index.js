import React from 'react';
import './style.css';

const FlexColumn = props => {
    return (
        <>
        <div className="flexColumnLeft">{props.children[0]}</div>
        <div className="flexColumnRight">{props.children[1]}</div>
        </>
    )
};

export default FlexColumn;