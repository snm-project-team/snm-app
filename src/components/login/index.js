import React from 'react';
import PropTypes from 'prop-types';
import { Button, View, Text } from 'react-native';

export default class LoginScreen extends React.Component {
  static propTypes={
    login: PropTypes.func.isRequired
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screeen</Text>
        <Button
          title="Login"
          onPress={() => this.props.login()}
        />
      </View>
    );
  }
}