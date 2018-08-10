import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';

const styles = StyleSheet.create({
  title: {
    paddingLeft: 80,
    textAlign: 'center'
  },
});

export default class HeaderComponent extends Component {
  static propTypes={
    isSideMenuOpen: PropTypes.bool.isRequired,
    setMenuOpen: PropTypes.func.isRequired
  }
  render() {
    return (
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => this.props.setMenuOpen(!this.props.isSideMenuOpen)}
          >
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title style={styles.title}>Header</Title>
        </Body>
      </Header>
    );
  }
}