import React from 'react';
import './style.css';

const DesktopScreenshot = props => {
    return (
        <div className="desktopScreenshotContainer">
            <div className="desktopImagesContainer">
                <img className="desktopBack" src={props.desktopSrc} alt="desktop browser graphic"/>
                <div className="desktopScreen">
                    <img className="screenshot" src={props.desktopScreenshotSrc} alt={props.desktopScreenshotAlt}/>
                </div>
            </div>
        </div>
    )
};

export default DesktopScreenshot;