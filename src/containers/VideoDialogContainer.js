import { connect } from 'react-redux';
import { closeVideoDialog } from 'actions';
import VideoDialog from 'components/VideoDialog';

const mapStateToProps = (state) => ({
    isOpen: state.ui.videoDialogIsOpen
})

const mapDispatchToProps = (dispatch) => ({
	onClose: () => dispatch(closeVideoDialog()),
	onSubmit: (data) => console.log('SUBMITTED', data)
})

const VideoDialogContainer = connect(mapStateToProps, mapDispatchToProps)(VideoDialog);

export default VideoDialogContainer;