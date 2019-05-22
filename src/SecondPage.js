import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    ImageBackground
} from 'react-native';

import { getBookmark } from './API/Pockets.js'

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
        <Text style={styles.contentTxt}>2nd Screen</Text>
        <Button onPress={() => {this.props.navigation.navigate('Home')}} title="Go to home screen" />
        <Button onPress={() => {this.props.navigation.navigate('Register')}} title="Go to register screen" />
        <Button onPress={() => {this.props.navigation.navigate('Login')}} title="Go to login screen" />
        <Button onPress={() => {App.getData()}} title="Try me" />
      </View>

        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    button: {
        marginTop: 16,
        backgroundColor: '#9a9a9a',
        height: 50,
        width: '90%',
        left: 16,
        alignItems: 'center',
    },
    buttonTxt: {
        color:  'white',
        height: 50,
        width: 150,
        fontSize: 18,
        margin: 16,
        textAlign: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentTxt: {
        fontSize: 25,
        marginTop: 25,
    },
});
