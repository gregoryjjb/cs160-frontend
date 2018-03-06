import axios from 'axios';
import Cookies from 'js-cookie';
import api from 'utils/api';

export const REQUEST_VIDEOS = 'REQUEST_VIDEOS';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const SEND_VIDEO = 'SEND_VIDEO';

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

export function sendVideo() {
	return {
		type: SEND_VIDEO
	}
}

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

export function newVideo(dispatch, data) {
	
	dispatch(sendVideo());
	
	api.postVideo({videoData: data})
	.then(result => {
		getVideos(dispatch, '');
	})
	.catch(error => {
		console.log("POST NEW VIDEO HAD ERROR");
	})
	
}