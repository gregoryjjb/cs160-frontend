import { connect } from 'react-redux';
import { closeStreamDialog } from 'actions';
import StreamDialog from 'components/StreamDialog';

const mapStateToProps = (state) => ({
    isOpen: state.ui.streamDialogIsOpen,
})

const mapDispatchToProps = (dispatch) => ({
    onClose: () => dispatch(closeStreamDialog())
})

const StreamDialogContainer = connect(mapStateToProps, mapDispatchToProps)(StreamDialog);

export default StreamDialogContainer;