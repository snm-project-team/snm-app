import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { List, ListItem, Text } from 'native-base';
import styles from './styles';

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
    // eslint-disable-next-line global-require
    const image = require('../..//images/spot/test.jpg');
    return (
      <List>
        <Image source={image} style={styles.image} />
        <ListItem>
          <Text>
            {this.props.spotInfo.name}
          </Text>
        </ListItem>
      </List>
    );
  }
}
