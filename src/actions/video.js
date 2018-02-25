import axios from 'axios';
import Cookies from 'js-cookie';

export const REQUEST_VIDEOS = 'REQUEST_VIDEOS';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';

export function requestVideos(userId) {
    return {
        type: REQUEST_VIDEOS,
        userId: userId
    }
}

export function receiveVideos(videos) {
    return {
        type: RECEIVE_VIDEOS,
        videos
    }
}

/** Async */

export function getVideos(dispatch, userId) {
    
    dispatch(requestVideos(userId));
    
    const url = 'api/videos/' + userId;
    
    const sid = Cookies.get('sessionId');
    
    axios.get(url, {headers: {Authorization: sid}})
    .then(result => {
        dispatch(receiveVideos(result.data));
    })
    .catch(error => {
        console.log("GETTING VIDEOS HAD ERROR");
    })
}