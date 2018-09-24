import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, ScrollView } from 'react-native';
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
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const image = this.props.spotInfo.id === 'abcde' ? require('../../images/spot/test.jpg') : require('../../images/spot/test2.jpg');
    return (
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <List>
          <ListItem>
            <Text>
              {this.props.spotInfo.name}
            </Text>
          </ListItem>
        </List>
        <ScrollView style={styles.informationContainer}>
          <List>
            <ListItem>
              <Text style={styles.column1}>
                住所：
              </Text>
              <Text style={styles.column2}>
                {this.props.spotInfo.address}
              </Text>
            </ListItem>
            <ListItem>
              <Text style={styles.column1}>
                電話番号：
              </Text>
              <Text style={styles.column2}>
                {this.props.spotInfo.phoneNumber}
              </Text>
            </ListItem>
            <ListItem>
              <Text style={styles.column1}>
                営業時間：
              </Text>
              <Text style={styles.column2}>
                {this.props.spotInfo.businessHours}
              </Text>
            </ListItem>
            <ListItem>
              <Text style={styles.column1}>
                評価：
              </Text>
              <Text style={styles.column2}>
                ★★★★☆
              </Text>
            </ListItem>
          </List>
        </ScrollView>
        <ScrollView style={styles.chatContainer}>
          <List>
            <ListItem>
              <Text>
                チャット
              </Text>
            </ListItem>
          </List>
        </ScrollView>
      </View>
    );
  }
}
