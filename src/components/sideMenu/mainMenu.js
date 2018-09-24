import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Text } from 'native-base';
import { TEXT } from './constants';

export default class SideNav extends Component {
  static propTypes={
    signOut: PropTypes.func.isRequired,
  }

  render() {
    return (
      <List>
        <ListItem>
          <Text>
            {TEXT.EDIT_PROFILE}
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            {TEXT.GROUP_MANAGE}
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            {TEXT.EVENT_MANAGE}
          </Text>
        </ListItem>
        <ListItem id="signOut" onPress={() => this.props.signOut()}>
          <Text>
            {TEXT.SIGN_OUT}
          </Text>
        </ListItem>
      </List>
    );
  }
}
