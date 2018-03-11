import React, { Component } from 'react';
import {
    Dialog,
    DefaultDialogTemplate,
    DialogSurface,
    DialogHeader,
    DialogHeaderTitle,
    DialogBody,
    DialogFooter,
    DialogFooterButton,
    DialogBackdrop
} from 'rmwc/Dialog';
import { TextField, FormField } from 'rmwc';
import FileField from 'components/FileField';

class VideoDialog extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            filePath: '',
			videoName: '',
			filePathValid: true,
			videoNameValid: true
        }
    }

    handleFileChange = (e) => {

        this.setState({
			filePath: e.target.value,
			filePathValid: (e.target.value != ''),
            videoName: e.target.value.replace(/^.*[\\\/]/, '').replace(/\.[^/.]+$/, '')
        });
    }
	
	validate = () => {
		let fileValid = (this.state.filePath != '');
		let nameValid = (this.state.videoName != '');
		
		this.setState({
			filePathValid: fileValid,
			videoNameValid: nameValid
		});
		
		return (fileValid && nameValid);
	}
	
	onSubmit = () => {
		
		var valid = this.validate();
		
		if(valid) {
			var data = {
				//file: this.state.filePath,
				name: this.state.videoName
			};
			
			this.props.onSubmit(data);
			this.props.onClose();
		}
	}
	
	formStyle = {
        display: 'flex',
        flexDirection: 'column'
	}

    render() {
		
        return(
            <Dialog open={this.props.isOpen} onClose={this.props.onClose} >
                <DialogSurface>
                    <DialogHeader>
                        <DialogHeaderTitle>New Video</DialogHeaderTitle>
                    </DialogHeader>
                    <DialogBody style={this.formStyle}>
                        Upload video form
                        <FileField
							invalid={!this.state.filePathValid}
							onChange={this.handleFileChange}
							textWidth='30em' />
                        <TextField
							label="Video Name"
							invalid={!this.state.videoNameValid}
                            value={this.state.videoName}
                            onChange={(e) => {this.setState({videoName: e.target.value, videoNameValid: (e.target.value != '')}); this.validate();}} />
                    </DialogBody>
                    <DialogFooter>
                        <DialogFooterButton cancel>Cancel</DialogFooterButton>
                        <DialogFooterButton onClick={this.onSubmit} raised theme="secondary-bg text-primary-on-secondary" >Upload</DialogFooterButton>
                    </DialogFooter>
                </DialogSurface>
                <DialogBackdrop />
            </Dialog>
        )
    }
}

export default VideoDialog;