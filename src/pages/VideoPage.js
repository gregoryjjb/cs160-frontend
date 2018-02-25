import React, { Component } from 'react';

import LogoutButtonContainer from 'containers/LogoutButtonContainer';
import Videos from 'containers/Videos';

const VideoPage = ({user}) => {
    
    return(
        <div>
            <p>Videos go here</p>
            <Videos />
            <LogoutButtonContainer />
        </div>
    );
}

export default VideoPage;