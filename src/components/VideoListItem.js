import React from 'react';
import {
    ListItem,
    ListItemText,
    ListItemSecondaryText,
    ListItemGraphic,
    ListItemMeta
} from 'rmwc/List';
import { LinearProgress } from 'rmwc/LinearProgress';

const VideoListItem = ({video, onClick, isLoading=false}) => (
    <ListItem onClick={onClick} >
        <ListItemText>{video.name}</ListItemText>
		{ isLoading ? <LinearProgress determinate={false} style={{maxWidth: '20em', marginLeft: '5em'}} /> : null }
    </ListItem>
)

export default VideoListItem;