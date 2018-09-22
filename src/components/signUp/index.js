import React from 'react';
import PropTypes from 'prop-types';
import {
  KeyboardAvoidingView,
  TextInput,
  Button,
} from 'react-native';
import { EMPTY_STRING } from '../../common/globalConstants';
import { BASIC } from '../../common/globalStyleConstants';
import { TEXT } from './constants';
import styles from './styles';

export default class SignUpScreen extends React.Component {
  state = {
    email: EMPTY_STRING,
    password: EMPTY_STRING,
  };

  static propTypes = {
    signUp: PropTypes.func.isRequired,
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <TextInput
          value={this.state.email}
          onChangeText={value => this.setState({ email: value })}
          placeholder={TEXT.EMAIL}
          placeholderTextColor={BASIC.PLACE_HOLDER_TEXT_COLOR}
          underlineColorAndroid={BASIC.UNDER_LINE_COLOR_ANDROID}
          style={styles.textInput}
        />
        <TextInput
          value={this.state.password}
          onChangeText={value => this.setState({ password: value })}
          placeholder={TEXT.PASSWORD}
          placeholderTextColor={BASIC.PLACE_HOLDER_TEXT_COLOR}
          underlineColorAndroid={BASIC.UNDER_LINE_COLOR_ANDROID}
          style={styles.textInput}
        />
        <Button
          id="signUp"
          title="登録"
          onPress={() => this.props.signUp({
            email: this.state.email,
            password: this.state.password,
          })}
        />
      </KeyboardAvoidingView>
    );
  }
}
