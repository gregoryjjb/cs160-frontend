import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';
import { Button } from 'rmwc/Button';

const LogoutButton = ({sessionId, onSuccess}) => {
    
    /*return(
        <GoogleLogout
            buttonText="Logout"
            onLogoutSuccess={() => onSuccess(sessionId)}
            />
    );*/

    return <Button onClick={() => onSuccess(sessionId)}>Log out</Button>;
}

export default LogoutButton;