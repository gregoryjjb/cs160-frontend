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
            fileName: ''
        }
    }

    render() {
        return(
            <Dialog open={this.props.isOpen} onClose={this.props.onClose} >
                <DialogSurface>
                    <DialogHeader>
                        <DialogHeaderTitle>New Video</DialogHeaderTitle>
                    </DialogHeader>
                    <DialogBody style={{display: 'block'}}>
                        Video upload input would go here.
                        <TextField label="Video Name" />
                        <TextField value={this.state.fileName} label="Your file" />
                        <FileField onChange={e => this.setState({fileName: e.target.value})} />
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