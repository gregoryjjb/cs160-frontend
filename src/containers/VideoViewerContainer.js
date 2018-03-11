import { connect } from 'react-redux';
import { selectedVideo } from 'actions/video';
import VideoViewer from 'components/VideoViewer';

const mapStateToProps = (state) => ({
	video: selectedVideo(state)
})

const VideoViewerContainer = connect(mapStateToProps)(VideoViewer);

export default VideoViewerContainer;