import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, ScrollView } from 'react-native';
import {
  List,
  ListItem,
  Card,
  CardItem,
  Text,
  Left,
  Body,
  Right,
} from 'native-base';
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
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const icon = require('../../images/icon/test.png');
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
          <Card style={styles.card}>
            <CardItem>
              <Left>
                <Image source={icon} style={styles.icon} />
                <Text>
                  テストユーザー
                </Text>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Text style={styles.cardText}>
                ここめっちゃ良いとこ
              </Text>
            </CardItem>
            <CardItem>
              <Left>
                <Text>
                  返信
                </Text>
              </Left>
              <Body>
                <Text>
                  4 いいね
                </Text>
              </Body>
              <Right>
                <Text>
                  45分前
                </Text>
              </Right>
            </CardItem>
          </Card>
          <Card style={styles.card}>
            <CardItem>
              <Left>
                <Image source={icon} style={styles.icon} />
                <Text>
                  テストユーザー
                </Text>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Text style={styles.cardText}>
                写真追加しました。
              </Text>
            </CardItem>
            <CardItem>
              <Left>
                <Text>
                  返信 (1)
                </Text>
              </Left>
              <Body>
                <Text>
                  9 いいね
                </Text>
              </Body>
              <Right>
                <Text>
                  23分前
                </Text>
              </Right>
            </CardItem>
          </Card>
        </ScrollView>
      </View>
    );
  }
}
