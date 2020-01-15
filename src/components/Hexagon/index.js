import React from 'react';
import './style.css';

const Hexagon = props => {
    const styles = {
        importedColor: {
            backgroundColor: props.background
        },
        importedTextColor: {
            color: props.textColor
        }
    };
    return (
        <div className="hexagonContainer">
            <div className="outerHexagonMask">
                <div className="innerHexagonMask" style={styles.importedColor}>
                    <div id={props.id} className="hexChild">
                        <h3 className="hexTitle" style={styles.importedTextColor}>
                            {props.title}
                        </h3>
                        <div className="hexImageContainer">
                            <img className="hexImage" src={props.imageSrc} alt={props.imageAlt}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Hexagon;