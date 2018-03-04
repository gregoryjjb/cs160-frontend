import React, { Component } from 'react';
import { List } from 'rmwc/List';
import { LinearProgress } from 'rmwc/LinearProgress';
import VideoListItem from 'components/VideoListItem';

const VideoList = ({videos, loading}) => (
	<div>
		<LinearProgress determinate={false} style={{ display: (loading ? 'block' : 'none') }} />
		<List>
			{videos.map(video => (
				<VideoListItem video={video} />
			))}
		</List>
	</div>
)

export default VideoList;