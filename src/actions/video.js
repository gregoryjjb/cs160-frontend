import axios from 'axios';
import Cookies from 'js-cookie';
import api from 'utils/api';

import { popToast } from 'actions/ui';

export const REQUEST_VIDEOS = 'REQUEST_VIDEOS';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const SEND_VIDEO = 'SEND_VIDEO';
export const SELECT_VIDEO = 'SELECT_VIDEO';
export const DELETE_VIDEO = 'DELETE_VIDEO';

export function requestVideos(userId) {
    return {
        type: REQUEST_VIDEOS
    }
}

export function receiveVideos(videos) {
    return {
        type: RECEIVE_VIDEOS,
        videos
    }
}

export function sendVideo(video) {
	return {
		type: SEND_VIDEO,
		video
	}
}

export const selectVideo = (id) => ({
	type: SELECT_VIDEO,
	id
})

export const selectedVideo = (state) => (
	state.videos.videos.find(v => v.id === state.videos.selected)
)

export const deleteVideo = (id) => ({
	type: DELETE_VIDEO,
	id
})

/** Async */

export function getVideos(dispatch, userId) {
    
    dispatch(requestVideos());
    
    api.getVideos(userId)
    .then(result => {
        dispatch(receiveVideos(result.data));
    })
    .catch(error => {
        console.log("GETTING VIDEOS HAD ERROR");
    })
}

export function newVideo(dispatch, data, file) {
	
	dispatch(sendVideo(data));
	
	api.postVideo(data, file)
	.then(result => {
		popToast(dispatch, "Video added");
		getVideos(dispatch, '');
	})
	.catch(error => {
		popToast(dispatch, "Error adding video!");
		getVideos(dispatch, '');
	})
}

export function deleteVideoAsync(dispatch, videoId) {
	
	//dispatch(deleteVideo(videoId));
	
	api.deleteVideo(videoId)
	.then(result => {
		popToast(dispatch, "Video deleted");
		getVideos(dispatch, '');
	})
	.catch(error => {
		popToast(dispatch, "Error deleting video!");
		console.error("AXIOS CALL FAILED");
	})
}