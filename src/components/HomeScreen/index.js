import React, { Component } from 'react';
import './style.css';
import Header from '../Header';
import FlexContainer from '../FlexContainer';
import HexagonGrid from '../HexagonGrid';
import FullPageIntro from '../FullPageIntro';

class HomeScreen extends Component {
    state = {
        viewport: window.innerHeight,
        currentScrollHeight: 0,
        headerIntro: false
    };

    componentDidMount() {
        window.onscroll = (event) => {
            const newScrollHeight = Math.ceil(window.scrollY / 1) * 1;
            if (this.state.currentScrollHeight !== newScrollHeight) {
                this.setState({currentScrollHeight: newScrollHeight})
            }
            ;
            if (this.state.currentScrollHeight >= this.state.viewport) {
                this.setState({headerIntro: true});
            }
            console.log(this.state);
        }
    }

    render() {
        return (
            <>
                <FullPageIntro headerIntro={this.state.headerIntro}/>
                <Header/>
                <FlexContainer>
                    <HexagonGrid/>
                </FlexContainer>
            </>
        );
    }
}

export default HomeScreen;