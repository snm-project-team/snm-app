import { connect } from 'react-redux';
import { setStoreInfoIsOpen } from '../../actions/map';
import StoreInformation from '../../components/map/store-information.jsx';

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
)(StoreInformation);
