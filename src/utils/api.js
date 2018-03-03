import axios from 'axios';
import store from 'utils/store';

const getHeaders = () => ({
	Authorization: (store.getState().session.user) ? store.getState().session.user.sessionId : ''
})

var api = {};

api.loginWithSessionId = (sessionId) => {
	return axios.post('api/login', {sessionId: sessionId});
}

api.loginWithTokenId = (tokenId) => {
	return axios.post('api/login', {token: tokenId});
}

api.logout = () => {
	console.log('STOREEEEEEEEE', store);
	return axios.get('api/logout', {headers: getHeaders()} )
}

export default api;