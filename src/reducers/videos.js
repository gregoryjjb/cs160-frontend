import {
    REQUEST_VIDEOS,
    RECEIVE_VIDEOS
} from 'actions/video';
import { SEND_VIDEO } from '../actions/video';

const initialState = {
    isFetching: false,
    videos: []
}

function videos(state = initialState, action) {
    
    switch(action.type) {
        case REQUEST_VIDEOS:
            return({
                ...state,
                isFetching: true
            });
            
        case RECEIVE_VIDEOS:
            return({
                ...state,
                isFetching: false,
                videos: action.videos
            });
		
		case SEND_VIDEO:
			return({
				...state,
				isFetching: true
			});
			
        default: 
            return state;
    }
}

export default videos;