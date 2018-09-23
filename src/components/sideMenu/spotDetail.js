import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Text } from 'native-base';

export default class SideNav extends Component {
  static propTypes={
    spotId: PropTypes.string.isRequired,
  }

  render() {
    return (
      <List>
        <ListItem>
          <Text>
            {this.props.spotId}
          </Text>
        </ListItem>
      </List>
    );
  }
}
