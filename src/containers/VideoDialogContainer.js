import { connect } from 'react-redux';
import { closeVideoDialog } from 'actions';
import { newVideo } from 'actions/video';
import VideoDialog from 'components/VideoDialog';

const mapStateToProps = (state) => ({
    isOpen: state.ui.videoDialogIsOpen
})

const mapDispatchToProps = (dispatch) => ({
	onClose: () => dispatch(closeVideoDialog()),
	onSubmit: (data, file) => newVideo(dispatch, data, file)
})

const VideoDialogContainer = connect(mapStateToProps, mapDispatchToProps)(VideoDialog);

export default VideoDialogContainer;