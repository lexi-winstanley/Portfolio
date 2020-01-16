import React from 'react';
import './style.css';
import FlexColumnContainer from '../FlexColumnContainer';
import EqualColumn from '../EqualColumn';
import {Link, useParams} from 'react-router-dom';
import projectList from '../../constants/projects';

const PageInfoSection = props => {

        return (
            <div className="pageContainer">
                <h1 className="pageTitle">{props.pageTitle}</h1>
                <FlexColumnContainer>
                    <EqualColumn>
                        <p>{props.pageInfo}</p>
                    </EqualColumn>
                </FlexColumnContainer>
            </div>
        );
    };

export default PageInfoSection;