import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { PAGE_LIST } from '../../common/globalConstants';
import { getCurrentUser, signIn } from '../../actions/authentication';
import SignIn from '../../components/signIn';

function mapDispatchToProps(dispatch) {
  return {
    getCurrentUser: () => dispatch(getCurrentUser()),
    signIn: authInfo => dispatch(signIn(authInfo)),
    moveSignUpPage: () => dispatch(NavigationActions.navigate({ routeName: PAGE_LIST.SIGN_UP })),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
