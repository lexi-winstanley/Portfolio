import React from 'react';
import './style.css';
import Logo from '../Logo';
import NavigationMenu from '../NavigationMenu';
import Button from '../Button';
import {Link} from 'react-router-dom';
import ButtonContainer from '../ButtonBar';

const Header = props => {
    const click = props.onFilterButton;
    return (
        <div className="header">
            <div className="menuContainer">
                <Logo/>
                <NavigationMenu/>
                <div className="resumeButton">
                    <Button backgroundColor="#0F0F0D" textColor="#f8f7f7" onClickFunction={'none'} extraClass="sidebarResume">
                        <Link to="/files/LexiWinstanley_Resume.pdf" target="_blank">R&#201;sum&#201;</Link>
                    </Button>
                </div>
            </div>
            {props.buttonsVisible === true ?
                <ButtonContainer>
                    <Button backgroundColor="#FC354C" textColor="#f8f7f7" id="all" onClickFunction={click} extraClass="headerButton">
                        All Projects
                    </Button>
                    <Button backgroundColor="#cbc5ef" textColor="#0F0F0D" id="javascript" onClickFunction={click} extraClass="headerButton">
                        JavaScript
                    </Button>
                    <Button backgroundColor="#0072bb" textColor="#f8f7f7" id="node" onClickFunction={click} extraClass="headerButton">
                    Node.js
                </Button>
                    <Button backgroundColor="#b5ca30" textColor="#0F0F0D" id="jQuery" onClickFunction={click} extraClass="headerButton">
                        jQuery
                    </Button>
                    <Button backgroundColor="#680a4d" textColor="#f8f7f7" id="react" onClickFunction={click} extraClass="headerButton">
                        React
                    </Button>
                    <Button backgroundColor="#45bce5" textColor="#0F0F0D" id="reactNative" onClickFunction={click} extraClass="headerButton">
                        React Native
                    </Button>
                    <Button backgroundColor="#041232" textColor="#f8f7f7" id="mySQL" onClickFunction={click} extraClass="headerButton">
                        MySQL
                    </Button>
                    <Button backgroundColor="#b5ca30" textColor="#0F0F0D" id="mongo" onClickFunction={click} extraClass="headerButton">
                        MongoDB
                    </Button>
                    <Button backgroundColor="#0cb2ba" textColor="#f8f7f7" id="firebase" onClickFunction={click} extraClass="headerButton">
                        Firebase
                    </Button>
                    <Button backgroundColor="#45bce5" textColor="#0F0F0D" id="customGraphics" onClickFunction={click} extraClass='headerButton'>
                        Custom Graphics
                    </Button>
                    <Button backgroundColor="#FC354C" textColor="#f8f7f7" id="userAuth" onClickFunction={click} extraClass="headerButton">
                        User Authentication
                    </Button>
                    <Button backgroundColor="#cbc5ef" textColor="#0F0F0D" id="api" onClickFunction={click} extraClass="headerButton">
                        API
                    </Button>
                </ButtonContainer> : <></>
            }
        </div>
    )
};

export default Header;