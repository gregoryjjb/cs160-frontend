import { connect } from 'react-redux';
import { openVideoDialog } from 'actions';
import ButtonPanel from 'components/ButtonPanel';

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    onNewVideoClick: () => dispatch(openVideoDialog())
})

const ButtonPanelContainer = connect(mapStateToProps, mapDispatchToProps)(ButtonPanel);

export default ButtonPanelContainer;