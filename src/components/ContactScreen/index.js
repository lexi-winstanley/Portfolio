import React from 'react';
import './style.css';
import Header from '../Header';
import PageContentWrapper from "../PageContentWrapper";
import {Link} from "react-router-dom";
import FlexColumnContainer from '../FlexColumnContainer';
import EqualColumn from '../EqualColumn';
import ContactForm from '../ContactForm'

const ContactScreen = props => {
    return (
        <>
        <Header/>
        <PageContentWrapper backgroundColor="#0cb2ba" textColor="#f8f7f7">
            <h1 className="pageTitle" style={{backgroundColor: '#0cb2ba', color: '#f8f7f7'}}>Let's Connect</h1>
            <FlexColumnContainer>
                <EqualColumn>

                </EqualColumn>
                <EqualColumn>
                    <ContactForm/>
                </EqualColumn>
            </FlexColumnContainer>

            <h2 className="contactInfo"><a href="mailto:lexi@lexiwinstanley.com">lexi@lexiwinstanley.com</a></h2>
            <h2 className="contactInfo"><a href="tel:425-877-0658">(425) 877-0658</a></h2>
            <ul className="contactLinksList">
                <li><a href="https://github.com/lexi-winstanley">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/lexi-winstanley/">LinkedIn</a></li>
                <li><Link to="/files/LexiWinstanley_Resume.pdf" target="_blank">R&#233;sum&#233;</Link></li>
            </ul>
        </PageContentWrapper>
        </>
    )
};

export default ContactScreen;