import React, { Component } from 'react';
import { List } from 'rmwc/List';
import VideoListItem from 'components/VideoListItem';

const VideoList = ({videos}) => (
    <List>
        {videos.map(video => (
            <VideoListItem video={video} />
        ))}
    </List>
)

export default VideoList;