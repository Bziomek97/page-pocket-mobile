import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { LazyloadScrollView, LazyloadView } from 'react-native-lazyload-deux';
import { getBookmark } from './API/Pockets';
import { isLogged } from './scripts/session';
import { SearchBar, Header } from 'react-native-elements';
import SearchItem from './Component/SearchItem';


export default class SearchScreen extends React.Component<Props> {

  static navigationOptions = ({navigation}) => {
    const login = navigation.getParam('login');
    if(login){
      return {
        header: null,
      }
    }
    else {
      return {
        title: "Search",
        headerStyle: {
          backgroundColor: '#1a1a1a',
        },
        headerTintColor: 'white',
      }
    }
  }

  state = {
    data: [],
    search: "",
    result: false,
  }


  searchFilterFunction = (search) => {
    let array = this.state.copyData;
    let newArray = array.filter(value => {
      return value.tags.filter(tag => (tag.toLowerCase()).startsWith(search.toLowerCase())).length !== 0;
    });

    this.setState({data: newArray});
  };

  _updater = () => {
    isLogged()
    .then(result => {
      this.setState({result});
      if(result) {
        this.props.navigation.setParams({login: result});
        getBookmark().then(response => this.setState({data: response,copyData: response}));
      }
      else { 
        this.props.navigation.setParams({
          login: result
        });
        this.setState({data:[],copyData:[]});
      }})
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
      placeholder="Search bookmarks by tag..."
      onChangeText={this._onChange}
      value={this.state.search}
      onClear={text => this.setState({search: text,data: this.state.copyData})}
      containerStyle={styles.input}
    />);
  }
  
  _generateItems = ({item}) => {
    return(
      <SearchItem data={item}/>
    );
  }

  render() {

    const data = this.state.data;

    if(this.state.result)
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
            />
            <LazyloadScrollView style={styles.flatList}>
              <FlatList
                data={data}
                renderItem={this._generateItems}
              >
              </FlatList>
              </LazyloadScrollView>

        </View>
    );
  else return (
    <ImageBackground
          source={require("../public/materials/background.jpg")}
          style={{width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center'}}>

        <NavigationEvents
          onDidFocus = {() => {this._updater()}}
        />  
            <LazyloadView style={styles.info}>
              <Text style={styles.contentTxt}>
                You have to login or register to search your bookmarks.
              </Text>
            </LazyloadView>
        </ImageBackground>
  );
  }
}

  const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e0e0e0'
  },
  contentTxt: {
    fontSize: 25,
    marginBottom: 8,
  },
  input: {
      width: '100%',
      fontSize: 18,
      backgroundColor: "transparent",
      borderColor: 'transparent',
    height: '97%'
  },
  row: {
    backgroundColor: 'rgba(154,154,154,0.5)',
    paddingLeft: 16,
    marginTop: 1,
    marginBottom: 1,
  },
  contentTxt: {
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'center',
    color: 'white'
  },
  info:{
    width: '95%',
    borderColor: 'rgba(0,0,0,0.8)',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 5,
    backgroundColor: 'rgba(154,154,154,0.5)',
  },
  flatList:{
    flex: 1,
    alignItems: 'stretch',
    width: '95%',
  }
});
