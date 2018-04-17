import React, { Component } from 'react';
import { Typography } from 'rmwc/Typography';
import LoginBox from 'components/LoginBox';
import LoginButtonContainer from 'containers/LoginButtonContainer';

import bgImg from 'img/web-neural-network.jpg';

const backgroundStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    //backgroundColor: 'grey',
    backgroundColor: '#354f4e',
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    //textAlign: 'center'
}

const darkenStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.25)'
}

const footerStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)'
}

const centeredStyle = {
    maxWidth: 1280,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0 2em',
}

const WelcomePage = ({}) => (
    <div style={backgroundStyle} >
        <div style={{...darkenStyle, color: 'white'}}>
            <div style={{...centeredStyle, marginTop: '5em'}} >
                <h1><Typography use='display4' >The Power of Neural Networks</Typography></h1>
                <h2><Typography use='display3' >But in the cloud</Typography></h2>
            </div>
            <div style={{width: '100%', textAlign: 'center', paddingTop: '2em'}} >
                <p><Typography use='headline' >Become part of the experience today</Typography></p>
                <LoginButtonContainer />
            </div>
            <div style={footerStyle}>
                <p style={centeredStyle} >Created by Dean Johnson, Greg Brisebois, Dennis Dang, and Vince Brubaker-Gianakos</p>
            </div>
        </div>
    </div>
);

export default WelcomePage;