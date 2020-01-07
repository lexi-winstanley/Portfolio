import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import FlexContainer from './components/FlexContainer';
import Hexagon from './components/Hexagon';

class App extends Component {
  state = {
    content: 'home'
  };
  render() {
    let content;
    switch (this.state.content) {
      case 'home':
        content = <Hexagon/>
        break;
      default:
        console.log("ERROR");
    }
    return (
        <Wrapper>
          <Header/>
          <FlexContainer>{content}</FlexContainer>
        </Wrapper>
    );
  }
}

export default App;
