import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import FlexContainer from './components/FlexContainer';
import HexagonGrid from './components/HexagonGrid';
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
            <>
                <Header/>
                <FlexContainer>
                    <HexagonGrid/>
                </FlexContainer>
            </>
            );
        break;
      default:
        console.log('ERROR');
    }
    return (
        <Wrapper>
            {content}
            <ResumeInfoBar/>
        </Wrapper>
    );
  }
}

export default App;
