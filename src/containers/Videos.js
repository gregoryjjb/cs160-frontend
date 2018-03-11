import { connect } from 'react-redux';
import VideoList from 'components/VideoList';
import { getVideos, selectVideo } from '../actions/video';

const mapStateToProps = (state) => ({
	videos: state.videos.videos,
	loading: state.videos.isFetching
})

const mapDispatchToProps = (dispatch) => ({
    videoSelected: (id) => dispatch(selectVideo(id))
})

const Videos = connect(mapStateToProps, mapDispatchToProps)(VideoList);

export default Videos;