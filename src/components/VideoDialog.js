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

class VideoDialog extends Component {
    
    render() {
        return(
            <Dialog open={this.props.isOpen} onClose={this.props.onClose} >
                <DialogSurface>
                    <DialogHeader>
                        <DialogHeaderTitle>New Video</DialogHeaderTitle>
                    </DialogHeader>
                    <DialogBody>Video upload input would go here.</DialogBody>
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