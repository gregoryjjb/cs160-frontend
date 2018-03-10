
export const ADD_TOAST = 'ADD_TOAST';
export const REMOVE_TOAST = 'REMOVE_TOAST';

let nextToastId = 0;

export const popToast = (dispatch, message, duration = 1000) => {
	
	let id = nextToastId++;
	
	dispatch(addToast(message, duration, id));
	
	setTimeout(() => dispatch(removeToast(id)), duration)
}

export const addToast = (message, duration, id) => ({
	type: ADD_TOAST,
	message,
	duration,
	id
})

export const removeToast = (id) => ({
	type: REMOVE_TOAST,
	id: id
})