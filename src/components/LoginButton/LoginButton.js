import React, { Component } from 'react';

import GoogleLogin from 'react-google-login';

const signInWithGoogleImage = require('./btn_google_signin_light_normal_web.png');

const LoginButton = ({clientId, onSuccess, onFailure, user}) => {
    
    const style = {
        backgroundColor: 'rgba(0,0,0,0)',
        border: 'none',
        padding: '0'
    };
    
    // "15965114724-3b71qboka3ij341kddr78df42et1nt7q.apps.googleusercontent.com"
    
    console.log(clientId); 
    
    return(
        <GoogleLogin
            clientId="15965114724-3b71qboka3ij341kddr78df42et1nt7q.apps.googleusercontent.com"
            onSuccess={onSuccess}
            onFailure={onFailure}
            style={style} >
            <img src={signInWithGoogleImage} />
            <p>{(user) ? user.firstname + ' ' + user.lastname : ''}</p>
        </GoogleLogin>
    );
}

export default LoginButton;