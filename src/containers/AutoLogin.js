/** Invisible component that automatically attempts to log in if a session exists */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import { continueSession } from 'actions';

class AutoLoginDummy extends Component {

    componentDidMount() {
        const sessionId = Cookies.get('sessionId');

        if(sessionId) {
            console.log("SESSION FOUND", sessionId);
            this.props.onSessionFound(sessionId);
        }
    }

    render() {
        return(<div style={{display: 'none'}} ></div>);
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    onSessionFound: (sessionId) => continueSession(dispatch, sessionId)
});

const AutoLogin = connect(mapStateToProps, mapDispatchToProps)(AutoLoginDummy);

export default AutoLogin;