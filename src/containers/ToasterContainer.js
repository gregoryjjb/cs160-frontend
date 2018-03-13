import { connect } from 'react-redux';
import { removeToast } from 'actions/ui';
import Toaster from 'components/Toaster';

const mapStateToProps = (state) => ({
	toasts: state.ui.toasts
})

const mapDispatchToProps = (dispatch) => ({
	onAction: (id) => dispatch(removeToast(id))
})

const ToasterContainer = connect(mapStateToProps, mapDispatchToProps)(Toaster);

export default ToasterContainer;