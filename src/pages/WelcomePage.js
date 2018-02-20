import React, { Component } from 'react';
import LoginBox from 'components/LoginBox';
import LoginButtonContainer from 'containers/LoginButtonContainer';

const backgroundStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'grey',
    textAlign: 'center'
}

const WelcomePage = ({}) => (
    <div style={backgroundStyle} >
            <LoginBox>
                <h1>Welcome!</h1>
                <LoginButtonContainer />
            </LoginBox>
    </div>
);

export default WelcomePage;