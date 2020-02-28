import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProjectPage from './components/ProjectPage';
import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import ProjectsScreen from './components/ProjectsScreen';
import ContactScreen from './components/ContactScreen';
import ScrollToTop from './components/ScrollToTop';
import FullPageIntro from './components/FullPageIntro';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            introVisible: true
        }
    };

    disableIntro = (bool) => {
        this.setState({introVisible: bool});
        document.body.classList.remove('overflowHidden');
    };

    componentDidMount() {
        document.body.classList.add('overflowHidden');
    }

    render() {
    return (
        <Router>
            <ScrollToTop/>
            <Wrapper>
            <FullPageIntro changeIntro={this.disableIntro} introVisible={this.state.introVisible}/>
                <Switch>
                    <Route exact path={process.env.PUBLIC_URL + '/'}>
                        <HomeScreen changeIntro={this.disableIntro} introVisible={this.state.introVisible}/>
                    </Route>
                    <Route path={process.env.PUBLIC_URL + '/about'}>
                        <AboutScreen/>
                    </Route>
                    <Route path={process.env.PUBLIC_URL + '/projects'}>
                        <ProjectsScreen/>
                    </Route>
                    <Route path={process.env.PUBLIC_URL + '/contact'}>
                        <ContactScreen/>
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

