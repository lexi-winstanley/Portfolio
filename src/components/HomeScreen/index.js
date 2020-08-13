import React from 'react';
import './style.css';
import Header from '../Header';
import FlexContainer from '../FlexContainer';
import HexagonGrid from '../HexagonGrid';
import Footer from "../Footer";

const HomeScreen = props => {
        return (
            <>
                <Header/>
                <FlexContainer>
                    <HexagonGrid/>
                </FlexContainer>
                <Footer/>
            </>
        );
    };

export default HomeScreen;