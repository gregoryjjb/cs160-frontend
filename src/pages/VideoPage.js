import React, { Component } from 'react';

import LogoutButtonContainer from 'containers/LogoutButtonContainer';
import Videos from 'containers/Videos';
import VideoViewerContainer from 'containers/VideoViewerContainer';

import VideoDialogContainer from 'containers/VideoDialogContainer';
import StreamDialogContainer from 'containers/StreamDialogContainer';

import ButtonPanelContainer from 'containers/ButtonPanelContainer';
import Header from 'components/Header';

const videoArea = {
    display: 'flex'
}

const buttonArea = {
    
}

const mainArea = {
	display: 'flex',
	width: '100%'
}

const listArea = {
	paddingLeft: '1em',
	paddingRight: '1em',
    width: '50%'
}

const VideoPage = ({user}) => {
    
    return(
        <div>
            <Header titleText="Videos" />
            <div style={videoArea}>
                <div style={buttonArea}>
                    <ButtonPanelContainer />
                </div>
				<div style={mainArea}>
					<div style={listArea}>
						<Videos />
					</div>
					<VideoViewerContainer style={{width: '50%'}} />
				</div>
            </div>
            <VideoDialogContainer />
            <StreamDialogContainer />
        </div>
    );
}

export default VideoPage;