import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Text } from 'native-base';

export default class SideNav extends Component {
  static propTypes={
    logout: PropTypes.func.isRequired
  }
  render() {
    return (
      <List>
        <ListItem>
          <Text>A</Text>
        </ListItem>
        <ListItem>
          <Text>Aaron Bennet</Text>
        </ListItem>
        <ListItem>
          <Text>Ali Connors</Text>
        </ListItem>
        <ListItem>
          <Text>B</Text>
        </ListItem>
        <ListItem onPress={() => this.props.logout()}>
          <Text>ログアウト</Text>
        </ListItem>
      </List>
    );
  }
}