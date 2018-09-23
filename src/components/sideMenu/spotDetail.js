import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Text } from 'native-base';

export default class SideNav extends Component {
  static propTypes={
    spotId: PropTypes.string.isRequired,
    spotInfo: PropTypes.shape().isRequired,
    getSpotInfo: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.getSpotInfo(this.props.spotId);
  }

  render() {
    return (
      <List>
        <ListItem>
          <Text>
            {this.props.spotInfo.name}
          </Text>
        </ListItem>
      </List>
    );
  }
}
