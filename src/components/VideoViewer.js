import React from 'react';

const VideoViewer = ({style}) => (
	<div style={style} >
		<video controls style={{width: '100%'}} >
			<source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" />
		</video>
	</div>
)

export default VideoViewer;