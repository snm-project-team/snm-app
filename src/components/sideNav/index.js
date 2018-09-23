import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainMenu from '../../containers/sideNav/mainMenu';
import { SIDE_MENU_LIST } from '../../common/globalConstants';
import SpotDetail from '../../containers/sideNav/spotDetail';

export default class SideNav extends Component {
  static propTypes={
    dislayContent: PropTypes.string.isRequired,
  }

  render() {
    if (this.props.dislayContent === SIDE_MENU_LIST.MAIN_MENU) {
      return <MainMenu />;
    } if (this.props.dislayContent === SIDE_MENU_LIST.SPOT_DETAIL) {
      return <SpotDetail />;
    } return null;
  }
}
