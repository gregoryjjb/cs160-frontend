import { combineReducers, createStore } from 'redux';
// Import specific reducers here
import session from 'reducers/session';
import videos from 'reducers/videos';
import ui from 'reducers/ui';

const reducer = combineReducers({
    // Combine reducers here
    session,
    videos,
    ui
});

export default reducer;