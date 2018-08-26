import { connect } from 'react-redux';
import { signUp } from '../../actions/authentication';
import SignUp from '../../components/signUp';

function mapDispatchToProps(dispatch) {
  return {
    signUp: authInfo => dispatch(signUp(authInfo)),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(SignUp);
