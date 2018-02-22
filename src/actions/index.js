import Cookies from 'js-cookie';
import axios from 'axios';
import session from '../reducers/session';

export const REQUEST_SESSION = 'REQUEST_SESSION';
export const RECEIVE_SESSION = 'RECEIVE_SESSION';
export const RECEIVE_SESSION_FAIL = 'RECEIVE_SESSION_FAIL';
export const REQUEST_END_SESSION = 'REQUEST_END_SESSION';
export const REMOVE_SESSION = 'REMOVE_SESSION';

export function requestSession() {
    return {
        type: REQUEST_SESSION
    }
}

export function receiveSession(session) {
    return {
        type: RECEIVE_SESSION,
        session
    }
}

export function receiveSessionFail(error) {
    return {
        type: RECEIVE_SESSION_FAIL,
        error
    }
}

export function requestEndSession() {
    return {
        type: REQUEST_END_SESSION
    }
}

export function removeSession() {
    return {
        type: REMOVE_SESSION
    }
}

/** Async stuff */

export function receiveTokenId(dispatch, tokenId) {
    
    console.log("GOOGLE DATA", window.gapi);
    
    dispatch(requestSession());
    
    axios.post('api/login', {token: tokenId})
    .then(result => {
        dispatch(receiveSession(result.data));
        Cookies.set('sessionId', result.data.user.sessionId, {expires: 7});
        console.log("COOKIE SHOULD HAVE GOT SET");
    })
    .catch(error => {
        dispatch(receiveSessionFail(error));
    });
}

export function continueSession(dispatch, sessionId) {

    dispatch(requestSession());

    axios.post('api/login', {sessionId: sessionId})
    .then(result => {
        dispatch(receiveSession(result.data));
    })
    .catch(error => {
        Cookies.remove('sessionId');
        dispatch(receiveSessionFail(error));
    });
}

export function beginLogout(dispatch, sessionId) {
    
    console.log("LOGGING OUT OF", sessionId);

    dispatch(requestEndSession());

    axios.get('api/logout', {headers: {Authorization: sessionId}} )
    .then(result => {
        dispatch(removeSession());
        Cookies.remove('sessionId');
    })
}