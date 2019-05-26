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
import { isLogged } from './scripts/session';
import { SearchBar, Header, colors } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

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

  /*componentDidMount() {
    isLogged()
    .then(result => {
      this.props.navigation.setParams({header: null})
      this.setState({result});
      if(result) getBookmark().then(response => this.setState({data: response,copyData: response}))
    })
  }*/

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
            <ScrollView style={styles.flatList}>
              <FlatList
                data={data}
                renderItem={this._renderItem}
              >
              </FlatList>
              </ScrollView>

        </View>
    );
  else return (
    <ImageBackground
          source={require("../public/materials/background.jpg")}
          style={{width: '100%', height: '100%'}}>

        <NavigationEvents
          onDidFocus = {() => {this._updater()}}
        />  
            <View style={styles.info}>
              <Text style={styles.contentTxt}>
                You must logged or registered to see your bookmarks or if u logged, you swipe down.
              </Text>
            </View>
        </ImageBackground>
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
  contentTxt: {
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'center',
    color: 'white'
  },
  info:{
    flex: 0.23,
    alignItems: 'stretch',
    width: '95%',
    left: '2.5%',
    borderColor: 'rgba(0,0,0,0.8)',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 5,
    backgroundColor: 'rgba(154,154,154,0.5)',
    marginTop: '52%',
  },
  flatList:{
    flex: 1,
    backgroundColor: 'white', // Pick
    alignItems: 'stretch',
    width: '100%',
  }
});
