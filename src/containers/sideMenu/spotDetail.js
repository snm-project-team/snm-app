import { connect } from 'react-redux';
import { getSpotInfo } from '../../actions/spotDetail';
import SpotDetail from '../../components/sideMenu/spotDetail';

function mapStateToProps(state) {
  return {
    spotId: state.main.spotId,
    spotInfo: state.spotDetail.spotInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSpotInfo: spotId => dispatch(getSpotInfo(spotId)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SpotDetail);
