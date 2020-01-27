import React from 'react';
import './style.css';

const MobileScreenshot = props => {
    return (
        <div className="screenshotContainer">
            <div className="imagesContainer">
                <img className="mobileBack" src={props.mobileSrc} alt="mobile phone graphic"/>
                <div className="mobileScreen">
                    <img className="screenshot" src={props.mobileScreenshotSrc} alt={props.mobileScreenshotAlt}/>
                </div>
            </div>
        </div>
    )
};

export default MobileScreenshot;