import { connect } from 'react-redux';
import { setStoreInfoIsOpen } from '../../actions/map';
import MapComponent from '../../components/map';

function mapStateToProps(state) {
  return {
    isOpen: state.map.isOpen
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setStoreInfoIsOpen: (isOpen) => {
      dispatch(setStoreInfoIsOpen(isOpen));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapComponent);
