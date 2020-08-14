import React from 'react';
import './style.css';
import Header from '../Header';
import FlexColumnContainer from '../FlexColumnContainer';
import EqualColumn from '../EqualColumn';
import {Link, useParams} from 'react-router-dom';
import projectList from '../../constants/projects';
import ProjectInfo from "../ProjectInfo";

const findProject = (project) => {
    let desiredProject = '/' + project.toLowerCase();
    for (let i = 0; i < projectList.projects.length; i++) {
        console.log(projectList.projects[i]);
        if (desiredProject === projectList.projects[i].path) {
            return projectList.projects[i];
        }
    }
};

const ProjectPage = props => {
    const { project } = useParams();
    const currentProject = findProject(project);
    const styles = {
        importedColor: {
            backgroundColor: currentProject.background
        },
        importedTextColor: {
            color: currentProject.textColor
        },
        importedButtonColors: {
            backgroundColor: currentProject.textColor,
            color: currentProject.background
        },
        importedArrowColors: {
            borderRightColor: currentProject.textColor,
        },
        importedColorChangePadding: {
            backgroundColor: currentProject.background,
            paddingBottom: 0
        }
    };

        return (
            <>
            <Header/>
            <div className="pageContainer mainHorizontalPadding" style={styles.importedColorChangePadding}>
                <div className="pageBannerArrow" >
                    <Link to='/' className="closeButton">
                        <div className="arrowBack" style={styles.importedArrowColors}></div>
                        <div className="arrowText" style={styles.importedButtonColors}>Back</div>
                    </Link>
                    <h1 className="projectTitle" style={styles.importedTextColor}>{currentProject.title}</h1>
                </div>
                <ProjectInfo
                    id={currentProject.id}
                    key={currentProject.id}
                    imageSrc={currentProject.imageSrc}
                    imageAlt={currentProject.imageAlt}
                    background={currentProject.background}
                    textColor={currentProject.textColor}
                    title={currentProject.title}
                    description={currentProject.description}
                    technicalInfo={currentProject.technicalInfo}
                    technologies={currentProject.technologies}
                    githubLink={currentProject.githubLink}
                    projectLink={currentProject.projectLink}
                    mobileSrc={currentProject.mobileBackgroundSrc}
                    mobileScreenshotSrc={currentProject.mobileScreenshot}
                    mobileScreenshotAlt={currentProject.mobileScreenshotAlt}
                    desktopSrc={currentProject.desktopBackgroundSrc}
                    desktopScreenshotSrc={currentProject.desktopScreenshot}
                    desktopScreenshotAlt={currentProject.desktopScreenshotAlt}
                    videoSrc={currentProject.videoSrc}
                    arrowTitle={true}
                />
                {/*<FlexColumnContainer>*/}
                    {/*<EqualColumn>*/}
                        {/*<h2 className="projectSubheading" style={styles.importedTextColor}>Description: </h2>*/}
                        {/*<p className="projectText" style={styles.importedTextColor}>{currentProject.description}</p>*/}
                        {/*<h2 className="projectSubheading" style={styles.importedTextColor}>Technical Information: </h2>*/}
                        {/*<p className="projectText" style={styles.importedTextColor}>{currentProject.organization}</p>*/}
                        {/*<h2 className="projectSubheading" style={styles.importedTextColor}>Technologies: </h2>*/}
                        {/*<p className="projectText" style={styles.importedTextColor}>{currentProject.technologies}</p>*/}
                        {/*<h2 className="projectExternalLink" style={styles.importedTextColor}><a href={currentProject.githubLink} style={styles.importedTextColor}>Github Repository</a></h2>*/}
                        {/*<h2 className="projectExternalLink" style={styles.importedTextColor}><a href={currentProject.projectLink} style={styles.importedTextColor}>Live Project</a></h2>*/}
                    {/*</EqualColumn>*/}
                    {/*<EqualColumn>*/}
                        {/*<div className="projectImageContainer">*/}
                            {/*<img className="projectImage" src={currentProject.imageSrc} alt={currentProject.imageAlt}/>*/}
                        {/*</div>*/}
                    {/*</EqualColumn>*/}
                {/*</FlexColumnContainer>*/}
            </div>
            </>
        );
    };

export default ProjectPage;