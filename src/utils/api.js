import axios from 'axios';
import store from 'utils/store';

const getHeaders = () => ({
	Authorization: (store.getState().session.user) ? store.getState().session.user.sessionId : ''
})

const getUserId = () => (
	(store.getState().session.user) ? store.getState().session.user.id : ''
)

var api = {};

api.loginWithSessionId = (sessionId) => {
	return axios.post(
		'api/login',
		{ sessionId: sessionId }
	)
}

api.loginWithTokenId = (tokenId) => {
	return axios.post(
		'api/login',
		{ token: tokenId }
	)
}

api.logout = () => {
	return axios.get(
		'api/logout'
	)
}

api.getVideos = (userId) => {
	return axios.get(
		'api/videos/' + getUserId()
	)
}

api.postVideo = (data) => {
	return axios.post(
		'api/videos',
		data
	)
}

export default api;