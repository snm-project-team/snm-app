import { connect } from 'react-redux';
import { setMenuOpen } from '../../actions/main';
import Header from '../../components/header';

function mapStateToProps(state) {
  return {
    isSideMenuOpen: state.main.isSideMenuOpen
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setMenuOpen: (isSideMenuOpen) => dispatch(setMenuOpen(isSideMenuOpen)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
