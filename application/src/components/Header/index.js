import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';

const styles = StyleSheet.create({
  title: {
    paddingLeft: 80,
    textAlign: 'center'
  },
});

export default class HeaderIconButtonTextButtonExample extends React.Component {
  render() {
    return (
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => this.props.setMenuOpen(true)}
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