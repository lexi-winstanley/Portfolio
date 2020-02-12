import React from 'react';
import './style.css';

const PageContentWrapper = props => {
    return (
        <div className="pageContentContainer">
            {props.children}
        </div>
    )
};

export default PageContentWrapper;