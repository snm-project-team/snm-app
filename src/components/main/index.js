import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Drawer from 'react-native-drawer';
import SideNav from '../../containers/sideNav/mainMenu';
import Map from './map'

const drawerStyles = {
  drawer: { backgroundColor: '#FFFFFF'},
  main: { paddingLeft: 3 },
}

export default class DrawerComponent extends Component {
  static propTypes={
    isSideMenuOpen: PropTypes.bool.isRequired,
    setMenuOpen: PropTypes.func.isRequired
  }
  render() {
    return (
      <Drawer
        open={this.props.isSideMenuOpen}
        onClose={() => {
          if(this.props.isSideMenuOpen) {
            this.props.setMenuOpen(false)
          }
          }
        }
        type="overlay"
        content={<SideNav />}
        tapToClose
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
      >
        <Map />
      </Drawer>
    );
  }
}
