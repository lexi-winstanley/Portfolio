import React, {useState, useEffect} from 'react';
import './style.css';
import projectList from '../../constants/projects';
import ProjectInfo from '../ProjectInfo';
import Header from '../Header';
import PageContentWrapper from '../PageContentWrapper';

const ProjectsScreen = props => {
    const [filter, setFilter] = useState('all');
    const [content, setContent] = useState();
    const filterButtonAction = (newFilter) => {
        setFilter(newFilter);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        if (filter === 'all') {
             setContent(projectList.projects.map(project => (
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
                    videoSrc={project.videoSrc}
                />
            )));
        } else {
            let filteredProjects = projectList.projects.filter(project => project[filter] === true);
            console.log(filteredProjects);
            setContent(filteredProjects.map(project => (
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
                    videoSrc={project.videoSrc}
                />
            )));
        }
    }, [filter]);

    return (
        <>
        <Header buttonsVisible={true} onFilterButton={filterButtonAction}/>
        <PageContentWrapper extraPadding={true} backgroundColor="#cbc5ef" textColor="#0F0F0D">
            <h1 className="pageTitle mainHorizontalPadding" style={{backgroundColor: '#cbc5ef', color: '#0F0F0D'}}>My Projects</h1>
            <p className="projectsIntroParagraph mainHorizontalPadding">Motivated to identify and implement the best technologies to meet requirements and exceed expectations, I have honed strong skills in HTML, CSS and JavaScript and am passionate about exploring new technologies and approaches in order to deliver optimum results. True desire to ensure positive experiences for all members of the development team including the client.</p>
            {content}
        </PageContentWrapper>
        </>
    )
};

export default ProjectsScreen;


// javascript={project.javascript}
// node={project.node}
// jQuery={project.jQuery}
// react={project.react}
// reactNative={project.reactNative}
// mySQL={project.mySQL}
// mongo={project.mongo}
// firebase={project.firebase}
// customGraphics={project.customGraphics}
// userAuth={project.userAuth}
// api={project.api}
// all={true}
// filter={filter}