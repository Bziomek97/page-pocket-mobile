import React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import { getBookmark } from './API/Pockets';

export default class App extends React.Component<Props> {

  static async getData() {
    const data = await getBookmark();
    console.log(data);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.contentTxt}>Main Screen</Text>
        <Button onPress={() => {this.props.navigation.navigate('SecondScreen')}} title="Go to 2nd screen" />

        <Text style={styles.contentTxt}>Press button below</Text>
        <Button onPress={() => App.getData()} title="Test button" />
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
