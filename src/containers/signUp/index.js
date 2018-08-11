import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { setMenuOpen } from '../../actions/main';
import SignUp from '../../components/signUp';

function mapDispatchToProps(dispatch) {
  return {
    signUp: () => dispatch(NavigationActions.navigate({ routeName: 'Main' }))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
