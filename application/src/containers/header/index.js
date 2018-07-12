import { connect } from 'react-redux';
import { setMenuOpen } from '../../actions/header';
import Header from '../../components/header';

function mapDispatchToProps(dispatch) {
  return {
    setMenuOpen: (isOpen) => dispatch(setMenuOpen(isOpen)),
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Header);
