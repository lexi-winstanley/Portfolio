import React from 'react';
import './style.css';
import Logo from '../Logo';
import NavigationMenu from '../NavigationMenu';
import Button from '../Button';
import {Link} from 'react-router-dom';
import ButtonContainer from '../ButtonBar';

const Header = props => {
    return (
        <div className="header">
            <div className="menuContainer">
                <Logo/>
                <NavigationMenu/>
                <div className="resumeButton">
                    <Button backgroundColor="#0F0F0D" textColor="#f8f7f7">
                        <Link to="/files/LexiWinstanley_Resume.pdf" target="_blank">R&#201;sum&#201;</Link>
                    </Button>
                </div>
            </div>
            {props.buttonsVisible === true ?
                <ButtonContainer>
                    <Button backgroundColor="#cbc5ef" textColor="#0F0F0D" id="JavaScript">
                        JavaScript
                    </Button>
                    <Button backgroundColor="#0072bb" textColor="#f8f7f7" id="Node">
                    Node.js
                </Button>
                    <Button backgroundColor="#b5ca30" textColor="#0F0F0D" id="jQuery">
                        jQuery
                    </Button>
                    <Button backgroundColor="#680a4d" textColor="#f8f7f7" id="React">
                        React
                    </Button>
                    <Button backgroundColor="#45bce5" textColor="#0F0F0D" id="ReactNative">
                        React Native
                    </Button>
                    <Button backgroundColor="#041232" textColor="#f8f7f7" id="MySQL">
                        MySQL
                    </Button>
                    <Button backgroundColor="#b5ca30" textColor="#0F0F0D" id="MongoDB">
                        MongoDB
                    </Button>
                    <Button backgroundColor="#0cb2ba" textColor="#f8f7f7" id="Firebase">
                        Firebase
                    </Button>
                    <Button backgroundColor="#45bce5" textColor="#0F0F0D" id="Graphics">
                        Custom Graphics
                    </Button>
                    <Button backgroundColor="#FC354C" textColor="#f8f7f7" id="UserAuth">
                        User Authentication
                    </Button>
                    <Button backgroundColor="#cbc5ef" textColor="#0F0F0D" id="API">
                        API
                    </Button>
                </ButtonContainer> : <></>
            }
        </div>
    )
};

export default Header;