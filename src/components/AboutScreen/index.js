import React from 'react';
import './style.css';
import PageContentWrapper from '../PageContentWrapper';
import Header from '../Header';
import ExperienceSection from '../ExperienceSection';
import experiences from '../../constants/experiences';

const AboutScreen = props => {
    let content = experiences.experiences.map(experience => (
        <ExperienceSection
            role={experience.role}
            business={experience.business}
            duration={experience.duration}
            location={experience.location}
            responsibilities={experience.responsibilities}
            skills={experience.skills}
            backgroundColor={experience.backgroundColor}
            textColor={experience.textColor}
        />
    ));
    return (
        <>
        <Header/>
        <PageContentWrapper backgroundColor="#680a4d" textColor="#f8f7f7">
            <h1 className="pageTitle" style={{color: '#f8f7f7'}}>Lexi Winstanley</h1>
            <div className="basicInfo">
                <div className="professionalImageContainer">
            <img id="LexiWinstanleyPhoto" src="images/LexiWinstanleyBW.jpg" alt="Photograph of Lexi Winstanley, Front End Web Developer in black and white"/>
                </div>
                <p className="introParagraph">Motivated and energetic Front End Web Developer with <span className="boldTextLight">Certificate in Full Stack Web Development from University of Washington Professional & Continuing Education</span>. Strong skills in HTML, CSS and JavaScript and React. Additional experience with React Native, MySQL and MongoDB. Leveraging creative problem solving, productive collaboration and a passion for accessibility gained from a background in health care to create impactful web experiences for all users. Detail-oriented individual known for delivering responsive, cross browser compatible applications that balance performance and design with overall user experience. Recognized in collaborative settings as a creative, hardworking teammate motivated to meet all deliverables and requirements while ensuring a positive experience for others.</p>
            </div>
            <div className="experiencesContainer">
                {content}
            </div>
        </PageContentWrapper>
        </>
    )
};

export default AboutScreen;