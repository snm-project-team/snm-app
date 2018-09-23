import { connect } from 'react-redux';
import { getCurrentUser } from '../../actions/authentication';
import { setSideMenuClose } from '../../actions/main';
import Main from '../../components/main';

function mapStateToProps(state) {
  return {
    isSideMenuOpen: state.main.isSideMenuOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCurrentUser: () => dispatch(getCurrentUser()),
    setSideMenuClose: () => dispatch(setSideMenuClose()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
