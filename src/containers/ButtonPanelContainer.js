import { connect } from 'react-redux';
import { openVideoDialog, openStreamDialog } from 'actions';
import { popToast } from 'actions/ui';
import ButtonPanel from 'components/ButtonPanel';

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
	onNewVideoClick: () => dispatch(openVideoDialog()),
	onStreamClick: () => dispatch(openStreamDialog()),
	onHelpClick: () => popToast(dispatch, 'help me', 5000)
})

const ButtonPanelContainer = connect(mapStateToProps, mapDispatchToProps)(ButtonPanel);

export default ButtonPanelContainer;