import React from 'react';
import './style.css';

const ExperienceSection = props => {
    let responsibilities = props.responsibilities.map(responsibility => (
        <li>{responsibility}</li>
    ));
    let skills = props.skills.map(skill => (
        <li>{skill}</li>
    ));
    return (
        <div className="experienceSection">
            <h2>{props.role}</h2>
            <h3>{props.business} &middot; {props.location}</h3>
            <h3>{props.duration}</h3>
            <h4>Responsibilities</h4>
            <ul className="experienceList">{responsibilities}</ul>
            <h4>Highlighted Skills</h4>
            <ul className="experienceList">{skills}</ul>
        </div>
    )
};

export default ExperienceSection;