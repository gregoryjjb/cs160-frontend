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
            videoName: ''
        }
    }

    handleFileChange = (e) => {

        this.setState({
            filePath: e.target.value,
            videoName: e.target.value.replace(/^.*[\\\/]/, '').replace(/\.[^/.]+$/, '')
        });
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
                        <FileField onChange={this.handleFileChange} />
                        <TextField disabled value={this.state.filePath} label="Your file" />
                        <TextField
                            label="Video Name"
                            value={this.state.videoName}
                            onChange={(e) => this.setState({videoName: e.target.value})} />
                    </DialogBody>
                    <DialogFooter>
                        <DialogFooterButton cancel>Cancel</DialogFooterButton>
                        <DialogFooterButton accept>Upload</DialogFooterButton>
                    </DialogFooter>
                </DialogSurface>
                <DialogBackdrop />
            </Dialog>
        )
    }
}

export default VideoDialog;