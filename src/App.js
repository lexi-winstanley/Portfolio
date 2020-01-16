import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import FlexContainer from './components/FlexContainer';
import HexagonGrid from './components/HexagonGrid';
import ResumeInfoBar from './components/ResumeInfoBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProjectPage from './components/ProjectPage';
class App extends Component {
  render() {
    return (
        <Router>
        <Wrapper>
            <Header/>
            <Switch>
                <Route exact path='/'>
                        <FlexContainer>
                            <HexagonGrid/>
                        </FlexContainer>
                </Route>
                <Route path='/about'>
                    <ResumeInfoBar/>
                </Route>
                <Route path='/projects'>
                    <ResumeInfoBar/>
                </Route>
                <Route path='/contact'>
                    <ResumeInfoBar/>
                </Route>
                <Route path='/:project'>
                    <ProjectPage/>
                </Route>
            </Switch>
        </Wrapper>
        </Router>
    );
  }
}

export default App;
