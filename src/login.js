import React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import { LoginForm } from './forms/loginForm.js'

export default class App extends React.Component<Props> {
  render() {
    return (
      <View>
        <LoginForm/>
      </View>
    );
  }
}