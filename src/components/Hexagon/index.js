import React from 'react';
import './style.css';

const Hexagon = props => {
    const color = props.background;
    const styles = {
        importedColor: {
            background: color
        }
    };
    return (
        <div className="hexagonContainer">
            <div className="outerHexagonMask">
                <div className="innerHexagonMask" style={styles.importedColor}>
                    <div id={props.id} className="hexChild">
                        <h3>{props.title}</h3>
                        <img src={props.imageSrc} alt={props.imageAlt}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Hexagon;