import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  ImageBackground
} from 'react-native';
import { getBookmark } from './API/Pockets';
import { SearchBar, Header } from 'react-native-elements';

export default class SeachScreen extends React.Component<Props> {


  state = {
    search: "",
  }

  _onChange = (search) => {
    this.setState({search})
  }

  _searchBar = () => {
    return(<SearchBar          
      round
      searchIcon={{ size: 24 }}
      placeholder="Search bookmarks by tags"
      onChangeText={this._onChange}
      value={this.state.search}
      onClear={text => this.setState({search: text})}
      containerStyle={styles.input}
    />);
  }

  render() {

    const { search } = this.state;

    return (

          <View style={styles.container}>
            <Header
              placement="left"
              centerComponent={this._searchBar()}
              leftComponentStyle={{width: 0}}
              centerContainerStyle={{ width: '100%', paddingHorizontal: 0}}
              rightComponentStyle={{width: 0}}
              containerStyle={{ backgroundColor: '#1a1a1a', borderBottomWidth: 0}}
            >
            </Header>
            <ImageBackground
            source={require("../public/materials/background.jpg")}
            style={{width: '100%', height: '93%'}}
            >
              <FlatList>
              </FlatList>
            </ImageBackground>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  contentTxt: {
    fontSize: 25,
    marginBottom: 8,
  },
  input: {
      width: '100%',
      fontSize: 18,
      backgroundColor: "transparent",
      borderColor: 'black',
  },



});
