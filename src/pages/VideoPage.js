import React, { Component } from 'react';

import LogoutButtonContainer from 'containers/LogoutButtonContainer';

const VideoPage = ({user}) => {
    
    return(
        <div>
            <p>Videos go here</p>
            <LogoutButtonContainer />
        </div>
    );
}

export default VideoPage;