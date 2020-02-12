import React from 'react';
import './style.css';
import FlexColumnContainer from '../FlexColumnContainer';
import EqualColumn from '../EqualColumn';

const PageIntroSection = props => {

        return (
            <>
                <h1 className="pageTitle">{props.pageTitle}</h1>
                <FlexColumnContainer>
                    <EqualColumn>
                        <p>{props.pageInfo}</p>
                    </EqualColumn>
                </FlexColumnContainer>
            </>
        );
    };

export default PageIntroSection;