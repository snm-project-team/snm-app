import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Text } from 'native-base';
import { TEXT } from './constants';

export default class SideNav extends Component {
  static propTypes={
    signOut: PropTypes.func.isRequired,
  }

  render() {
    const { signOut } = this.props;
    return (
      <List>
        <ListItem>
          <Text>
            {TEXT.GROUP_MANAGE}
          </Text>
        </ListItem>
        <ListItem onPress={() => signOut()}>
          <Text>
            {TEXT.SIGN_OUT}
          </Text>
        </ListItem>
      </List>
    );
  }
}
