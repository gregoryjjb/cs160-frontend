import React, { Component } from 'react';
import LoginBox from 'components/LoginBox';
import LoginButtonContainer from 'containers/LoginButtonContainer';

import bgImg from 'img/welcome-background.jpg';

const backgroundStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    //backgroundColor: 'grey',
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'center'
}

const imageStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)'
}

const WelcomePage = ({}) => (
    <div style={backgroundStyle} >
        <div style={imageStyle}>
            <LoginBox>
                <h1>Welcome!</h1>
                <LoginButtonContainer />
            </LoginBox>
        </div>
    </div>
);

export default WelcomePage;