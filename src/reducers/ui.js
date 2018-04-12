
import {
	OPEN_VIDEO_DIALOG,
	CLOSE_VIDEO_DIALOG,
	OPEN_STREAM_DIALOG,
	CLOSE_STREAM_DIALOG,
} from 'actions';
import { ADD_TOAST, REMOVE_TOAST } from '../actions/ui';

const initialState = {
	videoDialogIsOpen: false,
	streamDialogIsOpen: false,
	toasts: []
}

function ui(state = initialState, action) {
    switch(action.type) {
        case OPEN_VIDEO_DIALOG:
            return {
                ...state,
                videoDialogIsOpen: true
            };
        
        case CLOSE_VIDEO_DIALOG:
            return {
                ...state,
                videoDialogIsOpen: false
            }
		
		case OPEN_STREAM_DIALOG:
            return {
                ...state,
                streamDialogIsOpen: true
            };
        
        case CLOSE_STREAM_DIALOG:
            return {
                ...state,
                streamDialogIsOpen: false
            }

		case ADD_TOAST:
			return {
				...state,
				toasts: [
					...state.toasts,
					{
						message: action.message,
						duration: action.duration,
						id: action.id
					}
				]
			}
		
		case REMOVE_TOAST:
			return {
				...state,
				toasts: state.toasts.filter(toast => toast.id !== action.id)
			}
		
        default:
            return state;
    }
}

export default ui;