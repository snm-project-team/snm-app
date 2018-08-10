import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { setMenuOpen } from '../../actions/main';
import Login from '../../components/login';

function mapDispatchToProps(dispatch) {
  return {
    login: (isSideMenuOpen) => dispatch(NavigationActions.navigate({ routeName: 'Main' }))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Login);
