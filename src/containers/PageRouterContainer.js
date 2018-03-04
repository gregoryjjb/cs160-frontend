import { connect } from 'react-redux';
import PageRouter from 'components/PageRouter';

const mapStateToProps = (state) => ({
    isLoggedIn: (state.session.user != null),
    isLoading: (state.session.isFetching)
})

const PageRouterContainer = connect(mapStateToProps)(PageRouter);

export default PageRouterContainer;