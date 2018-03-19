import React from 'react';

const blankVideo = {
	name: 'Select a video',
	path: ''
}

const VideoViewer = ({video = blankVideo, style}) => (
	<div style={style} >
		<video controls style={{width: '100%'}} key={video.path} >
			<source src={video.path} />
		</video>
		<p>{video.name}</p>
	</div>
)

export default VideoViewer;