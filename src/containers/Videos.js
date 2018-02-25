import { connect } from 'react-redux';
import VideoList from 'components/VideoList';
import { getVideos } from '../actions/video';

const mapStateToProps = (state) => ({
    videos: state.videos.videos
})

const mapDispatchToProps = (dispatch) => ({
    
})

const Videos = connect(mapStateToProps, mapDispatchToProps)(VideoList);

export default Videos;