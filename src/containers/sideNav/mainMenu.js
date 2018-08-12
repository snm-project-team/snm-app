import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import MainMenu from '../../components/sideNav/mainMenu';

function mapStateToProps(state) {
  return {
    navigationRoot: state.navigationRoot,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(NavigationActions.navigate({ routeName: 'SignIn' })),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainMenu);
