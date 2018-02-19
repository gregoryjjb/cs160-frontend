import { combineReducers, createStore } from 'redux';
// Import specific reducers here
import session from 'reducers/session';

const reducer = combineReducers({
    // Combine reducers here
    session
});

export default reducer;