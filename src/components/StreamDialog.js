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
import { LinearProgress } from 'rmwc/LinearProgress';
import io from 'socket.io-client';
import ss from 'socket.io-stream';

import MediaElementWrapper from 'mediasource';
import render from 'render-media';

import recorder from 'media-recorder-stream';

class StreamDialog extends Component {
    
    socket;
    socketStream;
    realStream;

    constructor(props) {
        super(props);

        this.state = {
			localstream: null,
			loading: false,
			error: '',
        }
    }

    componentDidMount() {
        // Put variables in global scope to make them available to the browser console.
        
    }

    componentWillUpdate(nextProps, nextState) {
        if(nextProps.isOpen === true && this.props.isOpen === false) {
            if(!this.state.localstream) {
                const constraints = window.constraints = {
                    audio: false,
                    video: { width: 640, height: 480 },
				};
				
				this.setState({loading: true, error: ''});
                
                document.querySelector('#stream-video').src = '';
        
                navigator.mediaDevices.getUserMedia(constraints)
                .then(stream => {
                    this.setState({localstream: stream});
                    //document.querySelector('#stream-video').srcObject = stream;
                    
                    this.socket = io('/');
                    this.socket.emit('connection');
                    this.socketStream = ss.createStream();
                    
                    this.realStream = recorder(stream, {interval: 1000});
                    this.realStream.on('data', (data) => {
                        console.log('< Recorded blob of data');
                    })
                    
                    this.realStream.pipe(this.socketStream);
                    ss(this.socket).emit('vid', this.socketStream);
                    
                    ss(this.socket).on('vid-back', backStream => {
						
						this.setState({loading: false});
						
                        console.log("Server opened backwards stream");
                        
                        var elem = document.querySelector('#stream-video');
                        var wrapper = new MediaElementWrapper(elem);
                        var writable = wrapper.createWriteStream('video/webm; codecs="vp8"');
                        
                        elem.addEventListener('error', function () {
                            var errorCode = elem.error
                            var detailedError = wrapper.detailedError
                            console.error(errorCode);
                            console.error(detailedError);
                        })
                        
                        backStream.pipe(writable);
                        
                        /*var file = {
                            name: 'video.webm',
                            createReadStream: () => backStream,
                        }
                        
                        render.render(file, document.querySelector('#stream-video'), (err, elem) => {
                            if(err) return console.error(err.message);
                        })*/
                        
                        backStream.on('data', data => {
                            console.log('> Received blob of data');
                        })
                    })
                })
                .catch(error => {
					console.error("Error getting webcam", error);
					this.setState({
						loading: false,
						error: 'No webcam found!',
					})
                })
            }
        }
    }

    onClose = () => {

        // Close stream here
        if(this.state.localstream) {
            console.log("Stopping stream");
            console.log(this.state.localstream);
            this.state.localstream.getTracks().map(track => track.stop());
            this.setState({localstream: null});
            
            this.realStream.destroy();
            this.socket.disconnect();
        }

        this.props.onClose();
    }

    render() {
        return(
            <Dialog open={this.props.isOpen} onClose={this.onClose} >
                <DialogSurface>
                    <DialogBody>
						{this.state.loading ? <LinearProgress determinate={false} /> : null }
						{this.state.error !== '' ? <h2>{this.state.error}</h2> : null }
                        <video id="stream-video" autoPlay playsInline style={{width: '100%'}} />
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