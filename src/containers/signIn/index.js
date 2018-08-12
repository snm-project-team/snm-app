import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { signIn } from '../../actions/authentication';
import SignIn from '../../components/signIn';

function mapDispatchToProps(dispatch) {
  return {
    signIn: authInfo => dispatch(signIn(authInfo)),
    moveSignUpPage: () => dispatch(NavigationActions.navigate({ routeName: 'SignUp' })),
    moveMainPage: () => dispatch(NavigationActions.navigate({ routeName: 'Main' })),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
