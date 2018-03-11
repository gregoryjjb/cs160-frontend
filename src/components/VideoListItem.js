import React from 'react';
import {
    ListItem,
    ListItemText,
    ListItemSecondaryText,
    ListItemGraphic,
    ListItemMeta
} from 'rmwc/List';

const VideoListItem = ({video, onClick}) => (
    <ListItem onClick={onClick} >
        <ListItemText>{video.name}</ListItemText>
    </ListItem>
)

export default VideoListItem;