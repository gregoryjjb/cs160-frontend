import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginButton from 'components/LoginButton';

const handleSuccess = (response) => {
    // Recieve the google login response
    console.log(response);
    /*fetch('/login', {
        method: 'POST',
        body: JSON.stringify(response.profileObj),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then(() => {
        fetch('/users')
        .then(res => res.json())
        .then(res => {
            console.log(res);
        });
    });*/
}

const handleFailure = (response) => {
    console.log("FAIL", response);
}

const mapStateToProps = (state) => ({
    onSuccess: handleSuccess,
    onFailure: handleFailure
})

const mapDispatchToProps = {
    
};

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginButton);

export default Login;