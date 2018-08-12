import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { getCurrentUser, signIn } from '../../actions/authentication';
import SignIn from '../../components/signIn';

function mapDispatchToProps(dispatch) {
  return {
    getCurrentUser: () => dispatch(getCurrentUser()),
    signIn: authInfo => dispatch(signIn(authInfo)),
    moveSignUpPage: () => dispatch(NavigationActions.navigate({ routeName: 'SignUp' })),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
