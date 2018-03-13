import React from 'react';
import Toast from 'components/Toast';

const style = {
	position: 'absolute',
	bottom: 0,
	left: 0,
	backgroundColor: 'alpha'
}

const Toaster = ({toasts, onAction}) => (
	<div style={style} >
		{toasts.slice(0).reverse().map((toast, key) => (
			<Toast message={toast.message} index={key} id={toast.id} onAction={onAction} />
		))}
	</div>
)

export default Toaster;