import React, { Component } from 'react';
import { Button } from 'rmwc/Button';
import { TextField } from 'rmwc/TextField';

const wrapperStyle = {
    position: 'relative',
    overflow: 'hidden',
	display: 'inline-block',
	width: 'fit-content'
}

const fileInputStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
	//fontSize: '100px',
	width: '100%',
	height: '100%',
    opacity: 0
}

const buttonStyle = {
	marginRight: '1em'
}

class FileField extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			filePath: ''
		}
	}
	
	getFileNameFromPath = (path) => (
		path.replace(/^.*[\\\/]/, '')
	)
	
	onFileChange = (e) => {
		this.setState({
			filePath: this.getFileNameFromPath(e.target.value)
		});
		
		if(this.props.onChange) this.props.onChange(e);
	}
	
	render() {
		return(
			<div style={wrapperStyle}>
				<Button
					stroked
					style={buttonStyle}
					>
					{this.props.buttonText || 'Select File'}
				</Button>
				<TextField
					style={{width: (this.props.textWidth || 'auto')}}
					disabled
					invalid={this.props.invalid}
					value={this.state.filePath}
					label={this.props.filePathText || 'Filename'}
				/>
				<input
					type='file'
					accept={this.props.accept}
					style={fileInputStyle}
					onChange={this.onFileChange} />
			</div>
		)
	}
}

export default FileField;