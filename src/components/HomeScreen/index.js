import React, { Component } from 'react';
import './style.css';
import Header from '../Header';
import FlexContainer from '../FlexContainer';
import HexagonGrid from '../HexagonGrid';
import FullPageIntro from '../FullPageIntro';

const HomeScreen = props => {
        return (
            <>
                <FullPageIntro/>
                <Header/>
                <FlexContainer>
                    <HexagonGrid/>
                </FlexContainer>
            </>
        );
    };

export default HomeScreen;