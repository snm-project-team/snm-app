import { connect } from 'react-redux';
import SideNav from '../../components/sideMenu';

function mapStateToProps(state) {
  return {
    dislayContent: state.main.dislayContent,
  };
}

export default connect(
  mapStateToProps,
)(SideNav);
