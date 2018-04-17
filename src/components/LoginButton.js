import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

const signInWithGoogleImage = require('img/btn_google_signin_light_normal_web.png');

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const LoginButton = ({clientId, onSuccess, onFailure, user}) => {
	
	if(!googleClientId) {
		console.error(
            'No Google API client ID specified. To fix this:\n' + 
			'\t1. Go to https://developers.google.com/identity/sign-in/web/sign-in and create a new project\n' +
            '\t2. Assing that client ID to the env variable REACT_APP_GOOGLE_CLIENT_ID in the environment Webpack runs in'
        );
	}
	
    const style = {
        backgroundColor: 'rgba(0,0,0,0)',
        border: 'none',
        padding: '0',
        cursor: 'pointer'
    };
    
    return(
        <GoogleLogin
            clientId={googleClientId}
            onSuccess={onSuccess}
            onFailure={onFailure}
            style={style} >
            <img src={signInWithGoogleImage} />
            <p>{(user) ? user.firstname + ' ' + user.lastname : ''}</p>
        </GoogleLogin>
    );
}

export default LoginButton;