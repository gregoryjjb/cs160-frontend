import { connect } from 'react-redux';
import VideoList from 'components/VideoList';

const mapStateToProps = (state) => ({
    videos: [{
        name: "TestVid"
    }]
})

const mapDispatchToProps = (dispatch) => ({
    
})

const Videos = connect(mapStateToProps, mapDispatchToProps)(VideoList);

export default Videos;