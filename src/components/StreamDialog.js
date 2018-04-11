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

class StreamDialog extends Component {
    render() {
        return(
            <Dialog open={this.props.isOpen} onClose={this.props.onClose} >
                <DialogSurface>
                    <DialogHeader />
                    <DialogBody>
                        <p>Hi there</p>
                    </DialogBody>
                    <DialogFooter>
                        <DialogFooterButton cancel>Close</DialogFooterButton>
                    </DialogFooter>
                </DialogSurface>
            </Dialog>
        )
    }
}

export default Component;