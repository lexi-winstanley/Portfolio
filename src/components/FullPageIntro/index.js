import React from 'react';
import './style.css';



const FullPageIntro = props => {
    const headerIntro = props.headerIntro;
    let content;
    if (headerIntro === true) {
       return <></>
    } else {
       return <div className="introFullContainer">
            <h2 className="textTitleCentered"> Hi, I'm Lexi, a detail-oriented Front End Web Developer known for delivering responsive, cross browser compatible applications that balance performance and design with overall user experience. Certificate in Full Stack Web Development from the University of Washington and strong skills in HTML, CSS and JavaScript.</h2>
               <h3 className="scrollLabel">Scroll</h3>
               <div className="scrollArrow"></div>
        </div>
    }
};

export default FullPageIntro;