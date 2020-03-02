import React from 'react';
import './style.css';

const Button = props => {
    let buttonClass = props.extraClass ?  'coloredButton ' + props.extraClass : 'coloredButton' ;
    const styles = {
        importedColor: {
            backgroundColor: props.backgroundColor,
            color: props.textColor
        }
    };
    return (
        props.onClickFunction === 'none' ? <button id={props.id} style={styles.importedColor} className={buttonClass}>
                {props.children}
            </button>
       : <button id={props.id} style={styles.importedColor} className={buttonClass} onClick={() => props.onClickFunction(props.id)}>
            {props.children}
        </button>
    )
};

export default Button;