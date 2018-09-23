import { connect } from 'react-redux';
import SpotDetail from '../../components/sideNav/spotDetail';

function mapStateToProps(state) {
  return {
    spotId: state.main.spotId,
  };
}

export default connect(
  mapStateToProps,
)(SpotDetail);
