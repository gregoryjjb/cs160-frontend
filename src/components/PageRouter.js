import React, { Component } from 'react';
import WelcomePage from 'pages/WelcomePage';
import VideoPage from 'pages/VideoPage';
import LoadingPage from 'pages/LoadingPage';

const PageRouter = ({isLoading, isLoggedIn}) => {
    
    if(isLoading) {
        return <LoadingPage />
    }
    else if(isLoggedIn) {
        return <VideoPage />
    }
    else {
        return <WelcomePage />
    }
}

export default PageRouter;