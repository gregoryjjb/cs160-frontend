import React, { Component } from 'react';

import LogoutButtonContainer from 'containers/LogoutButtonContainer';
import Videos from 'containers/Videos';

import ButtonPanel from 'components/ButtonPanel';

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
            <p>Videos go here</p>
            <div style={videoArea}>
                <div style={buttonArea}>
                    <ButtonPanel />
                </div>
                <div style={listArea}>
                    <Videos />
                </div>
            </div>
            <LogoutButtonContainer />
        </div>
    );
}

export default VideoPage;