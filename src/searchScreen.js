import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Linking,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { getBookmark } from './API/Pockets';
import { SearchBar, Header, colors } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default class SearchScreen extends React.Component<Props> {


  state = {
    search: "",
  }


  searchFilterFunction = (search) => {
    let array = this.state.copyData;
    let newArray = array.filter(value => {
      return value.tags.filter(tag => (tag.toLowerCase()).startsWith(search.toLowerCase())).length !== 0;
    });

    this.setState({data: newArray});
  };

  componentDidMount() {
    isLogged()
    .then(result => {
      this.setState({result});
      if(result) getBookmark().then(response => this.setState({data: response,copyData: response}))
    })
  }

  _updater = () => {
    isLogged()
    .then(result => {
      this.setState({result});
      if(result) getBookmark().then(response => this.setState({data: response,copyData: response}))
    })
  }

  _onChange = (search) => {
    this.setState({search});
    if(search !== "") this.searchFilterFunction(search);
    else {
      const oldData= this.state.copyData;
      this.setState({data: oldData});
    }
  }

  _searchBar = () => {
    return(<SearchBar          
      round
      searchIcon={{ size: 24 }}
      placeholder="Search bookmarks by tags..."
      onChangeText={this._onChange}
      value={this.state.search}
      onClear={text => this.setState({search: text,data: this.state.copyData})}
      containerStyle={styles.input}
    />);
  }

  _onPress = (item) => {
    /*const url = (!(/(http|https):\/\//).test(item.source)) ? 'http://'+item.source: item.source;
    Linking.canOpenURL(url).then(supported => {
      if(supported) Linking.openURL(url);
    });*/
    this.props.navigation.navigate('DetailView',{data: item});
  }
  
  _renderItem = ({item}) => {
    return(
      <TouchableOpacity onPress={() => this._onPress(item)}
      style={styles.row}>
      <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  }

  render() {

    const { search, data } = this.state;

    return (
          <View style={styles.container}>
          <NavigationEvents
            onDidFocus = {() => {this._updater()}}
            onDidBlur = {() => {this.setState({search: ""})}}
          />
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
            <ScrollView>
              <FlatList
                data={data}
                renderItem={this._renderItem}
              >
              </FlatList>
              </ScrollView>
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
  row: {
    backgroundColor: 'rgba(154,154,154,0.5)',
    paddingLeft: 16,
    marginTop: 1,
    marginBottom: 1,
  },
});
