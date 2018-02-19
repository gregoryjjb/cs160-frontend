
import axios from 'axios';

export const SEND_USER = 'SEND_USER';

export const REQUEST_SESSION = 'REQUEST_SESSION';
export const RECEIVE_SESSION = 'RECEIVE_SESSION';

export function requestSession(tokenId) {
    return {
        type: REQUEST_SESSION,
        tokenId
    }
}

export function receiveSession(session) {
    return {
        type: RECEIVE_SESSION,
        session
    }
}

export function receiveTokenId(dispatch, tokenId) {
    
    dispatch(requestSession(tokenId));
    
    axios.post('api/login', {token: tokenId})
    .then(result => {
        dispatch(receiveSession(result.data));
    });
}