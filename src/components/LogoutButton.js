import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';
import { Button, ButtonIcon } from 'rmwc/Button';

const LogoutButton = ({sessionId, onSuccess, isFetching}) => (
    
    /*return(
        <GoogleLogout
            buttonText="Logout"
            onLogoutSuccess={() => onSuccess(sessionId)}
            />
    );*/

    <Button
        disabled={isFetching}
        onClick={() => onSuccess(sessionId)}>
        <ButtonIcon use="person" />
        Log out
    </Button>
)

export default LogoutButton;