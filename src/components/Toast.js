import React from 'react';
import { Button, ButtonIcon } from 'rmwc/Button';
import { Icon } from 'rmwc/Icon';

const toastStyle = {
	position: 'unset',
	transform: 'none',
	margin: '1em',
	zIndex: 10,
	pointerEvents: 'all'
}

const textStyle = {
	opacity: 1
}

const Toast = ({message, id, key, onAction}) => (
	<div className="mdc-snackbar" style={toastStyle} >
		<div className="mdc-snackbar__text" style={textStyle} >
			{message}
		</div>
		<div className="mdc-snackbar__action-wrapper" style={textStyle} >
			<button
				type="button"
				className="mdc-snackbar__action-button"
				style={textStyle}
				onClick={() => onAction(id)}
				>
				Close
			</button>
		</div>
	</div>
)

export default Toast;