import React from 'react';
import PropTypes from 'prop-types';
import {
  KeyboardAvoidingView,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 100,
    marginBottom: 20,
  },
  textInput: {
    marginBottom: 20,
    borderWidth: 1,
  },
});

export default class SignUpScreen extends React.Component {
  state = {
    email: '',
    password: '',
  };

  static propTypes = {
    signUp: PropTypes.func.isRequired,
  }

  render() {
    const { signUp } = this.props;
    const { email, password } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container}>
        <TextInput
          value={email}
          onChangeText={value => this.setState({ email: value })}
          placeholder="メールアドレス"
          placeholderTextColor="#7c7c7c"
          underlineColorAndroid="rgba(0,0,0,0)"
          style={styles.textInput}
        />
        <TextInput
          value={password}
          onChangeText={value => this.setState({ password: value })}
          placeholder="パスワード"
          placeholderTextColor="#7c7c7c"
          underlineColorAndroid="rgba(0,0,0,0)"
          style={styles.textInput}
        />
        <Button
          title="sign up"
          onPress={() => signUp({ email, password })}
        />
      </KeyboardAvoidingView>
    );
  }
}
