import { connect } from 'react-redux';
import { Toaster } from 'components/Toaster';

const mapStateToProps = (state) => ({
	toasts: state.ui.toasts
})

const ToasterContainer = connect(mapStateToProps)(Toaster);

export default ToasterContainer;