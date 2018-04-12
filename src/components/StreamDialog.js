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

    constructor(props) {
        super(props);

        this.state = {
            localstream: null,
        }
    }

    componentDidMount() {
        // Put variables in global scope to make them available to the browser console.
        const constraints = window.constraints = {
            audio: false,
            video: true
        };

        navigator.mediaDevices.getUserMedia(constraints)
        .then(stream => {
            this.setState({localstream: stream});
            document.querySelector('#stream-video').srcObject = stream;
        })
        .catch(error => {

        })
    }

    componentWillUnmount() {
        
    }

    onClose = () => {

        // Close stream here
        if(this.state.localstream) {
            console.log("Stopping stream");
            console.log(this.state.localstream);
            this.state.localstream.getTracks()[0].stop();
        }

        this.props.onClose();
    }

    render() {
        return(
            <Dialog open={this.props.isOpen} onClose={this.onClose} >
                <DialogSurface>
                    <DialogBody>
                        <video id="stream-video" autoPlay playsinline style={{width: '100%'}} />
                    </DialogBody>
                    <DialogFooter>
                        <DialogFooterButton cancel>Close</DialogFooterButton>
                    </DialogFooter>
                </DialogSurface>
                <DialogBackdrop />
            </Dialog>
        )
    }
}

export default StreamDialog;