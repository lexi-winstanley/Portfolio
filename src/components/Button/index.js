import React from 'react';
import './style.css';

const Button = props => {
    console.log(props.onClickFunction);
    const styles = {
        importedColor: {
            backgroundColor: props.backgroundColor,
            color: props.textColor
        }
    };
    return (
        <button style={styles.importedColor} className="coloredButton" onClick={() => props.onClickFunction}>
            {props.children}
        </button>
    )
};

export default Button;