import { combineReducers, createStore } from 'redux';
// Import specific reducers here
import session from 'reducers/session';
import videos from 'reducers/videos';

const reducer = combineReducers({
    // Combine reducers here
    session,
    videos
});

export default reducer;