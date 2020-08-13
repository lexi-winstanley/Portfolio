import React from 'react';
import './style.css';
import Header from '../Header';
import PageContentWrapper from "../PageContentWrapper";
import {Link} from "react-router-dom";
import FlexColumnContainer from '../FlexColumnContainer';
import EqualColumn from '../EqualColumn';
import ContactForm from '../ContactForm';
import Footer from "../Footer";

const ContactScreen = props => {
    return (
        <>
        <Header/>
        <PageContentWrapper backgroundColor="#0cb2ba" textColor="#f8f7f7">
            <h1 className="pageTitle mainHorizontalPadding" style={{backgroundColor: '#0cb2ba', color: '#f8f7f7'}}>Let's Connect</h1>
            <div className="mainHorizontalPadding">
                <FlexColumnContainer>
                <EqualColumn columnClass="resumeColumn">
                    <Link className="contactTitle" to="/files/LexiWinstanley_Resume.pdf" target="_blank" download>
                        <div className="titleBackground">
                            <img id="resumeImg" src="images/LexiWinstanley_ResumeImage.svg" alt="Lexi Winstanley Resume"/>
                    <h2 className="contactTitle">Download R&#201;sum&#201;</h2>

                        </div>
                    </Link>
                </EqualColumn>
                <EqualColumn columnClass="contactColumn">
                    <ContactForm/>
                    <div className="contactDetails">
                        <h2 className="contactInfo"><a href="mailto:lexi@lexiwinstanley.com">lexi@lexiwinstanley.com</a></h2>
                        <ul className="contactLinksList">
                            <li className="contactLink"><a href="https://github.com/lexi-winstanley">GitHub</a></li>
                            <li className="contactLink"><a href="https://www.linkedin.com/in/lexi-winstanley/">LinkedIn</a></li>
                        </ul>
                    </div>
                </EqualColumn>
            </FlexColumnContainer>
            </div>
        </PageContentWrapper>
        <Footer/>
        </>
    )
};

export default ContactScreen;