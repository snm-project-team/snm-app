import React from 'react';
import { Button, View, Text } from 'react-native';

export default class LoginScreen extends React.Component {
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