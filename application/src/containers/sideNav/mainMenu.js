import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { setMenuOpen } from '../../actions/main';
import MainMenu from '../../components/sideNav/mainMenu';

function mapStateToProps(state) {
  return {
    navigationRoot: state.navigationRoot
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: (isSideMenuOpen) => dispatch(NavigationActions.navigate({ routeName: 'Login' }))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenu);
