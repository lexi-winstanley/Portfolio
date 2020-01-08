import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import FlexContainer from './components/FlexContainer';
import HexagonGrid from './components/HexagonGrid';
import FloatingBlurb from './components/FloatingBlurb';
import ResumeInfoBar from './components/ResumeInfoBar';
class App extends Component {
  state = {
    content: 'home'
  };
  render() {
    let content;
    switch (this.state.content) {
      case 'home':
        content = (
            <FlexContainer>
              <HexagonGrid/>
              <FloatingBlurb/>
            </FlexContainer>
            );
        break;
      default:
        console.log('ERROR');
    }
    return (
        <Wrapper>
          <Header/>
          {content}
          <ResumeInfoBar/>
        </Wrapper>
    );
  }
}

export default App;
