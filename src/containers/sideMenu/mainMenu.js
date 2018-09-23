import { connect } from 'react-redux';
import { signOut } from '../../actions/authentication';
import MainMenu from '../../components/sideMenu/mainMenu';

function mapStateToProps(state) {
  return {
    navigationRoot: state.navigationRoot,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signOut: () => dispatch(signOut()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainMenu);
