import { connect } from 'react-redux';
import { beginLogout } from 'actions';
import LogoutButton from 'components/LogoutButton';

const mapStateToProps = (state) => ({
    sessionId: state.session.user.sessionId,
    isFetching: state.session.isFetching
})

const mapDispatchToProps = (dispatch) => ({
    onSuccess: (sessionId) => beginLogout(dispatch, sessionId)
})

const LogoutButtonContainer = connect(mapStateToProps, mapDispatchToProps)(LogoutButton);

export default LogoutButtonContainer;