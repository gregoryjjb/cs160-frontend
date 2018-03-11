import React from 'react';

const blankVideo = {
	name: 'Select a video'
}

const VideoViewer = ({video = blankVideo, style}) => (
	<div style={style} >
		<video controls style={{width: '100%'}} >
			<source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" />
		</video>
		<p>{video.name}</p>
	</div>
)

export default VideoViewer;