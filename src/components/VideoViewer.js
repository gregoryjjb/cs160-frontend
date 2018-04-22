import React from 'react';
import { Typography } from 'rmwc/Typography';
import { Button } from 'rmwc/Button';
import { css } from 'glamor';

const blankVideo = {
	name: 'Select a video',
	path: '',
	date: '',
}

const VideoViewer = ({video = blankVideo, style, onDeleteClicked}) => (
	<div style={style} >
		<video controls style={{width: '100%'}} key={video.path} >
			<source src={video.path} />
		</video>
		<div style={{width: '100%', padding: '0 1em', boxSizing: 'border-box'}}>
		{video.date !== '' ? (
			<span>
				<p><Typography use="headline">{video.name}</Typography></p>
				<p style={{color: '#888'}} >Uploaded {new Date(Date.parse(video.createdAt)).toLocaleDateString()}</p>
				<Button raised onClick={() => onDeleteClicked(video.id)} >Delete</Button>
			</span>
		) :
			<p>Select a video</p>
		}
		</div>
	</div>
)

export default VideoViewer;