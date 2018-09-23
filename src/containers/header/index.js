import { connect } from 'react-redux';
import { setMainMenuOpen } from '../../actions/main';
import Header from '../../components/header';

function mapStateToProps(state) {
  return {
    isSideMenuOpen: state.main.isSideMenuOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setMainMenuOpen: isMainMenuOpen => dispatch(setMainMenuOpen(isMainMenuOpen)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
