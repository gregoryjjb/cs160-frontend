import React from 'react';

const style = {
	position: 'absolute',
	backgroundColor: 'lightgrey'
}

const Toaster = ({toasts}) => (
	<div style={style} >
		{toasts.map(toast => (
			<p>{toast.message}</p>
		))}
	</div>
)

export default Toaster;