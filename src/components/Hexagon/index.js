import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'

const Hexagon = props => {
    const styles = {
        importedColor: {
            backgroundColor: props.background
        },
        importedTextColor: {
            color: props.textColor
        }
    };
    let content;
    if (props.link === '/') {
        content = <div className="hexagonContainer">
            <div className="outerHexagonMask">
                <div className="innerHexagonMask" style={styles.importedColor}>
                </div>
            </div>
        </div>
    } else {
        content =  <div className="hexagonContainer">
            <div className="outerHexagonMask">
                <div className="innerHexagonMask" style={styles.importedColor}>
                    <Link to={props.link} id={props.id} className="hexChild" style={styles.importedTextColor}>
                        <h3 className="hexTitle" style={styles.importedTextColor}>
                            {props.title}
                        </h3>
                        <h4 className="hexTech" style={styles.importedTextColor}>{props.technologies}</h4>
                        <div className="hexImageContainer">
                            <img className="hexImage" src={props.imageSrc} alt={props.imageAlt}/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    }
    return (
        <>
            {content}
        </>
    )
};

export default Hexagon;