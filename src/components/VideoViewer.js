import React from 'react';
import { Typography } from 'rmwc/Typography';
import { css } from 'glamor';

const blankVideo = {
	name: 'Select a video',
	path: '',
	date: '',
}

const VideoViewer = ({video = blankVideo, style}) => (
	<div style={style} >
		<video controls style={{width: '100%'}} key={video.path} >
			<source src={video.path} />
		</video>
		<div style={{width: '100%', padding: '0 1em', boxSizing: 'border-box'}}>
			<p><Typography use="headline">{video.name}</Typography></p>
			<p style={{color: '#888'}} >Uploaded {new Date(Date.parse(video.createdAt)).toLocaleDateString()}</p>
		</div>
	</div>
)

export default VideoViewer;