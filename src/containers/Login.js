import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { receiveTokenId } from 'actions';

import LoginButton from 'components/LoginButton';

const handleSuccess = (response) => {
    // Recieve the google login response
    var postData = {
        token: response.tokenId
    };
    
    /*axios.post('api/login', postData)
    .then(result => {
        console.log(result.data);
    })*/
    
    /*fetch('api/login', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then(res => res.json())
    .then(res => {
        //console.log(res);
    });*/
}

const handleFailure = (response) => {
    console.log("FAIL", response);
}

const mapStateToProps = (state) => ({
    onFailure: handleFailure
})

const mapDispatchToProps = (dispatch) => ({
    onSuccess: (res) => receiveTokenId(dispatch, res.tokenId)
});

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginButton);

export default Login;