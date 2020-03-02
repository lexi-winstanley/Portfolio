import React, {useState} from 'react';
import './style.css';

const FullPageIntro = props => {
    const [opacityClasses, setOpacityClasses] = useState('introFullContainer');
    const [buttonClasses, setButtonClasses] = useState('coloredButton bounce');
    const changeIntroVisible = () => {
        props.changeIntro(false);
    };
    const fadeFromView = (event) => {
        event.preventDefault();
        setButtonClasses('coloredButton bounce visibilityHidden');
        setOpacityClasses('introFullContainer startFade');
        setTimeout(changeIntroVisible, 2000);
    };

       return (
           props.introVisible === true ?
           <div className={opacityClasses}>
            <h2 className="textTitleCentered"> Hi, I'm Lexi, a detail-oriented Front End Web Developer known for delivering responsive, cross browser compatible applications that balance performance and design with overall user experience. Certificate in Full Stack Web Development from the University of Washington and strong skills in HTML, CSS and JavaScript.</h2>
               <div id="hoverEffect">
               <button style={{backgroundColor: "#0F0F0D", color: "#f8f7f7"}} className={buttonClasses} onClick={fadeFromView}>
                   Enter Site
               </button>
               </div>
        </div> : <></>

       )
};

export default FullPageIntro;