import React, { Component } from 'react';
import { List, ListItem, Text } from 'native-base';

export default class SideNav extends Component {
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
        <ListItem>
          <Text>Bradley Horowitz</Text>
        </ListItem>
      </List>
    );
  }
}