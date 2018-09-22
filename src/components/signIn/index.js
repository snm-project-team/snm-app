import React from 'react';
import PropTypes from 'prop-types';
import {
  KeyboardAvoidingView,
  TextInput,
  Button,
} from 'react-native';
import { EMPTY_STRING } from '../../common/globalConstants';
import { BASIC } from '../../common/globalStyleConstants';
import styles from './styles';
import { TEXT } from './constants';

export default class SignInScreen extends React.Component {
  state = {
    email: EMPTY_STRING,
    password: EMPTY_STRING,
  };

  static propTypes = {
    getCurrentUser: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired,
    moveSignUpPage: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getCurrentUser();
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
          id="signIn"
          // ボタンのコンポネントはタイトル直入れじゃないと怒る
          title="サインイン"
          buttonStyle={styles.button}
          onPress={() => this.props.signIn({
            email: this.state.email,
            password: this.state.password,
          })}
        />
        <Button
          id="signUp"
          title="新規登録"
          buttonStyle={styles.button}
          onPress={() => this.props.moveSignUpPage()}
        />
      </KeyboardAvoidingView>
    );
  }
}
