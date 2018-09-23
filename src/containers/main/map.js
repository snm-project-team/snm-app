import { connect } from 'react-redux';
import { setSpotDetailOpen } from '../../actions/main';
import Map from '../../components/main/map';

function mapStateToProps(state) {
  return {
    isMainMenuOpen: state.main.isMainMenuOpen,
    isSpotDetailOpen: state.main.isSpotDetailOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSpotDetailOpen: (isSpotDetailOpen, spotId) => dispatch(
      setSpotDetailOpen({
        isSpotDetailOpen,
        spotId,
      }),
    ),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
