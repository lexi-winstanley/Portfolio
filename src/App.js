import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import FlexContainer from './components/FlexContainer';
import HexagonGrid from './components/HexagonGrid';
import ResumeInfoBar from './components/ResumeInfoBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProjectPage from './components/ProjectPage';
import FlexColumnContainer from './components/FlexColumnContainer';
import EqualColumn from './components/EqualColumn';
import PageInfoSection from './components/PageInfoSection';
class App extends Component {
  render() {
    return (
        <Router>
        <Wrapper>
            <Header/>
            <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'}>
                        <FlexContainer>
                            <HexagonGrid/>
                        </FlexContainer>
                </Route>
                <Route path={process.env.PUBLIC_URL + '/about'}>
                    <PageInfoSection pageTitle='About Lexi Winstanley' pageInfo='Motivated and energetic Front End Web Developer with Certificate in Full Stack Web Development from University of Washington Professional & Continuing Education, strong skills in HTML, CSS and JavaScript and additional experience with React, React Native, MySQL and MongoDB. Leveraging creative problem solving, productive collaboration and a passion for accessibility gained from a background in health care to create impactful web experiences for all users. Detail-oriented individual known for delivering responsive, cross browser compatible applications that balance performance and design with overall user experience. Recognized in collaborative settings as a creative, hardworking teammate motivated to meet all deliverables and requirements while ensuring a positive experience for others. '/>
                </Route>
                <Route path={process.env.PUBLIC_URL + '/projects'}>
                    <ResumeInfoBar/>
                </Route>
                <Route path={process.env.PUBLIC_URL + '/contact'}>
                    <ResumeInfoBar/>
                </Route>
                <Route path={process.env.PUBLIC_URL + '/:project'}>
                    <ProjectPage/>
                </Route>
            </Switch>
        </Wrapper>
        </Router>
    );
  }
}

export default App;

//    "start": "react-scripts start",