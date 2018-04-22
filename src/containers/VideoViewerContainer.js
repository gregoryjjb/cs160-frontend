import { connect } from 'react-redux';
import { selectedVideo, deleteVideoAsync } from 'actions/video';
import VideoViewer from 'components/VideoViewer';

const mapStateToProps = (state) => ({
	video: selectedVideo(state)
})

const mapDisaptchToProps = (dispatch) => ({
	onDeleteClicked: (id) => deleteVideoAsync(dispatch, id)
})

const VideoViewerContainer = connect(mapStateToProps, mapDisaptchToProps)(VideoViewer);

export default VideoViewerContainer;