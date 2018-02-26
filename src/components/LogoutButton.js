import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';
import { Button, ButtonIcon } from 'rmwc/Button';
import { Icon } from "rmwc/Icon";

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
        <Icon use="person" />
        Log out
    </Button>
)

export default LogoutButton;