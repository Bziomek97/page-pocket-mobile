import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground
} from 'react-native';
import { getBookmark } from './API/Pockets';
import {Items } from "./Component/Items";

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

          <Items/>
        </View>

        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  contentTxt: {
    fontSize: 25,
    marginBottom: 8,
  },



});
