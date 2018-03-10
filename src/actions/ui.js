
export const ADD_TOAST = 'ADD_TOAST';
export const REMOVE_TOAST = 'REMOVE_TOAST';

let nextToastId = 0;

export const addToast = (message, duration = 5000) => ({
	type: ADD_TOAST,
	message,
	duration,
	id: nextToastId++
})

export const removeToast = (id) => ({
	type: REMOVE_TOAST,
	id: id
})