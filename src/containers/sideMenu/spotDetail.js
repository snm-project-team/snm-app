import { connect } from 'react-redux';
import SpotDetail from '../../components/sideMenu/spotDetail';

function mapStateToProps(state) {
  return {
    spotId: state.main.spotId,
  };
}

export default connect(
  mapStateToProps,
)(SpotDetail);
