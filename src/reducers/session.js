import {
    SET_SESSION,
    REQUEST_SESSION,
    RECEIVE_SESSION,
    RECEIVE_SESSION_FAIL,
    REQUEST_END_SESSION,
    REMOVE_SESSION
 } from 'actions';

const initialState = {
    isFetching: false,
    firstLogin: false,
    loginFailed: false,
    user: null
}

function session(state = initialState, action) {
    
    switch(action.type) {
        case REQUEST_SESSION:
            return Object.assign({}, state, {isFetching: true});
            
        case RECEIVE_SESSION:
            return Object.assign({}, state, action.session, {isFetching: false});
        
        case RECEIVE_SESSION_FAIL:
            return Object.assign({}, state, {loginFailed: true, isFetching: false});
        
        case REQUEST_END_SESSION:
            return Object.assign({}, state, {isFetching: true});
        
        case REMOVE_SESSION:
            return Object.assign({}, state, {loginFailed: false, isFetching: false, user: null});
        
        default:
            return state;
    }
}

export default session;