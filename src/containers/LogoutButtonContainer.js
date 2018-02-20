import { connect } from 'react-redux';
import { removeSession } from 'actions';
import LogoutButton from 'components/LogoutButton';

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    onSuccess: () => dispatch(removeSession())
})

const LogoutButtonContainer = connect(mapStateToProps, mapDispatchToProps)(LogoutButton);

export default LogoutButtonContainer;