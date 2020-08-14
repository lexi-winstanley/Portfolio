import React from 'react';
import './style.css';
import FlexColumnContainer from '../FlexColumnContainer';
import EqualColumn from '../EqualColumn';
import MobileScreenshot from '../MobileScreenshot';
import DesktopScreenshot from '../DesktopScreenshot';

const ProjectInfo = props => {
    const styles = {
        importedColor: {
            backgroundColor: props.background
        },
        importedTextColor: {
            color: props.textColor
        }
    };
    let gitHubLinks;
    if (props.githubLink && props.githubLink2) {
        gitHubLinks = <><h2 className="projectExternalLink" style={styles.importedTextColor}><a href={props.githubLink} style={styles.importedTextColor}>GitHub Repository Front End</a></h2><h2 className="projectExternalLink" style={styles.importedTextColor}><a href={props.githubLink2} style={styles.importedTextColor}>GitHub Repository Back End</a></h2></>;
    } else {
        gitHubLinks = <h2 className="projectExternalLink" style={styles.importedTextColor}><a href={props.githubLink} style={styles.importedTextColor}>Github Repository</a></h2>;
    }

        return (
            <div className="projectContainer mainHorizontalPadding" style={styles.importedColor}>
                <div className={props.arrowTitle ? "displayNone" : "pageBanner"} >
                    <h1 className="projectTitle" style={styles.importedTextColor}>{props.title}</h1>
                </div>
                <FlexColumnContainer>
                    <EqualColumn columnClass="projectsEqualColumn">
                        <h2 className="projectSubheading" style={styles.importedTextColor}>Technologies: </h2>
                        <p className="projectText" style={styles.importedTextColor}>{props.technologies}</p>
                        <h2 className="projectSubheading" style={styles.importedTextColor}>Overview: </h2>
                        <p className="projectText" style={styles.importedTextColor}>{props.description}</p>
                        {props.desktopSrc ? <DesktopScreenshot desktopSrc={props.desktopSrc} desktopScreenshotSrc={props.desktopScreenshotSrc} desktopScreenshotAlt={props.desktopScreenshotAlt}/> : <></>}
                        <h2 className="projectSubheading" style={styles.importedTextColor}>Details: </h2>
                        <p className="projectText" style={styles.importedTextColor}>{props.technicalInfo}</p>
                        <h2 className="projectSubheading" style={styles.importedTextColor}>Role: </h2>
                        <p className="projectText" style={styles.importedTextColor}>{props.role}</p>
                        {props.githubLink ? gitHubLinks : <></>}
                        {props.projectLink ? <h2 className="projectExternalLink" style={styles.importedTextColor}><a href={props.projectLink} style={styles.importedTextColor}>Live Project</a></h2> : <></>}
                    </EqualColumn>
                    <div className="projectColumn">
                        {props.videoSrc ? <MobileScreenshot mobileSrc={props.mobileSrc} mobileScreenshotSrc={props.mobileScreenshotSrc} mobileScreenshotAlt={props.mobileScreenshotAlt} videoSrc={props.videoSrc}/> : <MobileScreenshot mobileSrc={props.mobileSrc} mobileScreenshotSrc={props.mobileScreenshotSrc} mobileScreenshotAlt={props.mobileScreenshotAlt} />}

                        <div className="projectImageContainerFav">
                            <img className="projectImageFav" src={props.imageSrc} alt={props.imageAlt}/>
                        </div>
                    </div>
                </FlexColumnContainer>
            </div>
        );
    };

export default ProjectInfo;