import React from 'react';

const style = {
	position: 'absolute',
	backgroundColor: 'lightgrey'
}

const Toasts = ({toasts}) => (
	<div>
		{toasts.map(toast => (
			<p>{toast.message}</p>
		))}
	</div>
)