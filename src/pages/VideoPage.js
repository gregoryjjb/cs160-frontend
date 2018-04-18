import React, { Component } from 'react';
import { css } from 'glamor';

import LogoutButtonContainer from 'containers/LogoutButtonContainer';
import Videos from 'containers/Videos';
import VideoViewerContainer from 'containers/VideoViewerContainer';

import VideoDialogContainer from 'containers/VideoDialogContainer';
import StreamDialogContainer from 'containers/StreamDialogContainer';

import ButtonPanelContainer from 'containers/ButtonPanelContainer';
import Header from 'components/Header';

const pageArea = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
}

const videoArea = {
    display: 'flex',
    flexGrow: 1,
}

const buttonArea = {
    
}

const halfArea = {
	paddingLeft: '0.5em',
	paddingRight: '0.5em',
    minWidth: '50%',
    minHeight: '50%',
    boxSizing: 'border-box',
    overflowY: 'auto',
}

const mainArea = css({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    '@media(max-width: 900px)': {
        flexDirection: 'column',
    }
})

const VideoPage = ({user}) => {
    
    return(
        <div style={pageArea} >
            <Header titleText="Videos" />
            <div style={videoArea}>
                <div style={buttonArea}>
                    <ButtonPanelContainer />
                </div>
				<div {...mainArea} >
					<div style={halfArea}>
						<Videos />
					</div>
					<VideoViewerContainer style={halfArea} />
				</div>
            </div>
            <VideoDialogContainer />
            <StreamDialogContainer />
        </div>
    );
}

export default VideoPage;