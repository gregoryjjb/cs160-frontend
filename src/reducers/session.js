import { SET_SESSION } from 'actions';
import { REQUEST_SESSION, RECEIVE_SESSION } from '../actions';

const initialState = {
    isFetching: false,
    firstLogin: false,
    user: null
}

function session(state = initialState, action) {
    
    switch(action.type) {
        case REQUEST_SESSION:
            console.log("Requested session");
            return Object.assign({}, state, {isFetching: true});
            
        case RECEIVE_SESSION:
            console.log("Received session");
            return Object.assign({}, state, action.session, {isFetching: false});
        
        default:
            return state;
    }
}

export default session;