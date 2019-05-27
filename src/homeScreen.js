import React from 'react';
import {
  StyleSheet,
  FlatList,
  ImageBackground,
  Text,
  View,
  RefreshControl
} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { LazyloadScrollView } from 'react-native-lazyload-deux';
import { getBookmark } from './API/Pockets';
import Items from "./Component/Items";
import {isLogged} from './scripts/session';

export default class App extends React.Component<Props> {

  state = {
    response: [],
    result: false,
    refreshing: false,
  }

  componentDidMount(){
    isLogged()
    .then(result => {
      this.setState({result});
      if(result) getBookmark().then(response => this.setState({response}))
    })
  }

  _updater = () => {
    isLogged()
    .then(result => {
      this.setState({result});
      if(result) getBookmark().then(response => this.setState({response}))
    })
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    isLogged().then(result => {
      this.setState({result});
      if(result) getBookmark().then(response => {
        this.setState({response,refreshing:false});
      });
      else this.setState({refreshing: false});
    });
  }


  _generateItems = ({item}) => {
    return(
      <Items data={item}/>
    );
  }

  render() {

    return (
      <ImageBackground
          source={require("../public/materials/background.jpg")}
          style={{width: '100%', height: '100%',
          flex: 1, 
          justifyContent: 'center',
          alignItems: 'center',}}>

          <NavigationEvents
            onDidFocus={() => {this._updater()}}
          />
          {
          (this.state.result) ?
            <LazyloadScrollView
            style={styles.container}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
              />
            }
            showsVerticalScrollIndicator={false}>
            <FlatList
            data={this.state.response}
            renderItem={this._generateItems}/>
            </LazyloadScrollView>
            :
            <View style={styles.info}>
              <Text style={styles.contentTxt}>
                You have to login or register to see your bookmarks or if u logged, you swipe down to refresh.
              </Text>
            </View>
          }
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: '100%'
  },
  contentTxt: {
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'center',
    color: 'white'
  },
  info:{
    borderColor: 'rgba(0,0,0,0.8)',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 5,
    backgroundColor: 'rgba(154,154,154,0.5)',
    width: '95%',
  }


});
