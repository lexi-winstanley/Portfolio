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
        <button style={styles.importedColor} className="coloredButton">
            {props.children}
        </button>
    )
};

export default Button;