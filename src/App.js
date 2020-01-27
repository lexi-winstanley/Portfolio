import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import FlexContainer from './components/FlexContainer';
import HexagonGrid from './components/HexagonGrid';
import ResumeInfoBar from './components/ResumeInfoBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProjectPage from './components/ProjectPage';
import PageInfoSection from './components/PageInfoSection';
import FullPageIntro from './components/FullPageIntro';
import MobileScreenshot from './components/MobileScreenshot';
import ProjectsScreen from './components/ProjectsScreen';

class App extends Component {
    state = {
        viewport: window.innerHeight,
        currentScrollHeight: 0,
        headerIntro: false
    };

    componentDidMount () {
        window.onscroll =(event)=>{
            const newScrollHeight = Math.ceil(window.scrollY / 1) * 1;
            if (this.state.currentScrollHeight !== newScrollHeight){
                this.setState({currentScrollHeight: newScrollHeight})
            };
            if (this.state.currentScrollHeight >= this.state.viewport) {
                this.setState({headerIntro: true});
            }
            console.log(this.state);
        }
    }

  render() {
    return (
        <Router>
        <Wrapper>
            <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'}>
                        <>
                        <FullPageIntro headerIntro={this.state.headerIntro}/>
                        <Header introVisible={this.state.headerIntro}/>
                        <FlexContainer>
                        <HexagonGrid/>
                        </FlexContainer>
                        </>
                </Route>
                <Route path={process.env.PUBLIC_URL + '/about'}>
                    <Header/>
                    <PageInfoSection pageTitle='About Lexi Winstanley' pageInfo='Motivated and energetic Front End Web Developer with Certificate in Full Stack Web Development from University of Washington Professional & Continuing Education, strong skills in HTML, CSS and JavaScript and additional experience with React, React Native, MySQL and MongoDB. Leveraging creative problem solving, productive collaboration and a passion for accessibility gained from a background in health care to create impactful web experiences for all users. Detail-oriented individual known for delivering responsive, cross browser compatible applications that balance performance and design with overall user experience. Recognized in collaborative settings as a creative, hardworking teammate motivated to meet all deliverables and requirements while ensuring a positive experience for others. '/>
                </Route>
                <Route path={process.env.PUBLIC_URL + '/projects'}>
                    <Header/>
                    <ProjectsScreen/>
                </Route>
                <Route path={process.env.PUBLIC_URL + '/contact'}>
                    <Header/>
                    <MobileScreenshot/>
                </Route>
                <Route path={process.env.PUBLIC_URL + '/:project'}>
                    <Header/>
                    <ProjectPage/>
                </Route>
            </Switch>
        </Wrapper>
        </Router>
    );
  }
}

export default App;

