import React from 'react';
import {
  StyleSheet,
  ScrollView,
  FlatList,
  ImageBackground,
  Text,
  View,
  RefreshControl
} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { getBookmark } from './API/Pockets';
import {Items } from "./Component/Items";
import {isLogged} from './session';

export default class App extends React.Component<Props> {

  state = {
    response: [],
    result: false,
    refreshing: false,
  }

  componentDidFocus(){
    console.log('OK');
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
      <Items data={item} />
    );
  }

  render() {

    return (
      <ImageBackground
          source={require("../public/materials/background.jpg")}
          style={{width: '100%', height: '100%'}}>

      <NavigationEvents
        onDidFocus={() => {this._updater()}}
      />
          <ScrollView 
          style={styles.container}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }>
          {
          (this.state.result) ?
            <FlatList
            data={this.state.response}
            renderItem={this._generateItems}/>
            :
            <View style={styles.info}>
              <Text style={styles.contentTxt}>
                You must logged or registered to see your bookmarks or if u logged, you swipe down.
              </Text>
            </View>
          }
          </ScrollView>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    alignItems: 'stretch',
    width: '95%',
    left: '2.5%',
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
    marginTop: '55%',
  }


});
