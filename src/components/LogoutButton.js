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
		className="mdc-theme--text-primary-on-primary"
        disabled={isFetching}
        onClick={() => onSuccess(sessionId)}>
        <Icon use="person" style={{transform: 'translate(-5px, 5px)'}} />
        Log out
    </Button>
)

export default LogoutButton;