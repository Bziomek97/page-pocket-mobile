import React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';

export default class App extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.contentTxt}>Main Screen</Text>
        <Button onPress={() => {this.props.navigation.navigate('SecondScreen')}} title="Go to 2nd screen" />
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
