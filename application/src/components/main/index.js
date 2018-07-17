import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import Map from './map'
import SideNav from '../sideNav/mainMenu';

const drawerStyles = {
  drawer: { backgroundColor: '#FFFFFF'},
  main: { paddingLeft: 3 },
}

export default class DrawerComponent extends Component {
  render() {
    return (
      <Drawer
        open={this.props.isSideMenuOpen}
        onClose={() => {
          if(this.props.isSideMenuOpen) {
            this.props.setMenuOpen(false)}
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
