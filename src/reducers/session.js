import { SET_SESSION } from 'actions';
import { REQUEST_SESSION, RECEIVE_SESSION, RECEIVE_SESSION_FAIL } from '../actions';

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
        
        default:
            return state;
    }
}

export default session;