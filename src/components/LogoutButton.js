import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';

const LogoutButton = ({onSuccess}) => {
    
    return(
        <GoogleLogout
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
            />
    );
}

export default LogoutButton;