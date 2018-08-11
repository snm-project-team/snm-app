import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { setMenuOpen } from '../../actions/main';
import SignIn from '../../components/signIn';

function mapDispatchToProps(dispatch) {
  return {
    signIn: () => dispatch(NavigationActions.navigate({ routeName: 'Main' })),
    moveSignUpPage: () => dispatch(NavigationActions.navigate({ routeName: 'SignUp' })),
    moveMainPage: () => dispatch(NavigationActions.navigate({ routeName: 'Main' }))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
