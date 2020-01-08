import React from 'react';
import './style.css';

const ResumeInfoBar = props => {
    return (
        <div className="resumeInfoContainer">{props.children}</div>
    )
};

export default ResumeInfoBar;