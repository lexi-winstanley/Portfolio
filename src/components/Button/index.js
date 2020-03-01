import React from 'react';
import './style.css';

const Button = props => {
    let buttonClass;
    props.extraClass ? buttonClass = 'coloredButton' : buttonClass = 'coloredButton ' + props.extraClass;
    const styles = {
        importedColor: {
            backgroundColor: props.backgroundColor,
            color: props.textColor
        }
    };
    return (
        <button id={props.id} style={styles.importedColor} className={buttonClass} onClick={() => props.onClickFunction(props.id)}>
            {props.children}
        </button>
    )
};

export default Button;