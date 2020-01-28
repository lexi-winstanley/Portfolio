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

        return (
            <div className="projectContainer" style={styles.importedColor}>
                <div className="pageBanner" >
                    <h1 className="projectTitle" style={styles.importedTextColor}>{props.title}</h1>
                </div>
                <FlexColumnContainer>
                    <EqualColumn>
                        <h2 className="projectSubheading" style={styles.importedTextColor}>Technologies: </h2>
                        <p className="projectText" style={styles.importedTextColor}>{props.technologies}</p>
                        <h2 className="projectSubheading" style={styles.importedTextColor}>Description: </h2>
                        <p className="projectText" style={styles.importedTextColor}>{props.description}</p>
                        {props.desktopSrc ? <DesktopScreenshot desktopSrc={props.desktopSrc} desktopScreenshotSrc={props.desktopScreenshotSrc} desktopScreenshotAlt={props.desktopScreenshotAlt}/> : <MobileScreenshot mobileSrc={props.mobileSrc} mobileScreenshotSrc={props.mobileScreenshotSrc} mobileScreenshotAlt={props.mobileScreenshotAlt}/>}
                        <h2 className="projectSubheading" style={styles.importedTextColor}>Technical Information: </h2>
                        <p className="projectText" style={styles.importedTextColor}>{props.technicalInfo}</p>
                        <h2 className="projectExternalLink" style={styles.importedTextColor}><a href={props.githubLink} style={styles.importedTextColor}>Github Repository</a></h2>
                        <h2 className="projectExternalLink" style={styles.importedTextColor}><a href={props.projectLink} style={styles.importedTextColor}>Live Project</a></h2>
                    </EqualColumn>
                    <div className="projectColumn">
                        <MobileScreenshot mobileSrc={props.mobileSrc} mobileScreenshotSrc={props.mobileScreenshotSrc} mobileScreenshotAlt={props.mobileScreenshotAlt}/>
                        <div className="projectImageContainerFav">
                            <img className="projectImageFav" src={props.imageSrc} alt={props.imageAlt}/>
                        </div>
                    </div>
                </FlexColumnContainer>
            </div>
        );
    };

export default ProjectInfo;