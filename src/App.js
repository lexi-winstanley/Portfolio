import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProjectPage from './components/ProjectPage';
import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import ProjectsScreen from './components/ProjectsScreen';
import ContactScreen from './components/ContactScreen';

class App extends Component {

  render() {
    return (
        <Router>
        <Wrapper>
            <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'}>
                    <HomeScreen/>
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

