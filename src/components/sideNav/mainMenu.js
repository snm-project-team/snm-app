import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Text } from 'native-base';

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
            グループ管理
          </Text>
        </ListItem>
        <ListItem onPress={() => signOut()}>
          <Text>
            ログアウト
          </Text>
        </ListItem>
      </List>
    );
  }
}
