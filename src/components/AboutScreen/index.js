import React from 'react';
import './style.css';
import PageContentWrapper from '../PageContentWrapper'
import PageIntroSection from '../PageIntroSection';
import Header from '../Header';

const AboutScreen = props => {
    return (
        <>
        <Header introVisible={false}/>
        <PageContentWrapper>
        <PageIntroSection pageTitle='Lexi Winstanley' pageInfo='Motivated and energetic Front End Web Developer with Certificate in Full Stack Web Development from University of Washington Professional & Continuing Education, strong skills in HTML, CSS and JavaScript and additional experience with React, React Native, MySQL and MongoDB. Leveraging creative problem solving, productive collaboration and a passion for accessibility gained from a background in health care to create impactful web experiences for all users. Detail-oriented individual known for delivering responsive, cross browser compatible applications that balance performance and design with overall user experience. Recognized in collaborative settings as a creative, hardworking teammate motivated to meet all deliverables and requirements while ensuring a positive experience for others. '/>
        </PageContentWrapper>
        </>
    )
};

export default AboutScreen;