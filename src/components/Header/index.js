import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  Left,
  Body,
  Button,
  Icon,
  Title,
} from 'native-base';
import { TEXT, ICON } from './constants';
import styles from './styles';

export default class HeaderComponent extends Component {
  static propTypes={
    isSideMenuOpen: PropTypes.bool.isRequired,
    setMenuOpen: PropTypes.func.isRequired,
  }

  render() {
    return (
      <Header>
        <Left>
          <Button
            id="sideMenuToggle"
            transparent
            onPress={() => this.props.setMenuOpen(!this.props.isSideMenuOpen)}
          >
            <Icon name={ICON.MENU} />
          </Button>
        </Left>
        <Body>
          <Title style={styles.title}>
            {TEXT.HEADER}
          </Title>
        </Body>
      </Header>
    );
  }
}
