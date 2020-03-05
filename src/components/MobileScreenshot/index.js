import React from 'react';
import './style.css';

const MobileScreenshot = props => {
    return (
        <div className="screenshotContainer">
            <div className="imagesContainer">
                <img className="mobileBack" src={props.mobileSrc} alt="mobile phone graphic"/>
                <div className="mobileScreen">
                    {props.videoSrc ? <video controls>
                        <source src={props.videoSrc}
                                type="video/mp4"/>

                        Sorry, your browser doesn't support embedded videos.
                    </video> : <img className="screenshot" src={props.mobileScreenshotSrc} alt={props.mobileScreenshotAlt}/>}
                </div>
            </div>
        </div>
    )
};

export default MobileScreenshot;
