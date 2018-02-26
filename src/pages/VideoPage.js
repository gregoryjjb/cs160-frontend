import React, { Component } from 'react';

import LogoutButtonContainer from 'containers/LogoutButtonContainer';
import Videos from 'containers/Videos';
import VideoDialogContainer from 'containers/VideoDialogContainer';

import ButtonPanelContainer from 'containers/ButtonPanelContainer';
import Header from 'components/Header';

const videoArea = {
    display: 'flex'
}

const buttonArea = {
    
}

const listArea = {
    paddingLeft: '1em',
    width: '100%'
}

const VideoPage = ({user}) => {
    
    return(
        <div>
            <Header titleText="Videos" />
            <div style={videoArea}>
                <div style={buttonArea}>
                    <ButtonPanelContainer />
                </div>
                <div style={listArea}>
                    <Videos />
                </div>
            </div>
            <VideoDialogContainer />
        </div>
    );
}

export default VideoPage;