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
    const { signUp } = this.props;
    const { email, password } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container}>
        <TextInput
          value={email}
          onChangeText={value => this.setState({ email: value })}
          placeholder={TEXT.EMAIL}
          placeholderTextColor={BASIC.PLACE_HOLDER_TEXT_COLOR}
          underlineColorAndroid={BASIC.UNDER_LINE_COLOR_ANDROID}
          style={styles.textInput}
        />
        <TextInput
          value={password}
          onChangeText={value => this.setState({ password: value })}
          placeholder={TEXT.PASSWORD}
          placeholderTextColor={BASIC.PLACE_HOLDER_TEXT_COLOR}
          underlineColorAndroid={BASIC.UNDER_LINE_COLOR_ANDROID}
          style={styles.textInput}
        />
        <Button
          id="signUp"
          title="登録"
          onPress={signUp({ email, password })}
        />
      </KeyboardAvoidingView>
    );
  }
}
