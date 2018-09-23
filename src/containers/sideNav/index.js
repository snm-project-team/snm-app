import { connect } from 'react-redux';
import SideNav from '../../components/sideNav';

function mapStateToProps(state) {
  return {
    dislayContent: state.main.dislayContent,
  };
}

export default connect(
  mapStateToProps,
)(SideNav);
