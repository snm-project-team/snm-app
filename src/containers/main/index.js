import { connect } from 'react-redux';
import { getCurrentUser } from '../../actions/authentication';
import { setMenuOpen } from '../../actions/main';
import Main from '../../components/main';

function mapStateToProps(state) {
  return {
    isSideMenuOpen: state.main.isSideMenuOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCurrentUser: () => dispatch(getCurrentUser()),
    setMenuOpen: isSideMenuOpen => dispatch(setMenuOpen(isSideMenuOpen)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
