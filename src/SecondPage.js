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
        <Button onPress={() => {this.props.navigation.navigate('Register')}} title="Go to register screen" />
        <Button onPress={() => {App.getData()}} title="Try me" />
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
    marginTop: 25,
  },
});
