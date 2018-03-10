import React from 'react';
import Toast from 'components/Toast';

const style = {
	position: 'absolute',
	bottom: 0,
	left: 0,
	backgroundColor: 'alpha'
}

const Toaster = ({toasts}) => (
	<div style={style} >
		{toasts.slice(0).reverse().map((toast, key) => (
			<Toast message={toast.message} index={key} onAction={() => console.log('Click')} />
		))}
	</div>
)

export default Toaster;