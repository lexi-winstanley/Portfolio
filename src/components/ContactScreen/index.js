import React from 'react';
import './style.css';
import Header from '../Header';
import PageContentWrapper from "../PageContentWrapper";

const ContactScreen = props => {
    return (
        <>
        <Header/>
        <PageContentWrapper backgroundColor="#0cb2ba" textColor="#f8f7f7">
            <h1 className="pageTitle" style={{backgroundColor: '#0cb2ba', color: '#f8f7f7'}}>Let's Connect</h1>
        </PageContentWrapper>
        </>
    )
};

export default ContactScreen;