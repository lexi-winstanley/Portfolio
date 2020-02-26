import React from 'react';
import './style.css';
import Header from '../Header';
import FlexContainer from '../FlexContainer';
import HexagonGrid from '../HexagonGrid';

const HomeScreen = props => {
        return (
            <>
                <Header/>
                <FlexContainer>
                    <HexagonGrid/>
                </FlexContainer>
            </>
        );
    };

export default HomeScreen;