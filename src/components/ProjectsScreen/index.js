import React from 'react';
import './style.css';
import projectList from '../../constants/projects';
import ProjectInfo from "../ProjectInfo";

const ProjectsScreen = props => {
    let content = projectList.projects.map(project => (
        <ProjectInfo
            id={project.id}
            key={project.id}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            background={project.background}
            textColor={project.textColor}
            title={project.title}
            description={project.description}
            technicalInfo={project.technicalInfo}
            technologies={project.technologies}
            githubLink={project.githubLink}
            projectLink={project.projectLink}
            mobileSrc={project.mobileBackgroundSrc}
            mobileScreenshotSrc={project.mobileScreenshot}
            mobileScreenshotAlt={project.mobileScreenshotAlt}
            desktopSrc={project.desktopBackgroundSrc}
            desktopScreenshotSrc={project.desktopScreenshot}
            desktopScreenshotAlt={project.desktopScreenshotAlt}
        />
    ));
    return (
        <div className="contentWrapper">
            {content}
        </div>
    )
};

export default ProjectsScreen;