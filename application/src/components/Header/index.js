import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';

export default class HeaderIconButtonTextButtonExample extends React.Component {

  render() {
    return (
      <Header>
        <Left>
          <Button transparent>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right>
          <Button transparent>
            <Text>Cancel</Text>
          </Button>
        </Right>
      </Header>
    );
  }
}