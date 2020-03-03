import React from 'react';
import './style.css';

const ExperienceSection = props => {
    const styles = {
        importedColor: {
            backgroundColor: props.backgroundColor,
            color: props.textColor
        }
    };
    let responsibilityHeader = <></>;
    let responsibilities;
    if (props.responsibilities.length > 0) {
        responsibilityHeader = <h4 style={styles.importedColor} className="mainHorizontalPadding">Responsibilities</h4>;
        responsibilities = props.responsibilities.map(responsibility => (
            <li style={styles.importedColor}>{responsibility}</li>
        ));
    }
    let skillsHeader = <></>;
    let skills;
    if (props.skills.length > 0) {
        skillsHeader = <h4 style={styles.importedColor} className="mainHorizontalPadding">Skills</h4>
        skills = props.skills.map(skill => (
            <li style={styles.importedColor}>{skill}</li>
        ));
    }
    return (
        <div className="experienceSection mainHorizontalPadding" style={styles.importedColor}>
            <h2 style={styles.importedColor}>{props.role}</h2>
            <h3 style={styles.importedColor} className="mainHorizontalPadding">{props.business} &middot; {props.location}</h3>
            <h3 style={styles.importedColor} className="mainHorizontalPadding">{props.duration}</h3>
            {responsibilityHeader}
            <ul className="experienceList" style={styles.importedColor}>{responsibilities}</ul>
            {skillsHeader}
            <ul className="experienceList" style={styles.importedColor}>{skills}</ul>
        </div>
    )
};

export default ExperienceSection;