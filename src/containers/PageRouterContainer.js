import { connect } from 'react-redux';
import PageRouter from 'components/PageRouter';

const mapStateToProps = (state) => ({
    isLoggedIn: (state.session.user != null)
})

const PageRouterContainer = connect(mapStateToProps)(PageRouter);

export default PageRouterContainer;