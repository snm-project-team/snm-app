import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, TextInput, Button } from 'react-native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 100,
    marginBottom: 20
  },
  textInput: {
    marginBottom: 20,
    borderWidth: 1
  }
});

export default class SignUpScreen extends React.Component {
  state = {
    mailAddress: '',
    password: ''
  };
  static propTypes = {
    signUp: PropTypes.func.isRequired
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <TextInput
          value={this.state.mailAddress}
          onChangeText={value => this.setState({ mailAddress: value })}
          placeholder="メールアドレス"
          placeholderTextColor="#7c7c7c"
          underlineColorAndroid={'rgba(0,0,0,0)'}
          style={styles.textInput}
        />
        <TextInput
          value={this.state.password}
          onChangeText={value => this.setState({ password: value })}
          placeholder="パスワード"
          placeholderTextColor="#7c7c7c"
          underlineColorAndroid={'rgba(0,0,0,0)'}
          style={styles.textInput}
        />
        <Button
          title="sign up"
          onPress={() => this.props.signUp()}
        />
      </KeyboardAvoidingView>
    );
  }
}