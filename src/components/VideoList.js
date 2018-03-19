import React, { Component } from 'react';
import { List } from 'rmwc/List';
import { LinearProgress } from 'rmwc/LinearProgress';
import VideoListItem from 'components/VideoListItem';


const divStyle = {
	position: 'relative'
}

const loadingOverlayStyle = {
	position: 'absolute',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	backgroundColor: 'rgba(0,0,0,0.25)'
}

const VideoList = ({videos, loading, videoSelected}) => (
	<div style={divStyle} >
		<LinearProgress determinate={false} style={{ display: (loading ? 'block' : 'none') }} />
		<List>
			{videos.map(video => (
				<VideoListItem onClick={() => videoSelected(video.id)} video={video} key={video.id} isLoading={video.isLoading} />
			))}
		</List>
		<div style={{...loadingOverlayStyle, display: (loading ? 'block' : 'none') }}></div>
	</div>
)

export default VideoList;