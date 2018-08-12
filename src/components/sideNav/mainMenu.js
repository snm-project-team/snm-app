import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Text } from 'native-base';

export default class SideNav extends Component {
  static propTypes={
    logout: PropTypes.func.isRequired,
  }

  render() {
    const { logout } = this.props;
    return (
      <List>
        <ListItem>
          <Text>
            グループ管理
          </Text>
        </ListItem>
        <ListItem onPress={() => logout()}>
          <Text>
            ログアウト
          </Text>
        </ListItem>
      </List>
    );
  }
}
