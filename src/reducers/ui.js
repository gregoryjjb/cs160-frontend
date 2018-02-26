
import { OPEN_VIDEO_DIALOG, CLOSE_VIDEO_DIALOG } from 'actions';

const initialState = {
    videoDialogIsOpen: false
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
            
        default:
            return state;
    }
}

export default ui;