import React from 'react';
import './style.css';

const Button = props => {
    const styles = {
        importedColor: {
            backgroundColor: props.backgroundColor,
            color: props.textColor
        }
    };
    return (
        <button id={props.id} style={styles.importedColor} className="coloredButton" onClick={() => props.onClickFunction}>
            {props.children}
        </button>
    )
};

export default Button;