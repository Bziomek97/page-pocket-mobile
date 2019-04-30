import React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';

import { getBookmark } from './API/Pockets.js'

export default class App extends React.Component<Props> {

  static async getData() {
    const data = await getBookmark();
    console.log(data);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.contentTxt}>2nd Screen</Text>
        <Button onPress={() => {this.props.navigation.navigate('Home')}} title="Go to home screen" />
        <Button onPress={() => {this.props.navigation.navigate('Login')}} title="Go to login screen" />
        <Button onPress={() => {App.getData()}} title="Try me" style='top: 10px;' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentTxt: {
    fontSize: 25,
    marginBottom: 8,
  },
});
