import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { signUp } from '../../actions/authentication';
import SignUp from '../../components/signUp';

function mapDispatchToProps(dispatch) {
  return {
    signUp: () => dispatch(signUp())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
