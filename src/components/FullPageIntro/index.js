import React from 'react';
import './style.css';



const FullPageIntro = props => {
    const invisibleIntro = props.invisibleIntro;
    const styles = {
        importedOpacity: {
            opacity: props.opacity
        }
    };
    if (invisibleIntro === true) {
       return <></>
    } else {
       return <div className="introFullContainer" style={styles.importedOpacity}>
            <h2 className="textTitleCentered"> Hi, I'm Lexi, a detail-oriented Front End Web Developer known for delivering responsive, cross browser compatible applications that balance performance and design with overall user experience. Certificate in Full Stack Web Development from the University of Washington and strong skills in HTML, CSS and JavaScript.</h2>
               <h3 className="scrollLabel">Scroll</h3>
               <div className="scrollArrow"></div>
        </div>
    }
};

export default FullPageIntro;