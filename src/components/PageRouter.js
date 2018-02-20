import React, { Component } from 'react';
import WelcomePage from 'pages/WelcomePage';
import VideoPage from 'pages/VideoPage';

const PageRouter = ({isLoggedIn}) => {
    
    if(isLoggedIn) {
        return <VideoPage />
    }
    else {
        return <WelcomePage />
    }
}

export default PageRouter;