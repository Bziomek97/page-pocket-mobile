import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ImageBackground
} from 'react-native';
import { getBookmark } from './API/Pockets';

export default class App extends React.Component<Props> {

  static async getData() {
    const data = await getBookmark();
    console.log(data);
  }

  render() {
    return (

        <ImageBackground
            source={require("../public/materials/background.jpg")}
            style={{width: '100%', height: '100%'}}
        >

      <View style={styles.container}>
        <Text style={styles.contentTxt}>Main Screen</Text>
        <Button onPress={() => {this.props.navigation.navigate('SecondScreen')}} title="Change Screen" />

        <Text style={styles.contentTxt}>Press button below</Text>
        <Button onPress={() => App.getData()} title="Test button" />
      </View>

        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentTxt: {
    fontSize: 25,
    marginBottom: 8,
  },



});
