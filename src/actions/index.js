import Cookies from 'js-cookie';
import axios from 'axios';
import session from '../reducers/session';
import api from 'utils/api';
import { getVideos } from 'actions/video';

export const REQUEST_SESSION = 'REQUEST_SESSION';
export const RECEIVE_SESSION = 'RECEIVE_SESSION';
export const RECEIVE_SESSION_FAIL = 'RECEIVE_SESSION_FAIL';
export const REQUEST_END_SESSION = 'REQUEST_END_SESSION';
export const REMOVE_SESSION = 'REMOVE_SESSION';

export const OPEN_VIDEO_DIALOG = 'OPEN_VIDEO_DIALOG';
export const CLOSE_VIDEO_DIALOG = 'CLOSE_VIDEO_DIALOG';

export const OPEN_STREAM_DIALOG = 'OPEN_STREAM_DIALOG';
export const CLOSE_STREAM_DIALOG = 'CLOSE_STREAM_DIALOG';

export function openVideoDialog() {
    return {
        type: OPEN_VIDEO_DIALOG
    }
}

export function closeVideoDialog() {
    return {
        type: CLOSE_VIDEO_DIALOG
    }
}

export const openStreamDialog = () => ({type: OPEN_STREAM_DIALOG})
export const closeStreamDialog = () => ({type: CLOSE_STREAM_DIALOG})

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
    
    dispatch(requestSession());
	
    api.loginWithTokenId(tokenId)
    .then(result => {
        dispatch(receiveSession(result.data));
        Cookies.set('sessionId', result.data.user.sessionId, {expires: 7});
        getVideos(dispatch, result.data.user.id);
    })
    .catch(error => {
        dispatch(receiveSessionFail(error));
    });
}

export function continueSession(dispatch, sessionId) {

    dispatch(requestSession());

    api.loginWithSessionId(sessionId)
    .then(result => {
        dispatch(receiveSession(result.data));
        getVideos(dispatch, result.data.user.id);
    })
    .catch(error => {
        Cookies.remove('sessionId');
        dispatch(receiveSessionFail(error));
    });
}

export function beginLogout(dispatch, sessionId) {
    
    dispatch(requestEndSession());

    api.logout()
    .then(result => {
        dispatch(removeSession());
        Cookies.remove('sessionId');
    })
}